"use client";

import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "744600285710-o88sor3fkikrqmsevadduasuu84q5pa0.apps.googleusercontent.com";
const API_KEY = "AIzaSyBAH07eHPiM6I97P3WCKhh3DpkkjK5ws-o";
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const GoogleCalendar = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const signIn = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const createEvent = async () => {
    const event = {
      summary: "Mentorship Session",
      location: "Google Meet",
      description: "Book a mentorship session with our expert.",
      start: {
        dateTime: new Date(new Date().getTime() + 3600000).toISOString(), // 1 hour from now
        timeZone: "America/New_York",
      },
      end: {
        dateTime: new Date(new Date().getTime() + 7200000).toISOString(), // 2 hours from now
        timeZone: "America/New_York",
      },
      attendees: [{ email: "user@example.com" }], // Change this dynamically
      conferenceData: {
        createRequest: {
          requestId: "random-string",
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    const request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
    });

    request.execute((event) => {
      alert("Meeting scheduled! Link: " + event.hangoutLink);
    });
  };

  return (
    <div className="mt-14 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-xl font-semibold text-center">
          Book a mentorship session with our expert @{" "}
          <span className="text-secondary">The Immigration Company</span>
        </h1>
        <button onClick={signIn} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Sign in with Google
        </button>
        <button onClick={createEvent} className="mt-4 p-2 bg-green-500 text-white rounded">
          Book Session
        </button>
      </div>
    </div>
  );
};

export default GoogleCalendar;
