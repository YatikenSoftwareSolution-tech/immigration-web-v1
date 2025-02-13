"use client";

import StripOutButton from "@/components/custom/ConsultationFormButton";
import Image from "next/image";
import LandingPageBanner1 from "../assets/LandingPageBanner1.jpg";
import LandingPageBanner2 from "../assets/LandingPageBanner2.jpg";
import { Button } from "@/components/ui/button";
import VT1 from "../assets/VT1.svg";
import VT2 from "../assets/VT2.svg";
import VT3 from "../assets/VT3.svg";
import VT4 from "../assets/VT4.svg";
import VT5 from "../assets/VT5.svg";
import SubscribeNowBanner from "../assets/SubscribeNowBanner.png";

import SubscribeIcon from "../assets/SubscribeIcon.png";
import { Sidebar } from "@/components/ui/sidebar";
import { useAppContext } from "../contexts/AppContext";
import { useState } from "react";
import { Check } from "lucide-react";
import ExpressEntryPointsButton from "@/components/custom/ExpressEntryPointsButton";
import Link from "next/link";
import ConsultationForm from "@/components/custom/ConsultationForm";
import StatsCard from "@/components/ui/statsCard";
import ProgramCard from "@/components/custom/ProgramCard";
import VisaTypeCard from "@/components/custom/VisaTypeCard";
import SuccessStoryCard from "@/components/custom/SuccessStoryCard";
import SubscribeToNewsletter from "@/components/custom/SubscribeToNewsletter";
import { Input } from "@/components/ui/input";
import ChatBot from "@/components/custom/ChatBot";
import PartnersList from "@/components/custom/PartnersList";
import {
  Globe2,
  Users,
  FileCheck,
  Calendar,
  ArrowRight,
  Shield,
  Target,
  Briefcase,
} from "lucide-react";
import { use } from "react";
import { useRouter } from "next/navigation";

