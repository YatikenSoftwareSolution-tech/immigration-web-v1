import React from 'react';

const StripOutButton = ({ onClick }) => {
  return (
    <div className="fixed left-[-100px] top-[50%] transform -translate-y-1/2 bg-red-600 hover:translate-x-[82px] transition-transform duration-300 shadow-lg rounded-lg">
      <div
        className="text-white py-3 px-6 rounded-full cursor-pointer font-semibold text-lg text-center"
        onClick={onClick}
      >
        Take Free Eligibility Test
      </div>
    </div>
  );
};

export default StripOutButton;
