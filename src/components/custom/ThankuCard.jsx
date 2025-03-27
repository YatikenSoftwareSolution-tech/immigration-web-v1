import React from "react";
import Image from "next/image";

const ThankuCard = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="p-8 rounded-lg"
        src="/JobPlacement.jpg"
        alt="thank you "
        width={500}
        height={500}
        
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-dark">
          Thank You for filling the consultation form. Our team will contact you via email within 24 hours for a 10 min meeting. 
        </h5>
        <h6 className="text-secondary text-xs font-semibold mt-4">
             Or you can schedule a 30 min paid meeting. 
        </h6>
      </div>
    </div>
  );
};

export default ThankuCard;
