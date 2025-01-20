"use client";

import StripOutButton from "@/components/ui/StripOutButton";
import Image from "next/image";
import LandingPageBanner1 from "../assets/LandingPageBanner1.jpg";
import LandingPageBanner2 from "../assets/LandingPageBanner2.jpg";
import { Button } from "@/components/ui/button";
import Partner1 from "../assets/Partner1.png";
import Partner2 from "../assets/Partner2.png";
import Partner3 from "../assets/Partner3.png";
import Partner4 from "../assets/Partner4.png";
import Partner5 from "../assets/Partner5.png";
import Partner6 from "../assets/Partner6.png";
import Partner7 from "../assets/Partner7.png";
import SubscribeIcon from "../assets/SubscribeIcon.png";
import { Sidebar } from "@/components/ui/sidebar";
import { useAppContext } from "../contexts/AppContext";
import { useState } from "react";
import { Check } from "lucide-react";


const ImmigrationPage = () => {
  const { activeSection, setActiveSection, isSidenavOpen, toggleSidenav } =
    useAppContext();

  return (
    <div>
      <section
        id="immigration"
        className="pt-24 px-10 mx-auto relative w-full h-[90vh] lg:h-[95vh] flex flex-col justify-between items-center"
      >
        <div className="flex w-full justify-between item-center">
          <div className=" ml-[10%] mt-[5%] ">
            <h1 className="  text-4xl md:text-5xl font-bold">
              Immigration visa Consulting
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500">
              Expert Guidance for a Seamless Immigration Journey
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
          <Image
            src={LandingPageBanner1}
            alt="Banner"
            width={600}
            height={600}
            className="landing-banner"
          />
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
              Partner1,
              Partner2,
              Partner3,
              Partner4,
              Partner5,
              Partner6,
              Partner7,
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
      <section
        id="studentVisa"
        className="pt-24 px-10 mx-auto relative w-full h-[90vh] lg:h-[95vh] flex flex-col justify-between items-center"
      >
        <div className="flex w-full justify-between item-center">
          <div className=" ml-[10%] mt-[5%] ">
            <h1 className="  text-4xl md:text-5xl font-bold">
              Expert student visa advisors
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-500">
              Expert advice, step-by-step instructions, and insider tips to help
              you navigate the student visa application process with confidence
              and success Simplified Steps, Proven Strategies, Unwavering
              Support!”
            </p>

            <div className="flex items-center mt-20 gap-4 sm:gap-6 md:gap-8">
              <Button className="w-[150px] md:w-[180px] text-white bg-secondary p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90">
                Book Consultation
              </Button>
              <Button className="w-[150px] text-white md:w-[180px] bg-dark p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-dark/90">
                Learn More
              </Button>
            </div>
          </div>
          <Image
            src={LandingPageBanner2}
            alt="Banner"
            width={400}
            height={300}
            className="landing-banner"
          />
        </div>
      </section>
      <section
        id="studentVisaPartners"
        className="py-20 bg-secondary mx-auto relative w-full"
      >
        <div className="flex flex-col items-center justify-around text-center">
          <div className="text-lg font-semibold text-white mb-8">
            We love to work with our preferred partners
          </div>
          <div className="flex flex-wrap items-center lg:gap-14 md:gap-14">
            {[
              Partner1,
              Partner2,
              Partner3,
              Partner4,
              Partner5,
              Partner6,
              Partner7,
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
      {/* <section className="py-20 bg-secondary mx-auto relative w-full ">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
              <Image
                src={SubscribeIcon}
                alt="Subscribe"
                width={80}
                height={80}
              />
              <h2 className="text-3xl font-bold mt-4">
                Subscribe to Edural Newsletter
              </h2>
            </div>
            <div className="w-full lg:w-2/3">
              <form className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#222868] transition"
                />
                <button
                  type="submit"
                  className="bg-[#ff7800] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e66e00] transition-all"
                >
                  Get Started Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      <section
        id="tourism"
        className="studentVisaBackground pt-24 px-10 mx-auto relative w-full h-[90vh] lg:h-[95vh] flex flex-col justify-between items-center"
       
      >
        <div className="flex w-full justify-between items-center">
          <div className="ml-[10%] mt-[5%] max-w-lg sm:max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Immigration Visa Consulting
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Expert Guidance for a Seamless Immigration Journey
            </p>

            <ul className="mt-6 space-y-4 text-left text-lg text-gray-300">
              <li className="flex items-center">
                <span className="flex items-center justify-center bg-gray-500 rounded-full p-2 mr-4">
                  <Check className="text-secondary" />
                </span>
                Expert Legal Support
              </li>
              <li className="flex items-center">
                <span className="flex items-center justify-center bg-gray-500 rounded-full p-2 mr-4">
                  <Check className="text-secondary" />
                </span>
                Meeting Your Unique Needs
              </li>
              <li className="flex items-center">
                <span className="flex items-center justify-center bg-gray-500 rounded-full p-2 mr-4">
                  <Check className="text-secondary" />
                </span>
                Tailored Immigration Solutions
              </li>
            </ul>

            <div className="flex items-center mt-12 gap-6 sm:gap-8 md:gap-10">
              <Button className="w-[150px] md:w-[180px] text-white bg-secondary p-4 md:p-6 rounded-lg text-md md:text-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:bg-secondary/90 hover:shadow-xl">
                Book Consultation
              </Button>
              <Button className="w-[150px] text-white md:w-[180px] bg-dark p-4 md:p-6 rounded-lg text-md md:text-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:bg-dark/90 hover:shadow-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tourism"
        className="studentVisaBackground pt-24 px-10 mx-auto relative w-full h-[90vh] lg:h-[95vh] flex flex-col justify-between items-center"
       
      >
        <div className="flex w-full justify-between items-center">
          <div className="ml-[10%] mt-[5%] max-w-lg sm:max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Immigration Visa Consulting
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Expert Guidance for a Seamless Immigration Journey
            </p>

            <ul className="mt-6 space-y-4 text-left text-lg text-gray-300">
              <li className="flex items-center">
                <span className="flex items-center justify-center bg-gray-500 rounded-full p-2 mr-4">
                  <Check className="text-secondary" />
                </span>
                Expert Legal Support
              </li>
              <li className="flex items-center">
                <span className="flex items-center justify-center bg-gray-500 rounded-full p-2 mr-4">
                  <Check className="text-secondary" />
                </span>
                Meeting Your Unique Needs
              </li>
              <li className="flex items-center">
                <span className="flex items-center justify-center bg-gray-500 rounded-full p-2 mr-4">
                  <Check className="text-secondary" />
                </span>
                Tailored Immigration Solutions
              </li>
            </ul>

            <div className="flex items-center mt-12 gap-6 sm:gap-8 md:gap-10">
              <Button className="w-[150px] md:w-[180px] text-white bg-secondary p-4 md:p-6 rounded-lg text-md md:text-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:bg-secondary/90 hover:shadow-xl">
                Book Consultation
              </Button>
              <Button className="w-[150px] text-white md:w-[180px] bg-dark p-4 md:p-6 rounded-lg text-md md:text-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:bg-dark/90 hover:shadow-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <StripOutButton />
    </div>
  );
};

export default ImmigrationPage;