const ImmigrationPage = () => {
  const router = useRouter();
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const calculateCrs = () => {
    router.push(
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html#calculator"
    );
  };
  const p3Program = [
    {
      background: "orange",
      title: "P1- Placement",
      description:
        "Please fill out the form. We will assess your education, language, work experience and skills and try to assist your job placement with an employer Immigration Company In Canada.",
    },
    {
      background: "green",
      title: "P2- Provincial Nomination Program (PNP)",
      description: "The employer will support your PNP.",
    },
    {
      background: "blue",
      title: "P3- Permanent Residence (PR)",
      description: "We will help you apply for Permanent Residency.",
    },
  ];
  const visaTypes = [
    {
      icon: VT1,
      title: "Tourist Visa",
      description:
        "Visit new places to discover with a Tourist Visa. We deliver your documents ...",
    },
    {
      icon: VT2,
      title: "Commercial Visa",
      description:
        "Developing your trade, setting up new sales channels Your visa is ready...",
    },
    {
      icon: VT3,
      title: "Student Visa",
      description:
        "Embarking on a journey of higher education in a foreign country opens doors to...",
    },
    {
      icon: VT4,
      title: "Residence Visa",
      description:
        "Expert Guidance for a Seamless Immigration Journey Expert Guidance...",
    },
    {
      icon: VT5,
      title: "Work Visa",
      description:
        "Get your Visa now for new business and earning opportunities. We deliver your...",
    },
  ];
  const successStats = [
    {
      background: "orange",
      icon: VT1,
      title: "20+",
      description: "Visa Categories",
    },
    {
      background: "green",
      icon: VT2,
      title: "30K+",
      description: "Visa Process",
    },
    {
      background: "blue",
      icon: VT3,
      title: "40K+",
      description: "Successful Project",
    },
    {
      background: "red",
      icon: VT4,
      title: "180K",
      description: "Pro Consultants",
    },
  ];
  return (
    <div>
      <section
        id="immigration"
        className="pt-24 pb-8 px-16 relative w-full md:h-[85vh] lg:h-[90vh] flex flex-col justify-between"
      >
        <div>
          <h1 className="  text-2xl md:text-5xl font-bold">
            Immigration Visa Consulting
          </h1>
          <p className="mt-2 ml-2 font-semibold text-secondary ">
            Best Immigration Consultants in Edmonton
          </p>
          <ul className="flex justify-between mt-10 ml-4 text-left">
            <li className="flex items-center font-semibold text-dark shadow-lg rounded-lg px-6 py-2">
              <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 ">
                <Check className="text-tertiary" />
              </span>
              Expert Legal Support
            </li>
            <li className="flex items-center font-semibold text-dark shadow-lg rounded-lg px-6 py-2">
              <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 ">
                <Check className="text-tertiary" />
              </span>{" "}
              Meeting Your Unique Needs
            </li>
            <li className="flex items-center font-semibold text-dark shadow-lg rounded-lg px-6 py-2">
              <span className="flex items-center justify-center bg-gray-400 rounded-full p-2">
                <Check className="text-tertiary font-bold text-xl" />
              </span>{" "}
              Tailored Immigration Solutions
            </li>
          </ul>
        </div>
        <div>
          
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 "></div>
            <div className="relative flex justify-between items-start">
              {/* step1 */}
              <div className="relative flex flex-col items-center w-1/3 px-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10">
                  1
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-black mb-2 text-center">
                      Calculate CRS Score
                    </h3>
                    <p className="text-gray text-center mb-4">
                      Determine your Comprehensive Ranking System score to
                      understand your eligibility
                    </p>
                    <Button
                      className="px-4 py-4 rounded-full text-white bg-tertiary mt-4 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90"
                      onClick={calculateCrs}
                    >
                      Calculate Now
                    </Button>
                  </div>
                </div>
              </div>
              {/* step2 */}
              <div className="relative flex flex-col items-center w-1/3 px-4">  
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10">
                  2
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-black mb-2 text-center">
                      Fill Consultation Form
                    </h3>
                    <p className="text-gray text-center mb-4">
                      Complete our detailed consultation form to help us
                      understand your needs
                    </p>
                    <Button
                      className="px-4 py-4 rounded-full text-white bg-tertiary mt-4 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90"
                      onClick={() => setIsConsultationFormOpen(true)}
                    >
                      Start Form
                    </Button>
                  </div>
                </div>
              </div>
              {/* step3 */}
              <div className="relative flex flex-col items-center w-1/3 px-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10">
                  3
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-black mb-2 text-center">
                      Book Consultation
                    </h3>
                    <p className="text-gray text-center mb-4">
                      Schedule a personalized consultation with our immigration
                      experts
                    </p>
                    <Button onClick={() => alert("Please fill the form first")} className="px-4 py-4 rounded-full text-white bg-tertiary mt-4 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-center text-secondary font-bold  mt-4">You are just 3 steps away from your immigration journey</h2>
        </div>
      </section>
      <section
        id="p3program"
        className="bg-gradient-to-r from-red-50 to-blue-50 w-full md:h-[85vh] lg:h-[90vh] "
      >
        <div className="flex flex-col w-full px-[5%] py-[4%] ">
          <h1 className=" text-dark mb-[5%] text-4xl md:text-5xl font-bold text-center">
            Our <span className="text-secondary mt-1"> Special </span> programs <br />{" "}
          </h1>
          <div className="flex gap-10 justify-center item-center ">
              <ProgramCard   />
          </div>
        </div>
      </section>
      <section
        id="immigration"
        className="py-14 px-10 mx-auto relative w-full md:h-[85vh] lg:h-[90vh] flex flex-col items-center  bg-gradient-to-r from-blue-50/90 to-red-50/90"
      >
        <div className="flex w-full item-center gap-[3%]">
          <div className=" ml-[10%] mt-[5%] ">
            <h1 className="  text-4xl md:text-5xl font-bold">
              How it helps- <span className="text-secondary">The P3</span>
            </h1>
            <p className="mt-3 ml-2 font-semibold text-tertiary">
              Best Immigration Consultants in Edmonton
            </p>

            <ul className="mt-10 ml-4 text-left">
              <li className="flex items-center font-semibold text-dark">
                <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 ">
                  <Check className="text-tertiary" />
                </span>
                International students that hold valid study permits on December
                31st, 2022- 807,750.
              </li>
              <li className="flex items-center font-semibold text-dark">
                <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 ">
                  <Check className="text-tertiary" />
                </span>{" "}
                The number of TFWs on December 31, 2021-777,000
              </li>
              <li className="flex items-center font-semibold text-dark">
                <span className="flex items-center justify-center bg-gray-400 rounded-full p-2">
                  <Check className="text-tertiary font-bold text-xl" />
                </span>{" "}
                Canada’s target for Economic Immigration Class for Year
                2023-266,210
              </li>
              <li className="flex items-center font-semibold text-dark">
                <span className="flex items-center justify-center bg-gray-400 rounded-full p-2">
                  <Check className="text-tertiary font-bold text-xl" />
                </span>{" "}
                CRS score in the Express Entry pool as of February 15, 2023
              </li>
            </ul>

            <div className="flex items-center mt-20 gap-4 sm:gap-6 md:gap-8">
              <Button className="w-[150px] md:w-[180px] text-white bg-tertiary p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90">
                <Link href="/consultation">Book Consultation</Link>
              </Button>
              <Button className="w-[150px] text-white md:w-[180px] bg-dark p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-dark/90">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <Image
            src={LandingPageBanner2}
            alt="Banner"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section
        id="p3program"
        className="bg-gradient-to-r from-red-50 to-blue-50 w-full"
      >
        <div className="flex flex-col w-full px-[5%] py-[4%] ">
          <h1 className=" text-dark mb-[5%] text-4xl md:text-5xl font-bold text-center">
            Visa Types and Eligibility
          </h1>
          <div className="flex flex-wrap gap-10 justify-center item-center ">
            {visaTypes.map((item, index) => (
              <VisaTypeCard key={index} visa={item} />
            ))}
          </div>
        </div>
      </section>
      <section id="p3program" className="w-full h-[85vh] lg:h-[90vh]">
        <div className="flex flex-col justify-between w-full px-[5%] py-[4%]">
          <h1 className="text-dark text-3xl mb-5 md:text-5xl font-bold text-center">
            Discovering Our Biggest Successes:
          </h1>
          <p className="text-tertiary font-bold mb-[10%] text-center">
            The Stories Behind Our Great Achievements
          </p>
          <div className="flex flex-wrap justify-center items-center w-[80%] mx-auto">
            {/* Card 1 */}
            {successStats.map((item, index) => (
              <SuccessStoryCard key={index} stats={item} />
            ))}
          </div>
        </div>
      </section>
      <PartnersList />
      <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html">
      </Link>
      <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
      />
      <ChatBot />
    </div>
  );
};

export default ImmigrationPage;
