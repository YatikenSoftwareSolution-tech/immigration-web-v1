"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import VT1 from "../../../assets/VT1.svg";
import VT2 from "../../../assets/VT2.svg";
import VT3 from "../../../assets/VT3.svg";
import VT4 from "../../../assets/VT4.svg";
import LabourImage from "../../../assets/LabourImage.jpg";
// import ChatBot from "@/components/custom/ChatBot";

const LMIAJobsPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  const lmiaCategories = [
    "Skilled Trades",
    "Highest Paying Careers",
    "Short-Term Jobs",
  ];

  const lmiaProcessingTimes = [
    "Standard Processing: 2-3 months",
    "Expedited Processing (10 Business Days): For certain high-demand, high-salary, and short-term jobs",
  ];

  const lmiaRequirements = [
    "Employer must prove recruitment efforts in hiring Canadian citizens or permanent residents.",
    "The employer needs to provide a transition plan for hiring permanent residents or Canadian citizens.",
    "A $1000 CAD non-refundable processing fee applies for all LMIA applications (except some in-home caregiver applicants).",
    "Workplace safety conditions must meet Canadian occupational health and safety standards.",
  ];

  const lmiaProcessSteps = [
    "Employer applies for LMIA with Employment and Social Development Canada (ESDC).",
    "Employer submits documents, including proof of recruitment attempts, business legitimacy, wages, and workplace safety.",
    "ESDC processes the application and provides either a positive or negative LMIA.",
    "If positive, the employer can proceed with hiring a foreign worker.",
    "The foreign worker applies for a work permit using the LMIA approval.",
  ];

  const testimonials = [
    {
      name: "Mark Thompson",
      feedback: "The Immigration Company helped us secure LMIA approval for hiring a foreign worker in a timely manner. Their guidance made the process stress-free!",
    },
    {
      name: "Linda Smith",
      feedback: "We had no idea about the LMIA process until we contacted The Immigration Company. They made everything clear and easy to navigate. Highly recommend!",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Labour Market Impact Assessment (LMIA) Jobs in Canada for Foreigners
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Learn how a Labour Market Impact Assessment (LMIA) is crucial for employers to hire foreign workers in Canada. We guide you through every step of the LMIA process.
            </p>
            <Button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
              Book a Consultation
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={LabourImage}
              alt="LMIA Jobs in Canada"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* LMIA Categories Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            LMIA Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lmiaCategories.map((category, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
                <p className="text-gray-600">
                  Discover more about the LMIA application requirements for {category}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LMIA Processing Times Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">LMIA Processing Times</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            {lmiaProcessingTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* LMIA Requirements Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">LMIA Requirements</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            {lmiaRequirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* LMIA Process Steps Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">LMIA Process Steps</h2>
          <div className="space-y-6 text-lg text-gray-700">
            {lmiaProcessSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
                <h4 className="text-lg font-semibold text-gray-800">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Apply for LMIA Jobs in Canada?</h2>
        <p className="text-lg mb-8">
          Let The Immigration Company guide you through the LMIA process and help you secure the work permit you need.
        </p>
        <Button className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200">
          Get Started with Your LMIA Application
        </Button>
      </section>
      {/* <ChatBot/> */}
    </div>
  );
};

export default LMIAJobsPage;
