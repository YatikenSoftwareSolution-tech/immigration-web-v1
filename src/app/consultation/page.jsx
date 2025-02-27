"use client";

import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import StripeCheckout from "react-stripe-checkout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "./Consultation.module.css";

const CLIENT_ID =
  "744600285710-o88sor3fkikrqmsevadduasuu84q5pa0.apps.googleusercontent.com";
const API_KEY = "AIzaSyBAH07eHPiM6I97P3WCKhh3DpkkjK5ws-o";
const SCOPES = "https://www.googleapis.com/auth/calendar";

const Consultation = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slotDuration, setSlotDuration] = useState(10); // Default 10 min
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [user, setUser] = useState(null); // New state to store the signed-in user

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
      .then((googleUser) => {
        // Log user info to verify sign-in was successful
        console.log("User signed in:", googleUser.getBasicProfile());
        // Optionally, update the state with the signed-in user's info
        setUser(googleUser);
        // Proceed to fetch available slots after sign-in
        fetchAvailableSlots();
      })
      .catch((error) => {
        // Properly catch and log any errors during sign-in
        console.error("Google Auth Error:", error);
      });
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
            {!user && (
              <button
                onClick={signIn}
                className="w-full md:w-auto mb-4 text-sm bg-secondary text-white px-4 md:px-6 py-2 bg-blue-500 rounded-lg shadow text-center"
              >
                <span className="text-xl font-bold">G</span> Sign in with Google
              </button>
            )}
            <div className="">
              <Tabs
                className="w-full md:w-auto bg-gray-200 border p-2 rounded-lg "
                defaultValue="10MinFreeMeating"
                onValueChange={(value) => {
                  setSlotDuration(Number(value));
                  // Reset payment status when switching tabs
                  if (Number(value) === 30) setPaymentComplete(false);
                  fetchAvailableSlots();
                }}
              >
                <TabsList className="w-full md:w-auto bg-white-50 px-4 py-2 rounded-lg flex justify-center">
                  <TabsTrigger
                    value="10MinFreeMeating"
                    className="mr-4 data-[state=active]:bg-white data-[state=active]:text-secondary"
                  >
                    10 Min Free Meeting
                  </TabsTrigger>
                  <TabsTrigger
                    value="30MinMeeting"
                    className="mr-4 data-[state=active]:bg-white data-[state=active]:text-secondary"
                  >
                    30 Min Meeting
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="10MinFreeMeating">
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-4 bg-gray-50 rounded-lg w-full place-items-center">
                      {slots.map((slot, index) => (
                        <div
                          key={index}
                          className={`p-2 md:p-3 text-center  rounded-lg cursor-pointer transition-all duration-200 relative group text-sm md:text-base w-full ${
                            selectedSlot === slot
                              ? "bg-green-500 text-white"
                              : "bg-tertiary text-white hover:bg-tertiary hover:text-white"
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
                </TabsContent>
                <TabsContent value="30MinMeeting">
                  <div>
                    {!paymentComplete ? (
                      <StripeCheckout
                        token={onToken}
                        stripeKey="your_publishable_key_here"
                        amount={10000} // Amount in cents: $30.00
                        name="30 Min Paid Meeting"
                        description="Pay to schedule your 30 minute meeting"
                        currency="USD"
                      >
                        <div className="w-full mt-6 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                            Payment Details
                          </h5>
                          <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-3xl font-semibold">$</span>
                            <span className="text-5xl font-extrabold tracking-tight">
                              100
                            </span>
                          </div>
                          <ul role="list" className="space-y-5 my-7">
                            <li className="flex items-center">
                              <svg
                                className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                              </svg>
                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                                One-on-One consultation
                              </span>
                            </li>
                            <li className="flex">
                              <svg
                                className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                              </svg>
                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                                30+ years of experience
                              </span>
                            </li>
                            <li className="flex">
                              <svg
                                className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                              </svg>
                              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                                Integration help
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Pay To:</span>
                                <span className="text-gray-800 font-semibold">
                                  Consultant Name
                                </span>
                              </div>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Service:</span>
                                <span className="text-gray-800 font-semibold">
                                  30 Min Consultation
                                </span>
                              </div>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Amount:</span>
                                <span className="text-gray-800 font-semibold">
                                  $100.00
                                </span>
                              </div>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Currency:</span>
                                <span className="text-gray-800 font-semibold">
                                  USD
                                </span>
                              </div>
                            </li>
                          </ul>
                          <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                          >
                            Pay Now
                          </button>
                        </div>

                        
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
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
