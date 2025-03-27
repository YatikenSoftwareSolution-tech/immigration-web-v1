import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ProgramCard = ({ program, index, setIsSpecialProgramOpen }) => {
  const router = useRouter();

  return (
    <div className="h-[360px] flex flex-col justify-between p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white hover:border-b-4 hover:border-tertiary text-dark">
      <div className="flex justify-center items-center mb-2">
        <div className="text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center text-white bg-primary">
          {index + 1 || 1}
        </div>
      </div>
      <div className="text-xl font-semibold text-gray-600 text-center">
        {program.title}
      </div>
      <div className="flex-grow">
        <div className="text-tertiary font-extrabold text-lg mb-16 text-center">
          ...
        </div>
        <p className="text-sm font-medium text-gray text-center px-4">
          {program.description}
           </p>
      </div>
      <div className="mt-auto pt-3">
        <Button
          onClick={() => router.push(program.link)}
          className="bg-tertiary text-white hover:bg-secondary w-full"
        >
          Fill AI Form
        </Button>
      </div>
    </div>
  );
};

export default ProgramCard;
