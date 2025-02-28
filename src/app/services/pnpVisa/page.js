"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For animations
import Image from "next/image";
import SpouseSponsered from "../../../assets/SpouseSponsered.jpg";
import { MapPin, FileText, CheckCircle, Users, Building2, GraduationCap, Briefcase, Globe2, FileCheck, Scale, Heart, BadgeCheck } from 'lucide-react';
// import ChatBot from "@/components/custom/ChatBot";
import styles from "../../Home.module.css"
import { useRouter } from "next/navigation";

const ProvincialPage = () => {
  const router = useRouter();

  const provinces = [
    { name: "Ontario", abbr: "ON" },
    { name: "British Columbia", abbr: "BC" },
    { name: "Alberta", abbr: "AB" },
    { name: "Quebec", abbr: "QC" },
    { name: "Manitoba", abbr: "MB" },
    { name: "Saskatchewan", abbr: "SK" },
    { name: "Nova Scotia", abbr: "NS" },
    { name: "New Brunswick", abbr: "NB" },
    { name: "Newfoundland and Labrador", abbr: "NL" },
    { name: "Prince Edward Island", abbr: "PEI" },
    { name: "Northwest Territories", abbr: "NT" },
    { name: "Yukon", abbr: "YT" },
    { name: "Nunavut", abbr: "NU" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Banner Section */}
      <section className="bg-red-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
             Provincial Nominee Program
            </motion.h1>
            <motion.p
              className="text-lg text-dark mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
            Your pathway to permanent residence through Canadian provinces and territories. Each region offers unique opportunities tailored to their economic needs.
            </motion.p>
            <Button onClick={() => router.push("/form")} className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700">
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
        {/* Program Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Program Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Provincial Selection",
                desc: "Provinces nominate candidates based on their specific labor needs"
              },
              {
                icon: Users,
                title: "Targeted Immigration",
                desc: "Programs designed for specific skills and demographics"
              },
              {
                icon: Building2,
                title: "Regional Settlement",
                desc: "Commitment to settle in the nominating province"
              },
              {
                icon: GraduationCap,
                title: "Skills Assessment",
                desc: "Evaluation of education and work experience"
              },
              {
                icon: Globe2,
                title: "Multiple Streams",
                desc: "Various pathways based on your qualifications"
              },
              {
                icon: Briefcase,
                title: "Economic Growth",
                desc: "Supporting provincial economic development"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <item.icon className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-dark">{item.title}</h3>
                <p className="text-dark">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Participating Provinces */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Participating Provinces & Territories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {provinces.map((province, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-dark group-hover:text-red-600 transition-colors">
                    {province.name}
                  </span>
                  <span className="text-sm text-dark font-mono">
                    {province.abbr}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-dark">Key Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Skills & Experience",
                items: [
                  "Relevant work experience",
                  "Education qualifications",
                  "Language proficiency",
                  "Professional certifications"
                ]
              },
              {
                title: "Settlement Intention",
                items: [
                  "Genuine intention to settle",
                  "Sufficient settlement funds",
                  "Ties to the province",
                  "Integration potential"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-dark">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-red-600" />
                      <span className="text-dark">{item}</span>
                    </li>
                  ))}
                </ul>
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
                icon: MapPin,
                title: "Choose a Province/Territory",
                desc: "Research and select a province that aligns with your skills, experience, and settlement goals."
              },
              {
                icon: FileText,
                title: "Apply for Nomination",
                desc: "Submit your application to the chosen province's PNP stream with all required documentation."
              },
              {
                icon: CheckCircle,
                title: "Receive Nomination Certificate",
                desc: "If successful, receive a nomination certificate from the province."
              },
              {
                icon: FileCheck,
                title: "Apply for Permanent Residence",
                desc: "Submit your permanent residence application to IRCC as a provincial nominee."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
                  </div>
                  <p className="text-dark">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notice */}
        <section className="mb-16 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Program Variations</h3>
          <p className="text-red-700">
            Each province and territory has its own streams and criteria, often targeting specific occupations or demographic needs. 
            Please consult the specific provincial immigration website for detailed requirements and current streams.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Make Canada Your Home?</h2>
            <p className="mb-6">Start your journey to permanent residence through the Provincial Nominee Program today.</p>
            <button onClick={() => router.push("/form")} className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore PNP Streams
            </button>
          </div>
        </section>
      </main>
    </div>
    </div>
        </div>
  );
};

export default ProvincialPage;
