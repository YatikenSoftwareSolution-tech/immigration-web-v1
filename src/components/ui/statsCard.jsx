import React from 'react';

const StatsCard = ({ stat }) => {
  return (
    <div className="box-border cursor-pointer w-[25%] pl-10 py-12 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white hover:border-b-4 hover:border-red-500">
      <div className="text-6xl ml-6 font-semi-bold text-gray-600">
        {stat.value}
      </div>
      <div className="mt-4 text-left">
        <div className="text-secondary font-extrabold text-3xl mb-4">...</div>
        <p className="text-lg font-medium text-gray">
          {stat.verb}
        </p>
        <p className="text-lg font-medium text-gray">
          {stat.object}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
