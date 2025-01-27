import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import AboutUsBanner1 from "../../assets/AboutUsBanner1.jpg";
import StatsCard from "@/components/ui/statsCard";
import PeopleCard from "@/components/ui/peopleCard";
import Partner1 from "../../assets/Partner1.png";
import Partner2 from "../../assets/Partner2.png";
import Partner3 from "../../assets/Partner3.png";
import Partner4 from "../../assets/Partner4.png";
import Partner5 from "../../assets/Partner5.png";
import Partner6 from "../../assets/Partner6.png";
import Partner7 from "../../assets/Partner7.png";
import SubscribeToNewsletter from "@/components/custom/SubscribeToNewsletter";
import People1 from "../../assets/People1.png";
import People2 from "../../assets/People2.png";
import People3 from "../../assets/People3.png";
import People4 from "../../assets/People4.png";
import People5 from "../../assets/People5.png";
import People6 from "../../assets/People6.png";
// import ChatBot from "@/components/custom/ChatBot";

const peoples = [
  {
    image: People1,
    name: "John Doe",
    designation: "CEO",
    social1: "https://facebook.com/johndoe",
    social2: "https://instagram.com/johndoe",
    social3: "https://linkedin.com/in/johndoe",
  },
  {
    image: People2,
    name: "Jane Smith",
    designation: "CTO",
    social1: "https://facebook.com/janesmith",
    social2: "https://instagram.com/janesmith",
    social3: "https://linkedin.com/in/janesmith",
  },
  {
    image: People3,
    name: "Mike Johnson",
    designation: "Lead Developer",
    social1: "https://facebook.com/mikejohnson",
    social2: "https://instagram.com/mikejohnson",
    social3: "https://linkedin.com/in/mikejohnson",
  },
  {
    image: People4,
    name: "Emily Davis",
    designation: "Marketing Manager",
    social1: "https://facebook.com/emilydavis",
    social2: "https://instagram.com/emilydavis",
    social3: "https://linkedin.com/in/emilydavis",
  },
  {
    image: People5,
    name: "Chris Lee",
    designation: "Product Designer",
    social1: "https://facebook.com/chrislee",
    social2: "https://instagram.com/chrislee",
    social3: "https://linkedin.com/in/chrislee",
  },
  {
    image: People6,
    name: "Sarah Wilson",
    designation: "UX Researcher",
    social1: "https://facebook.com/sarahwilson",
    social2: "https://instagram.com/sarahwilson",
    social3: "https://linkedin.com/in/sarahwilson",
  },
];

const successStats = [
  {
    value: "30k+",
    verb: "We Have Worked ",
    object: "With Clients",
  },
  {
    value: "100%",
    verb: "Successful Visa",
    object: "Process Rate",
  },
  {
    value: "1 Day",
    verb: "Application Approval",
    object: "Processing Time",
  },
];

const page = () => {
  return (
    <div>
      <section
        id="about-landing"
        className="bg-gradient-to-r from-pink-50 to-blue-100 py-24 px-10 mx-auto relative w-full flex flex-col justify-center"
      >
        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
            <h1 className="w-full md:w-1/2 text-4xl md:text-5xl font-bold leading-snug text-center">
              Committed to your
              <p>
                <span className="text-secondary"> Visa </span>
                successes
              </p>
            </h1>
            <h2 className="w-full md:w-1/2 text-gray font-medium text-lg md:text-xl leading-relaxed">
              We deliver budget-friendly visa solutions, removing financial
              barriers from your journey. Our goal is to provide quality
              services at affordable rates.
            </h2>
          </div>

          <div className="flex justify-center item-center">
            <Image
              src={AboutUsBanner1}
              alt="Banner"
              height={500}
              className="landing-banner"
            />
          </div>
          <div className="flex gap-10 justify-center item-center">
            {successStats.map((item, idx) => (
              <StatsCard key={idx} stat={item} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="immigration-team"
        className="bg-gradient-to-r from-blue-100 to-red-50 py-20 px-10 mx-auto relative w-full flex flex-col justify-between items-center"
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-8 gap-6 mb-8">
            <h1 className="w-full md:w-1/2 text-4xl md:text-5xl font-bold leading-snug text-center">
              Our Trusted
              <span className="text-secondary"> Support </span>
              Team
            </h1>
            <h2 className="w-full md:w-1/2 text-gray font-medium text-lg md:text-xl leading-relaxed">
              At the heart of our commitment is to providing exceptional
              immigration solutions.
            </h2>
          </div>
          <div className="flex flex-wrap gap-[10%] justify-center items-center">
            {peoples.map((people, index) => (
              <div key={index} className="my-8 basis-1/4 max-w-[30%]">
                <PeopleCard people={people} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="studentVisaPartners"
        className="py-20 h-[94vh] bg-secondary mx-auto relative w-full"
      >
        <div className="flex flex-col items-center justify-around text-center">
          <div className="text-lg font-semibold text-white mb-8">
            We love to work with our trusted partners
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              Partner1,
              Partner2,
              Partner3,
              Partner4,
              Partner5,
              Partner6,
              Partner7,
            ].map((partner, index) => (
              <div
                key={index}
                className="w-40 h-40 flex justify-center items-center bg-white rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <SubscribeToNewsletter />
      </section>
    </div>
  );
};

export default page;
