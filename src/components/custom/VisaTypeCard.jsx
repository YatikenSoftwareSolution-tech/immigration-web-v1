import Image from 'next/image';
import React from 'react';

const VisaTypeCard = ({ visa }) => {
  return (
    <div className="flex flex-col box-border cursor-pointer p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white hover:border-b-4 hover:border-tertiary h-full"> {/* h-full added */}
      <div className="flex justify-center"> {/* Center icon horizontally */}
        <Image
          src={visa.icon}
          alt="program-icon"
          height={40}
          width={40}
          className="mb-4" // Reduced margin
        />
      </div>
      <div className="text-xl font-semibold text-gray-600 text-center mb-2"> {/* Reduced font size, centered text, added margin */}
        {visa.title || ""}
      </div>
      <div className="flex-grow"> {/* Important! Allows description to take up available space */}
        <div className="text-tertiary font-extrabold text-2xl mb-2"> {/* Reduced font size, margin */}
          ...
        </div>
        <p className="text-base font-medium text-gray"> {/* Reduced font size */}
          {visa.description || ""}
        </p>
      </div>
    </div>
  );
};

export default VisaTypeCard;