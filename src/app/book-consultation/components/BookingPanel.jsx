// components/BookingPanel.js
import React from "react";
import SlotCard from "./SlotCard";

const BookingPanel = ({
  user,
  slots,
  selectedSlot,
  onSelectSlot,
  createEvent,
  signIn,
}) => {
  return (
    <div>
      {!user && (
        <button
          onClick={signIn}
          className="mb-4 bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg shadow text-center"
        >
          Sign in with Google
        </button>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 md:p-4 bg-gray-50 rounded-lg w-full">
        {slots.map((slot, index) => (
          <SlotCard
            key={index}
            slot={slot}
            selected={selectedSlot === slot}
            onSelect={() => onSelectSlot(slot)}
          />
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
    </div>
  );
};

export default BookingPanel;
