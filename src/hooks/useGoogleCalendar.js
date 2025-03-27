// hooks/useGoogleCalendar.js
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID =
  "744600285710-o88sor3fkikrqmsevadduasuu84q5pa0.apps.googleusercontent.com";
const API_KEY = "AIzaSyBAH07eHPiM6I97P3WCKhh3DpkkjK5ws-o";
const SCOPES = "https://www.googleapis.com/auth/calendar";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

export function useGoogleCalendar(slotDuration) {
  const [user, setUser] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: DISCOVERY_DOCS,
        })
        .then(() => {
          console.log("GAPI Initialized");
        })
        .catch((error) => console.error("GAPI Init Error:", error));
    }
    gapi.load("client:auth2", start);
  }, []);

  const signIn = async () => {
    try {
      const googleUser = await gapi.auth2.getAuthInstance().signIn();
      setUser(googleUser);
      fetchSlots();
    } catch (error) {
      console.error("Google Auth Error:", error);
    }
  };

  const fetchSlots = async () => {
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
      const events = response.result.items || [];
      let availableSlots = generateAvailableSlots(events, slotDuration);
      setSlots(availableSlots);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const generateAvailableSlots = (events, slotDuration) => {
    let slots = [];
    const startHour = 9;
    const endHour = 18;
    const currentTime = new Date();

    // For simplicity, generating slots for a single day
    for (let day = 0; day < 1; day++) {
      const date = new Date();
      date.setDate(currentTime.getDate() + day);
      for (let hour = startHour; hour < endHour; hour++) {
        for (let min = 0; min < 60; min += slotDuration) {
          const slotStart = new Date(date);
          slotStart.setHours(hour, min, 0, 0);
          const slotEnd = new Date(slotStart.getTime() + slotDuration * 60000);

          const isAvailable = !events.some((event) => {
            const eventStart = new Date(event.start.dateTime);
            const eventEnd = new Date(event.end.dateTime);
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

  const createEvent = async () => {
    if (!selectedSlot) {
      return alert("Please select a time slot.");
    }
    const startDate = new Date(selectedSlot.start);
    const endDate = new Date(selectedSlot.end);
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return alert("Invalid date value. Please select a proper time slot.");
    }
    const event = {
      summary: "Consultation Meeting",
      description: "Mentorship session.",
      start: {
        dateTime: startDate.toISOString(),
        timeZone: "Canada/Eastern",
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: "Canada/Eastern",
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

  return {
    user,
    slots,
    selectedSlot,
    setSelectedSlot,
    signIn,
    fetchSlots,
    createEvent,
  };
}
