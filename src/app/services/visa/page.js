import React from 'react';
import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <section
        id="immigration"
        className="pt-24 px-10 mx-auto relative w-full h-[90vh] lg:h-[95vh] flex flex-col justify-between items-center"
      >
        <div className="flex flex-col w-full">
            <h1 className="text-center md:text-5xl font-bold">
                Eligibility <span className='text-secondary'>Assessment</span> &
            </h1>
            <h2 className="text-center md:text-5xl font-bold">
            <span className='text-secondary'>Visa</span> Types
            </h2>
          <div className=" ml-[10%] mt-[5%] ">
            

            <ul className="mt-6 space-y-2 text-left">
              <li className="flex items-center text-lg">
                <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 mr-2">
                  <Check className="text-secondary" />
                </span>
                Expert Legal Support
              </li>
              <li className="flex items-center text-lg">
                <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 mr-2">
                  <Check className="text-secondary" />
                </span>{" "}
                Meeting Your Unique Needs
              </li>
              <li className="flex items-center text-lg">
                <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 mr-2">
                  <Check className="text-secondary" />
                </span>{" "}
                Tailored Immigration Solutions
              </li>
            </ul>

            <div className="flex items-center mt-20 gap-4 sm:gap-6 md:gap-8">
              <Button className="w-[150px] md:w-[180px] text-white bg-secondary p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90">
                Book Consultation
              </Button>
              <Button className="w-[150px] text-white md:w-[180px] bg-dark p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-dark/90">
                Learn More
              </Button>
            </div>
          </div>
          {/* <Image
            src={LandingPageBanner1}
            alt="Banner"
            width={600}
            height={600}
            className="landing-banner"
          /> */}
        </div>
      </section>
    </div>
  )
}

export default page;
