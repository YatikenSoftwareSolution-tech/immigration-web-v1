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
      <div className="min-h-screen bg-white text-black mt-10">
        {/* Hero Section */}
        <div
          className="h-[65vh] bg-cover bg-center relative opacity-75"
          style={{
            backgroundImage:
              ' url("https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70">
            <div className="container mx-auto px-4 h-[65%] flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Immigration <span className="text-red-600">Visa</span>{" "}
                Consulting
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300 text-white">
                Your trusted partner for expert immigration services in
                Edmonton. We make your dreams of global mobility a reality.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md inline-flex items-center gap-2 w-fit transition-all">
                Get Started
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative -mt-60">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 "></div>

          <div className="relative flex justify-between items-start">
            {/* step1 */}

            <div className="relative flex flex-col items-center w-1/3 px-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10 mb-4">
                1
              </div>
              <div className="bg-white p-6 rounded-lg border border-red-600/20 hover:border-red-600 transition-all">
                <div className="flex flex-col items-center ">
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
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10 mb-4">
                2
              </div>
              <div className="bg-white p-6 rounded-lg border border-red-600/20 hover:border-red-600 transition-all">
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
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10 mb-4">
                3
              </div>
              <div className="bg-white p-6 rounded-lg border border-red-600/20 hover:border-red-600 transition-all">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">
                    Book Consultation
                  </h3>
                  <p className="text-gray text-center mb-4">
                    Schedule a personalized consultation with our immigration
                    experts
                  </p>
                  <Button
                    onClick={() => alert("Please fill the form first")}
                    className="px-4 py-4 rounded-full text-white bg-tertiary mt-4 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className=" mt-8 text-dark mb-[5%] text-lg md:text-xl font-bold text-center">
          You are just <span className="text-secondary">3 Steps</span> away from
          your<span className="text-secondary"> Immigration</span> Journey
        </h1>
      </div>
      {/* </section> */}
      <section
        id="p3program"
        className="bg-gradient-to-r from-red-50 to-blue-50 w-full md:h-[85vh] lg:h-[90vh] "
      >
        <div className="flex flex-col w-full px-[4%] py-[1%] ">
          <h1 className=" text-dark mb-[5%] text-4xl md:text-5xl font-bold text-center">
            Our <span className="text-secondary mt-1"> Special </span> programs{" "}
            <br />{" "}
          </h1>
          <div className="flex gap-10 justify-center item-center ">
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
          </div>
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
      <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html"></Link>
      <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
      />
      <ChatBot />
    </div>
  );
};

export default ImmigrationPage;
