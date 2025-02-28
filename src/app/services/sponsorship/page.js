"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // For animations
import Image from "next/image";
import SuccessStoryCard from "@/components/custom/SuccessStoryCard";
import SpouseSponsered from "../../../assets/SpouseSponsered.jpg";
import styles from "../../Home.module.css"
// import ChatBot from "@/components/custom/ChatBot";
const SpousalSponsorshipPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  const requirements = [
    "Be a Canadian citizen or permanent resident.",
    "Be at least 18 years old.",
    "Be living in Canada or plan to live in Canada once the spouse is granted permanent residency.",
    "Able to provide for the financial needs of the spouse or family member for three years.",
  ];

  const ineligibleSituations = [
    "Currently in prison.",
    "Not making alimony or child support payments.",
    "Awaiting release from bankruptcy.",
    "Received social assistance for non-disability-related reasons.",
    "Failed to repay an immigration loan.",
    "Convicted of a violent crime, or an offense against a relative or sexual offense.",
    "Previously sponsored someone and failed to meet the sponsorship agreement.",
  ];

  const costs = [
    { item: "Sponsorship fee", amount: "$75" },
    { item: "Principal applicant processing fee", amount: "$490" },
    { item: "Right of permanent residency charge", amount: "$515" },
    { item: "Biometrics", amount: "$85" },
    { item: "Additional charge for a spouse or partner", amount: "$1,050" },
    { item: "Additional charge for children", amount: "$150 per child" },
    { item: "Fee if residing in Quebec", amount: "$310" },
  ];

  const openWorkPermit = [
    "Temporary foreign workers’ spouses or common-law partners.",
    "Spouses of foreign students studying in Canada.",
    "Spouses or common-law partners of those seeking permanent residency.",
    "Certain young employees participating in the International Experience Canada (IEC) program.",
    "Protected individuals, refugees, and their families.",
  ];

  const faq = [
    {
      question: "What is the process for applying for spousal sponsorship?",
      answer:
        "The application process involves submitting the required documents, paying the fees, and following through with biometric collection, as well as any interviews or further steps needed based on the application type.",
    },
    {
      question: "Can I sponsor my spouse if I am living outside Canada?",
      answer:
        "No, you need to be living in Canada or plan to do so once your spouse is granted permanent residency. You may also apply while inside Canada through the inland spousal sponsorship process.",
    },
    {
      question: "What is the open work permit for spouses?",
      answer:
        "The open work permit allows spouses of foreign workers, students, and other eligible individuals to work in Canada while waiting for their permanent residency status.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Spousal Sponsorship in Canada
            </motion.h1>
            <motion.p
              className="text-lg text-dark mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Canada’s Spousal Sponsorship program allows Canadian citizens and permanent residents to bring their spouses and dependent children to Canada.
            </motion.p>
            <Button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
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

      {/* Sponsorship Requirements Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Sponsorship Requirements</h2>
          <motion.ul
            className="list-disc list-inside text-lg text-darkspace-y-4 text-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Ineligible Situations Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Situations Where You Cannot Sponsor</h2>
          <motion.ul
            className="list-disc list-inside text-lg text-dark space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {ineligibleSituations.map((situation, index) => (
              <li key={index}>{situation}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Sponsorship Costs Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Sponsorship Costs</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {costs.map((cost, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <h3 className="text-xl font-semibold text-darkmb-4">{cost.item}</h3>
                <p className="text-dark">{cost.amount}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Work Permit Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Open Work Permit for Spouses</h2>
          <motion.ul
            className="list-disc list-inside text-lg text-dark space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {openWorkPermit.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Frequently Asked Questions</h2>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {faq.map((q, index) => (
              <div key={index} className="accordion-item bg-white shadow-lg rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-dark">{q.question}</h3>
                <p className="text-dark mt-2">{q.answer}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* <ChatBot/> */}
    </div>
    </div>
        </div>
  );
};

export default SpousalSponsorshipPage;
