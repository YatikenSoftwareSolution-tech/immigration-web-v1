"use client";

import { Button } from "@/components/ui/button";
import VT1 from "../assets/VT1.svg";
import VT2 from "../assets/VT2.svg";
import VT3 from "../assets/VT3.svg";
import VT4 from "../assets/VT4.svg";
import VT5 from "../assets/VT5.svg";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ConsultationForm from "@/components/custom/ConsultationForm";
import ProgramCard from "@/components/custom/ProgramCard";
import VisaTypeCard from "@/components/custom/VisaTypeCard";
import ChatBot from "@/components/custom/ChatBot";
import PartnersList from "@/components/custom/PartnersList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  Users,
  ArrowRight,
  Award,
  BookCheck,
  Briefcase,
} from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./Home.module.css";

const ImmigrationPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const router = useRouter();

  const calculateCrs = () => {
    router.push(
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html#calculator"
    );
  };

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
  function StatCard({ icon: Icon, number, label, accentColor }) {
    return (
      <div className="relative group">
        <div
          className={`absolute inset-0 ${accentColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}
        />
        <div className="relative bg-white rounded-2xl p-8 flex flex-col items-start group-hover:translate-y-[-4px] transition-transform duration-300">
          <div className={`rounded-full p-4 mb-6 bg-opacity-10 ${accentColor}`}>
            <Icon
              className={`w-8 h-8 ${accentColor.replace("bg-", "text-")}`}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold text-gray-900">{number}</h3>
            <p className="text-gray-600 font-medium">{label}</p>
          </div>
        </div>
      </div>
    );
  }

  if(isConsultationFormOpen){
    return(
                <ConsultationForm
                  isOpen={isConsultationFormOpen}
                  onClose={() => setIsConsultationFormOpen(false)}
                />
    )
  }
  return (
        <div className={styles.pageContent}>
          <div className="bg-white text-black mt-12">
            <div
              className="min-h-[45vh] md:h-[45vh] bg-cover bg-center relative opacity-75"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&q=80")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70">
                <div className="container mx-auto px-4 md:px-14 h-[65%] flex flex-col justify-center">
                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-white mt-20">
                    Immigration <span className="text-secondary">Visa</span>{" "}
                    Consulting
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-white">
                    Your trusted partner for expert immigration services in
                    Edmonton. We make your dreams of global mobility a reality.
                  </p>
                  <button onClick={() => router.push("/consultation")} className="bg-secondary hover:bg-red-700 text-white px-8 py-3 rounded-md inline-flex items-center gap-2 w-fit transition-all">
                    Get Started
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Steps Section - Responsive */}
          <div className="px-6 mt-6">
              
              <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center md:items-start gap-8 md:gap-4 px-4">
                {/* step1 */}
                <div className="relative flex flex-col items-center w-full md:w-1/3 mb-8 md:mb-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10 mb-4">
                    1
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-blue-300 hover:border-red-600 transition-all w-full">
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl font-semibold text-dark mb-2 text-center">
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
                <div className="relative flex flex-col items-center w-full md:w-1/3 mb-8 md:mb-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10 mb-4">
                    2
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-blue-300 hover:border-red-600 transition-all w-full">
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl font-semibold text-dark mb-2 text-center">
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

                <div className="relative flex flex-col items-center w-full md:w-1/3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tertiary text-white font-bold z-10 mb-4">
                    3
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-blue-300 hover:border-red-600 transition-all w-full">
                    <div className="flex flex-col items-center">
                      <h3 className="text-xl font-semibold text-dark mb-2 text-center">
                        Book Consultation
                      </h3>
                      <p className="text-gray text-center mb-4">
                        Schedule a personalized consultation with our
                        immigration experts
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

            <h1 className="mt-8 md:mt-12 text-dark mb-[5%] text-lg md:text-xl font-bold text-center px-4">
              You are just <span className="text-secondary">3 Steps</span> away
              from your<span className="text-secondary"> Immigration</span>{" "}
              Journey
            </h1>
          </div>

          {/* Programs Section */}
          <section
            id="p3program"
            className="bg-gradient-to-r from-blue-50 to-red-50 w-full py-8 md:py-12"
          >
            <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
              <h1 className="text-dark mb-6 md:mb-10 text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Our <span className="text-secondary">Special</span> Programs
              </h1>

              <div className="w-full">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                  }}
                  navigation={true}
                  modules={[Navigation]}
                  className="px-2 py-4"
                >
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <SwiperSlide key={index}>
                      <ProgramCard index={index} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>

          {/* Visa Types Section */}
          <section
            id="p3program"
            className="bg-gradient-to-r from-red-50 to-blue-50 w-full"
          >
            <div className="flex flex-col w-full px-4 md:px-[5%] py-8 md:py-[4%]">
              <h1 className="text-dark mb-8 md:mb-[5%] text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Visa Types and{" "}
                <span className="text-secondary">Eligibility</span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                {visaTypes.map((item, index) => (
                  <div key={index} className="w-full">
                    {" "}
                    {/* w-full is important for mobile */}
                    <VisaTypeCard visa={item} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section id="p3program" className="w-full">
            <div className="relative min-h-screen overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=2070')",
                }}
              />
              <div className="relative bg-gradient-to-b from-gray-50/90 to-white/95 py-10 px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
                    <h2 className="text-blue-600 font-semibold text-lg mb-4">
                      DISCOVERING OUR BIGGEST SUCCESSES
                    </h2>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
                      The Stories Behind Our Great{" "}
                      <span className="text-secondary mt-2"> Achievements</span>
                    </h1>
                  </div>

                  {/* Stats Cards - Responsive Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-dark">
                    <StatCard
                      icon={Award}
                      number="20+"
                      label="Visa Categories"
                      accentColor="bg-rose-500"
                    />
                    <StatCard
                      icon={Users}
                      number="30K+"
                      label="Visa Process"
                      accentColor="bg-blue-500"
                    />
                    <StatCard
                      icon={BookCheck}
                      number="40K+"
                      label="Successful Projects"
                      accentColor="bg-emerald-500"
                    />
                    <StatCard
                      icon={Briefcase}
                      number="180K"
                      label="Pro Consultants"
                      accentColor="bg-amber-500"
                    />
                  </div>

                  <div className="mt-12 md:mt-20 text-center max-w-3xl mx-auto px-4">
                    <p className="text-lg md:text-xl text-dark italic">
                      "Every number represents a dream fulfilled, a family
                      reunited, and a new chapter begun. Our success is measured
                      not just in statistics, but in the countless lives we've
                      helped transform."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative">
            <PartnersList />
            <Link href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html"></Link>
          </section>
          {/* <ChatBot /> */}
        </div>
  );
};

export default ImmigrationPage;
