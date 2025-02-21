"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For animations
import Image from "next/image";
import SuccessStoryCard from "@/components/custom/SuccessStoryCard";
import SpouseSponsered from "../../../assets/SpouseSponsered.jpg";
import { Clock, Heart, Users, Wallet, FileText, Plane, FileCheck, Scale, Globe2, UserPlus, Stethoscope, Mail } from 'lucide-react';
// import ChatBot from "@/components/custom/ChatBot";
const SuperVisaPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Banner Section */}
      <section className="bg-green-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Super Visa for Parents and Grandparents
            </motion.h1>
            <motion.p
              className="text-lg text-dark mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
             Bring your family closer together with extended stays of up to 5 years in Canada. A special visa designed for parents and grandparents of Canadian citizens and permanent residents
            </motion.p>
            <Button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700">
              Apply Now
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={SpouseSponsered}
              alt="Spousal Sponsorship in Canada"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Clock, 
                title: "Extended Stay", 
                desc: "Stay in Canada for up to five consecutive years without renewal",
                highlight: "5 Years"
              },
              { 
                icon: Plane, 
                title: "Multiple Entries", 
                desc: "Valid for up to 10 years with multiple entries into Canada",
                highlight: "10 Years"
              },
              { 
                icon: Users, 
                title: "Family Reunification", 
                desc: "Spend quality time with your family members in Canada",
                highlight: "Together"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  {item.highlight}
                </div>
                <item.icon className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-dark">{item.title}</h3>
                <p className="text-dark">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: UserPlus, 
                title: "Relationship", 
                desc: "Must be the parent or grandparent of a Canadian citizen or permanent resident" 
              },
              { 
                icon: Mail, 
                title: "Letter of Invitation", 
                desc: "Signed letter from your child/grandchild including financial support promise" 
              },
              { 
                icon: Wallet, 
                title: "Financial Support", 
                desc: "Host must meet minimum necessary income requirements" 
              },
              { 
                icon: Heart, 
                title: "Medical Insurance", 
                desc: "Minimum $100,000 Canadian medical coverage for one year" 
              },
              { 
                icon: Stethoscope, 
                title: "Medical Examination", 
                desc: "Must undergo an immigration medical exam" 
              },
              { 
                icon: Globe2, 
                title: "Additional Requirements", 
                desc: "Visit IRCC website for complete eligibility criteria" 
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                <item.icon className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2 text-dark text-lg">{item.title}</h3>
                  <p className="text-dark">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Application Process</h2>
          <div className="space-y-8">
            {[
              {
                icon: FileCheck,
                title: "Eligibility Confirmation",
                desc: "Verify that you have a child or grandchild who is a Canadian citizen or permanent resident."
              },
              {
                icon: FileText,
                title: "Invitation Letter",
                desc: "Obtain a detailed letter from your host in Canada, including financial support promise and household details."
              },
              {
                icon: Wallet,
                title: "Financial Proof",
                desc: "Gather evidence that your host meets the minimum necessary income requirements."
              },
              {
                icon: Heart,
                title: "Medical Insurance",
                desc: "Purchase Canadian medical insurance coverage of at least $100,000 valid for one year."
              },
              {
                icon: Stethoscope,
                title: "Medical Examination",
                desc: "Complete the required immigration medical examination with an approved physician."
              },
              {
                icon: Scale,
                title: "Application Submission",
                desc: "Submit your application online or through a visa application center with all supporting documents."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
                  </div>
                  <p className="text-dark">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notice */}
        <section className="mb-16 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Important Notice</h3>
          <p className="text-green-700">
            Processing times may vary. Ensure all documentation is complete and accurate before submission. 
            Visit the official IRCC website for the most up-to-date information and detailed requirements.
          </p>
        </section>

       
      </main>
    </div>
  );
};

export default SuperVisaPage;
