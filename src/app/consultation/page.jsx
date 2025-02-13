// "use client";

// import React, { useEffect, useState } from "react";
// import { gapi } from "gapi-script";

// const CLIENT_ID =
//   "744600285710-o88sor3fkikrqmsevadduasuu84q5pa0.apps.googleusercontent.com";
// const API_KEY = "AIzaSyBAH07eHPiM6I97P3WCKhh3DpkkjK5ws-o";
// const SCOPES = "https://www.googleapis.com/auth/calendar";

// const Page = () => {
//   const [slots, setSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [slotDuration, setSlotDuration] = useState(10); // Default 10 min

//   useEffect(() => {
//     function start() {
//       gapi.client
//         .init({
//           apiKey: API_KEY,
//           clientId: CLIENT_ID,
//           scope: SCOPES,
//           discoveryDocs: [
//             "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//           ],
//         })
//         .then(() => {
//           console.log("GAPI Initialized");
//         })
//         .catch((error) => console.error("GAPI Init Error:", error));
//     }
//     gapi.load("client:auth2", start);
//   }, []);

//   const signIn = () => {
//     gapi.auth2
//       .getAuthInstance()
//       .signIn()
//       .then(() => {
//         fetchAvailableSlots();
//       })
//       .catch((error) => console.error("Google Auth Error:", error));
//   };

//   const fetchAvailableSlots = async () => {
//     const calendarId = "primary";
//     const timeMin = new Date().toISOString();
//     const timeMax = new Date(
//       new Date().setDate(new Date().getDate() + 7)
//     ).toISOString();

//     try {
//       const response = await gapi.client.calendar.events.list({
//         calendarId,
//         timeMin,
//         timeMax,
//         singleEvents: true,
//         orderBy: "startTime",
//       });

//       const events = response.result.items || [];
//       let availableSlots = generateAvailableSlots(events);
//       setSlots(availableSlots);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const generateAvailableSlots = (events) => {
//     let slots = [];
//     let startHour = 9;
//     let endHour = 18;
//     let currentTime = new Date();

//     for (let day = 0; day < 7; day++) {
//       let date = new Date();
//       date.setDate(currentTime.getDate() + day);
//       for (let hour = startHour; hour < endHour; hour++) {
//         for (let min = 0; min < 60; min += slotDuration) {
//           let slotStart = new Date(date);
//           slotStart.setHours(hour, min, 0, 0);
//           let slotEnd = new Date(slotStart.getTime() + slotDuration * 60000);

//           let isAvailable = !events.some((event) => {
//             let eventStart = new Date(event.start.dateTime);
//             let eventEnd = new Date(event.end.dateTime);
//             return slotStart >= eventStart && slotStart < eventEnd;
//           });

//           if (isAvailable) {
//             slots.push({ start: slotStart, end: slotEnd });
//           }
//         }
//       }
//     }
//     return slots;
//   };

//   const createEvent = async () => {
//     if (!selectedSlot) return alert("Please select a time slot.");

//     const event = {
//       summary: "Consultation Meeting",
//       description: "Mentorship session.",
//       start: {
//         dateTime: selectedSlot.start.toISOString(),
//         timeZone: "Asia/Kolkata",
//       },
//       end: {
//         dateTime: selectedSlot.end.toISOString(),
//         timeZone: "Asia/Kolkata",
//       },
//       attendees: [{ email: "user@example.com" }],
//       conferenceData: {
//         createRequest: {
//           requestId: "random-string",
//           conferenceSolutionKey: { type: "hangoutsMeet" },
//         },
//       },
//     };

//     try {
//       const request = gapi.client.calendar.events.insert({
//         calendarId: "primary",
//         resource: event,
//         conferenceDataVersion: 1,
//       });

//       request.execute((event) => {
//         alert("Meeting scheduled! Link: " + event.hangoutLink);
//       });
//     } catch (error) {
//       console.error("Error creating event:", error);
//     }
//   };

//   return (
//     <div className="mt-14 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-pink-50">
//       <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8">
//         <h1 className="text-xl font-semibold text-center mb-6">
//           Book a Mentorship Session
//         </h1>
//         <button
//           onClick={signIn}
//           className="mb-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow"
//         >
//           Sign in with Google
//         </button>

//         {/* Slot Duration Selection */}
//         <div className="flex justify-center mb-4">
//           <button
//             className={`px-4 py-2 mr-2 rounded-lg ${
//               slotDuration === 10 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => {
//               setSlotDuration(10);
//               fetchAvailableSlots();
//             }}
//           >
//             10 Min
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg ${
//               slotDuration === 30 ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => {
//               setSlotDuration(30);
//               fetchAvailableSlots();
//             }}
//           >
//             30 Min
//           </button>
//         </div>

//         {/* Calendar Grid Display */}
//         <div className="grid grid-cols-4 gap-2">
//           {slots.map((slot, index) => (
//             <div
//               key={index}
//               className={`p-2 text-center border rounded-lg cursor-pointer ${
//                 selectedSlot === slot
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-100 hover:bg-gray-300"
//               }`}
//               onClick={() => setSelectedSlot(slot)}
//             >
//               {slot.start.toLocaleTimeString()}
//             </div>
//           ))}
//         </div>

//         {/* Confirm Booking Button */}
//         {selectedSlot && (
//           <button
//             onClick={createEvent}
//             className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow"
//           >
//             Confirm Booking
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";

import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";


const CLIENT_ID =
  "744600285710-o88sor3fkikrqmsevadduasuu84q5pa0.apps.googleusercontent.com";
const API_KEY = "AIzaSyBAH07eHPiM6I97P3WCKhh3DpkkjK5ws-o";
const SCOPES = "https://www.googleapis.com/auth/calendar";

const Page = () => {
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slotDuration, setSlotDuration] = useState(10); // Default 10 min

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

      console.log(response)

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
    <div className="mt-14 min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-[50%] max-w-4xl bg-white shadow-xl rounded-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-center mb-6">Book a Session</h1>
        
        <button
          onClick={signIn}
          className="mb-4 px-6 py-2 bg-blue-500 text-white text-center rounded-lg shadow hover:bg-blue-600"
        >
         <span className="text-xl font-bold">G</span> Sign in with Google
        </button>
        <div className="flex justify-center mb-4">
  <Tabs className="bg-gray p-2 rounded-lg"
    defaultValue={slotDuration.toString()}
    onValueChange={(value) => {
      setSlotDuration(Number(value));
      fetchAvailableSlots();
    }}
  >
    <TabsList className="bg-gray-100 p-1 rounded-lg flex">
      {[10, 30].map((duration) => (
        <TabsTrigger
          key={duration}
          value={duration.toString()}
          className={`px-6 py-2 rounded-md transition-all duration-200 ${
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

      oli
        

        {/* Calendar Grid Display */}
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          {slots.map((slot, index) => (
            <div
              key={index}
              className={`p-3 text-center border rounded-lg cursor-pointer transition-all duration-200 relative group ${
                selectedSlot === slot ? "bg-green-500 text-white" : "bg-white hover:bg-blue-100"
              }`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot.start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                Click to select this slot
              </span>
            </div>
          ))}
        </div>
        {selectedSlot && (
          <button
            onClick={createEvent}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;

