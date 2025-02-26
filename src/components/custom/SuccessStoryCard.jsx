import React from "react";
import VT1 from "../../assets/VT1.svg";
import Image from "next/image";
import clsx from "clsx";

const SuccessStoryCard = ({ stats }) => {
  const backgroundColors = {
    blue: "bg-blue-100",
    red: "bg-red-100",
    green: "bg-green-100",
    // Add other mappings as needed
  };

  const borderColors = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    // Add other mappings as needed
  };

  const backgroundColor = backgroundColors[stats.background] || "bg-gray-100";
  const borderColor = borderColors[stats.background] || "border-gray-300";

  return (
    <div className="flex flex-col items-start px-4 py-8 bg-white shadow-md text-left gap-4 hover:shadow-xl transition-shadow duration-300 ease-in-out"> {/* Removed width classes */}
      <div className={clsx("h-14 w-1 border", borderColor)}></div>
      <div className={clsx("flex items-center justify-center rounded-full w-16 h-16 shrink-0", backgroundColor)}>
        <Image src={stats.icon || VT1} alt="Visa Categories Icon" className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-dark">{stats.title}</h2>
        <p className="text-tertiary">{stats.description}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;

