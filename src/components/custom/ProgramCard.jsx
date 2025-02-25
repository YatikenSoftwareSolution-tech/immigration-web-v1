import React, { useState } from "react";
import { Button } from "../ui/button";
import HumanitarianForm from "./HumanitarianForm";

const ProgramCard = ({ program, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white hover:border-b-4 hover:border-tertiary text-dark h-full">
      <div className="flex justify-center items-center mb-2">
        <div className="text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center text-white bg-primary">
          {index + 1 || 1}
        </div>
      </div>
      <div className="text-xl font-semibold text-gray-600 text-center">
        Humanitarian Ground
      </div>
      <div className="flex-grow">
        <div className="text-tertiary font-extrabold text-lg mb-2 text-center">
          ...
        </div>
        <p className="text-sm font-medium text-gray text-center">
          If your country is not liveable for you or your family due to climatic/political/health concerns. We are here to help.
        </p>
      </div>
      <div className="mt-auto pt-3">
        <Button onClick={() => setOpen(true)} className="bg-tertiary text-white hover:bg-secondary w-full">
          Fill AI Form
        </Button>
      </div>
      
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <HumanitarianForm onClose={() => setOpen(false)} program={program} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramCard;