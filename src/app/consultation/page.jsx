"use client";

import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import StripeCheckout from "react-stripe-checkout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "./Consultation.module.css";

const CLIENT_ID = "744600285710-o88sor3fkikrqmsevadduasuu84q5pa0.apps.googleusercontent.com";
const API_KEY = "AIzaSyBAH07eHPiM6I97P3WCKhh3DpkkjK5ws-o";
const SCOPES = "https://www.googleapis.com/auth/calendar";

const Consultation = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slotDuration, setSlotDuration] = useState(10); // Default 10 min
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
        })
        .then(() => {
          console.log("GAPI Initialized");
        })
        .catch((error) => console.error("GAPI Init Error:", error));
    }
    gapi.load("client:auth2", start);
  }, []);

  const signIn = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        fetchAvailableSlots();
      })
      .catch((error) => console.error("Google Auth Error:", error));
  };

  const fetchAvailableSlots = async () => {
    const calendarId = "primary";
    const timeMin = new Date().toISOString();
    const timeMax = new Date(
      new Date().setDate(new Date().getDate() + 7)
    ).toISOString();

    try {
      const response = await gapi.client.calendar.events.list({
        calendarId,
        timeMin,
        timeMax,
        singleEvents: true,
        orderBy: "startTime",
      });

      console.log(response);

      const events = response.result.items || [];
      let availableSlots = generateAvailableSlots(events);
      setSlots(availableSlots);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const generateAvailableSlots = (events) => {
    let slots = [];
    let startHour = 9;
    let endHour = 18;
    let currentTime = new Date();

    // Assuming one day for simplicity; extend as needed
    for (let day = 0; day < 1; day++) {
      let date = new Date();
      date.setDate(currentTime.getDate() + day);
      for (let hour = startHour; hour < endHour; hour++) {
        for (let min = 0; min < 60; min += slotDuration) {
          let slotStart = new Date(date);
          slotStart.setHours(hour, min, 0, 0);
          let slotEnd = new Date(slotStart.getTime() + slotDuration * 60000);

          let isAvailable = !events.some((event) => {
            let eventStart = new Date(event.start.dateTime);
            let eventEnd = new Date(event.end.dateTime);
            return slotStart >= eventStart && slotStart < eventEnd;
          });

          if (isAvailable) {
            slots.push({ start: slotStart, end: slotEnd });
          }
        }
      }
    }
    return slots;
  };

  // Stripe payment handler; in a real-world scenario, send the token to your server for processing.
  const onToken = (token) => {
    console.log("Payment token received:", token);
    // Simulate a successful payment
    setPaymentComplete(true);
    alert("Payment successful! You can now schedule your meeting.");
    // Optionally, re-fetch available slots after payment
    fetchAvailableSlots();
  };

  const createEvent = async () => {
    if (!selectedSlot) return alert("Please select a time slot.");

    const event = {
      summary: "Consultation Meeting",
      description: "Mentorship session.",
      start: {
        dateTime: selectedSlot.start.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: selectedSlot.end.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      attendees: [{ email: "user@example.com" }],
      conferenceData: {
        createRequest: {
          requestId: "random-string",
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    try {
      const request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
        conferenceDataVersion: 1,
      });

      request.execute((event) => {
        alert("Meeting scheduled! Link: " + event.hangoutLink);
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-pink-50 px-4">
          <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-4 md:p-8 flex flex-col items-center">
            <h1 className="text-lg md:text-xl text-tertiary font-semibold mb-4 md:mb-6 text-center">
              Book a Mentorship Session with our expert counselors
            </h1>

            <button
              onClick={signIn}
              className="w-full md:w-auto mb-4 text-sm bg-secondary text-white px-4 md:px-6 py-2 bg-blue-500 rounded-lg shadow text-center"
            >
              <span className="text-xl font-bold">G</span> Sign in with Google
            </button>

            <div className="flex justify-center mb-4 w-full">
              <Tabs
                className="w-full md:w-auto bg-gray p-2 rounded-lg flex justify-center"
                defaultValue={slotDuration.toString()}
                onValueChange={(value) => {
                  setSlotDuration(Number(value));
                  // Reset payment status when switching tabs
                  if (Number(value) === 30) setPaymentComplete(false);
                  fetchAvailableSlots();
                }}
              >
                <TabsList className="w-full md:w-auto bg-gray-100 p-1 rounded-lg flex justify-center">
                  {[10, 30].map((duration) => (
                    <TabsTrigger
                      key={duration}
                      value={duration.toString()}
                      className={`flex-1 md:flex-none px-3 md:px-6 py-2 rounded-md transition-all duration-200 text-sm md:text-base ${
                        slotDuration === duration
                          ? "bg-white text-black shadow-md"
                          : "bg-gray hover:bg-gray-400"
                      }`}
                    >
                      {duration} Min
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Slot Duration Selection */}
            <div className="flex flex-col md:flex-row gap-2 mb-4 w-full justify-center">
              <button
                className={`px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-semibold rounded-lg text-center ${
                  slotDuration === 10 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => {
                  setSlotDuration(10);
                  fetchAvailableSlots();
                }}
              >
                10 Min Free Meeting
              </button>
              <button
                className={`px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-semibold rounded-lg text-center ${
                  slotDuration === 30 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => {
                  setSlotDuration(30);
                  // Reset payment status for a new 30-min session
                  setPaymentComplete(false);
                  fetchAvailableSlots();
                }}
              >
                30 Min Paid Meeting
              </button>
            </div>

            {/* Display for 10 Min Meetings */}
            {slotDuration === 10 && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-4 bg-gray-50 rounded-lg w-full place-items-center">
                  {slots.map((slot, index) => (
                    <div
                      key={index}
                      className={`p-2 md:p-3 text-center border rounded-lg cursor-pointer transition-all duration-200 relative group text-sm md:text-base w-full ${
                        selectedSlot === slot
                          ? "bg-green-500 text-white"
                          : "bg-white hover:bg-blue-100"
                      }`}
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {slot.start.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                        Click to select this slot
                      </span>
                    </div>
                  ))}
                </div>
                {selectedSlot && (
                  <button
                    onClick={createEvent}
                    className="w-full md:w-auto mt-4 px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 text-center"
                  >
                    Confirm Booking
                  </button>
                )}
              </>
            )}

            {/* Display for 30 Min Meetings */}
            {slotDuration === 30 && (
              <div>
                {!paymentComplete ? (
                  <StripeCheckout
                    token={onToken}
                    stripeKey="your_publishable_key_here"
                    amount={3000} // Amount in cents; adjust as needed
                    name="30 Min Paid Meeting"
                    description="Pay to schedule your 30 minute meeting"
                    currency="USD"
                  >
                    <button className="w-full md:w-auto mt-4 px-4 md:px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 text-center">
                      Pay to Schedule 30 Min Meeting
                    </button>
                  </StripeCheckout>
                ) : (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-4 bg-gray-50 rounded-lg w-full place-items-center">
                      {slots.map((slot, index) => (
                        <div
                          key={index}
                          className={`p-2 md:p-3 text-center border rounded-lg cursor-pointer transition-all duration-200 relative group text-sm md:text-base w-full ${
                            selectedSlot === slot
                              ? "bg-green-500 text-white"
                              : "bg-white hover:bg-blue-100"
                          }`}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {slot.start.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                          <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                            Click to select this slot
                          </span>
                        </div>
                      ))}
                    </div>
                    {selectedSlot && (
                      <button
                        onClick={createEvent}
                        className="w-full md:w-auto mt-4 px-4 md:px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 text-center"
                      >
                        Confirm Booking
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
