import React from 'react';

const ConsultationFormButton = ({ click }) => {
  return (
    <div className="fixed left-[-50px] top-[50%] transform -translate-y-1/2 bg-secondary hover:translate-x-[50px] transition-transform duration-300 shadow-lg rounded-lg">
      <div
        className="text-white py-3 px-6 rounded-full cursor-pointer font-semibold text-lg text-center"
        onClick={click} // Corrected invocation
      >
        Fill Consultation Form
      </div>
    </div>
  );
};

export default ConsultationFormButton;
