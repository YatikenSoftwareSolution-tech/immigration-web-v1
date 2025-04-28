// components/SlotCard.js
import React from "react";

const SlotCard = ({ slot, selected, onSelect }) => {
  return (
    <div
      className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 relative group ${
        selected ? "bg-green-500 text-white" : "bg-white hover:bg-blue-100"
      }`}
      onClick={onSelect}
    >
      <div className="text-sm font-medium">
        {slot.start.toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        })}
      </div>
      <div className="mt-1">
        <span className="text-base">
          {slot.start.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>{" "}
        -{" "}
        <span className="text-base">
          {slot.end.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <span className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-black text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        Click to select this slot
      </span>
    </div>
  );
};

export default SlotCard;
