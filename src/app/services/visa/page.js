"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";
import ConsultationForm from "@/components/custom/ConsultationForm";
import ProgramCard from "@/components/custom/ProgramCard";
import VisaTypeCard from "@/components/custom/VisaTypeCard";
import SuccessStoryCard from "@/components/custom/SuccessStoryCard";
import VT1 from "../../../assets/VT1.svg";
import VT2 from "../../../assets/VT2.svg";
import VT3 from "../../../assets/VT3.svg";
import VT4 from "../../../assets/VT4.svg";
import VT5 from "../../../assets/VT5.svg";
import FaqImage1 from "../../../assets/FaqImage1.jpg";
// import ChatBot from "@/components/custom/ChatBot";

const ImmigrationServicesPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  const immigrantPathways = [
    "Express Entry",
    "Provincial Nominees",
    "Quebec-Selected Skilled Worker",
    "Atlantic Immigration Program",
    "Start-up Visa",
  ];

  const prRequirements = [
    "Age: Upper limit 45 years, fewer points above 35.",
    "Education: Canadian degree or Educational Credential Assessment (ECA).",
    "Work Experience: Canadian work experience required for some programs.",
    "Police Verification: Clean criminal record mandatory.",
    "Language Ability: Proficiency in English or French (IELTS, etc.).",
  ];

  const successStats = [
    {  background: "orange",
          icon: VT1,title: "20+", description: "Visa Categories" },
    { background: "green",
          icon: VT2, title: "10+", description: "Years of Experience" },
    { background: "blue",
          icon: VT3,title: "1000+", description: "Happy Clients" },
    { background: "red",
          icon: VT4,title: "100%", description: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Jaskaran Gill",
      feedback:
        "I thank the team very much for their work. Special thanks to Sabby and Raj for their professional handling of my file. Highly recommended!",
    },
    {
      name: "G Singh",
      feedback:
        "Thanks to the expertise of Sarbjit and Raj, my brother Kuljeet Singh got his work permit as a truck driver in just 3 months. Amazing service!",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              How to Get Canada Permanent Residency
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Discover the steps to make Canada your new home with our expert
              guidance on PR requirements, eligibility, and pathways.
            </p>
            <Button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
              Book a Consultation
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={FaqImage1}
              alt="Canada Immigration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Pathways to Canada PR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {immigrantPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {pathway}
                </h3>
                <p className="text-gray-600">
                  Explore the benefits and eligibility criteria for {pathway}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PR Requirements Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Permanent Residency Requirements
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            {prRequirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Our Success at a Glance
          </h2>
          <div className="flex flex-wrap">
            {successStats.map((stat, index) => (
              <SuccessStoryCard key={index} stats={stat}/>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
                <h4 className="text-lg font-semibold text-gray-800">
                  - {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <ChatBot/> */}
    </div>
  );
};

export default ImmigrationServicesPage;
