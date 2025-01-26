import React from 'react';

const ExpressEntryPointsButton = ({ onClick }) => {
  return (
    <div className="fixed left-[-140px] top-[58%] transform -translate-y-1/2 bg-secondary hover:translate-x-[140px] transition-transform duration-300 shadow-lg rounded-lg">
      <div
        className="text-white py-3 px-6 rounded-full cursor-pointer font-semibold text-lg text-center"
        onClick={onClick}
      >
        Calculate Your Express Entry Points
      </div>
    </div>
  );
};

export default ExpressEntryPointsButton;
