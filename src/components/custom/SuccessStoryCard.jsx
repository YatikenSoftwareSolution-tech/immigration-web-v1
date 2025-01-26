import React from "react";
import VT1 from "../../assets/VT1.svg";
import Image from "next/image";

const SuccessStoryCard = ({stats}) => {
  return (
    <div className="flex justify-between pr-[10%] py-10 items-center bg-white  shadow-md p-6 w-[50%] text-left gap-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="h-14 border border-red"></div>
      <div className="flex items-center justify-center bg-red-100 rounded-full w-16 h-16">
        <Image src={stats.icon} alt="Visa Categories Icon" className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-dark">{stats.title}</h2>
        <p className="text-tertiary">{stats.description}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
