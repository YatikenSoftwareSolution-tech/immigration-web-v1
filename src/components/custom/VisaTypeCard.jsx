import Image from 'next/image';
import React from 'react';

const VisaTypeCard = ({ visa }) => {
  return (
    <div className=" flex flex-col item-center box-border cursor-pointer w-[25%] px-[3%] py-[4%] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white hover:border-b-4 hover:border-tertiary">
      <div>
        <Image
        src={visa.icon}
        alt="program-icon"
        height={40}
        width={40}
        className='mb-5'
        />
      </div>
      <div className="text-3xl font-semi-bold text-gray-600">
        {visa.title || ""}
      </div>
      <div className="mt-4 text-left">
        <div className="text-tertiary font-extrabold text-3xl mb-4">...</div>
        <p className="text-lg font-medium text-gray">
          {visa.description || ""}
        </p>
      </div>
    </div>
  );
};

export default VisaTypeCard;
