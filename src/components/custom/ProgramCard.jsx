import React, {  useState } from "react";
import { Button } from "../ui/button";
import HumanitarianForm from "./HumanitarianForm";
const ProgramCard = ({ program, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 item-center box-border cursor-pointer w-[25%] px-[3%] py-[3%] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white hover:border-b-4 hover:border-tertiary text-dark">
      <div
        className="mb-5 p-2 flex justify-center -center text-xl font-bold rounded-full w-10 h-10 text-white bg-primary"
      >
        1
      </div>
      <div className="text-3xl font-semi-bold text-gray-600">
        Humanitarian Ground
      </div>
      <div className="mt-4 text-left">
        <div className="text-tertiary font-extrabold text-3xl mb-4">...</div>
        <p className="text-sm font-medium text-gray">

          If your country is not liveable for you or your family due to climatic/political/health concerns. We are here to help.

        </p>
      </div>
      <Button onClick={() => setOpen(true)} className="bg-tertiary text-white hover:bg-secondary">
        Fill AI Form
      </Button>
      {open && <HumanitarianForm isOpen={open} />}
    </div>
  );
};
 
export default ProgramCard;
 