import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import StudentVisaBanner1 from "../../../assets/StudentVisaBanner1.png";
import University1 from "../../../assets/university1.png";
import University2 from "../../../assets/university2.png";
import University3 from "../../../assets/university3.png";
import University4 from "../../../assets/university4.png";
import University5 from "../../../assets/university5.png";
import University6 from "../../../assets/university6.png";
import University7 from "../../../assets/university7.png";

const page = () => {
  return (
    <div>
      <section
        id="immigration"
        className="bg-gradient-to-r from-pink-50 to-blue-100 w-full h-[90vh] flex item-center px-20"
      >
        <div className=" flex flex-wrap gap-4 justify-center items-center mx-auto">
          <div className="flex flex-col ">
            <h1 className="  text-4xl md:text-5xl font-bold">
              Expert Student Visa Help
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500">
              Since 1998 - Unparalleled Comprehensive Student Visa Guide
            </p>

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
          <div
            className="relative border rounded-lg"
            style={{
              border: "1px solid black",
              borderRadius: "50%",
              height: "600px",
              width: "600px",
            }}
          >
            <Image
              src={StudentVisaBanner1}
              alt="Banner"
              //   width={600}
              //   height={600}
              fill={true}
              className="landing-banner"
            />
          </div>
        </div>
      </section>
      <section
        id="immigrationPartners"
        className="py-20 bg-secondary mx-auto relative w-full"
      >
        <div className="flex flex-col items-center justify-around text-center">
          <div className="text-lg font-semibold text-white mb-8">
            We love to work with our preferred partners
          </div>
          <div className="flex flex-wrap items-center lg:gap-14 md:gap-14">
            {[
              University1,
              University2,
              University3,
              University4,
              University5,
              University6,
              University7,
            ].map((partner, index) => (
              <div key={index}>
                <Image
                  src={partner}
                  alt={`Partner${index + 1}`}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
