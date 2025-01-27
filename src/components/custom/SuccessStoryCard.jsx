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
    <div className="flex justify-between pr-[10%] py-10 items-center bg-white shadow-md p-6 w-[50%] text-left gap-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className={clsx("h-14 border", borderColor)}></div>
      <div className={clsx("flex items-center justify-center rounded-full w-16 h-16", backgroundColor)}>
        <Image src={stats.icon || VT1} alt="Visa Categories Icon" className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-4xl font-semibold text-center text-dark">{stats.title}</h2>
        <p className="text-tertiary">{stats.description}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
