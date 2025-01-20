import React from 'react';

const StatsCard = () => {
  return (
    <div className="cursor-pointer border border-gray px-10 py-12 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
      <div className="text-5xl font-extrabold text-gray-600 ">
        30K
      </div>
      <div className="mt-4 text-left">
        <div className="text-secondary font-extrabold text-4xl">...</div>
        <p className="text-lg font-medium text-gray">
          We Have Worked
        </p>
        <p className="text-lg font-medium text-gray">
          With Clients
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
