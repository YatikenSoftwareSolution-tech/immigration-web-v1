"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GrandParents from "../../../assets/GrandParents.png";
// import ChatBot from "@/components/custom/ChatBot";
import styles from "../../../Home.module.css"
const ParentsAndGrandparentsPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  const pgpEligibility = [
    "At least eighteen years old.",
    "Live in Canada.",
    "Possess a valid Canadian passport, be a permanent resident, or be an individual who is registered as an Indian under the Canadian Indian Act.",
    "Possess sufficient funds to sustain the people they choose to sponsor by fulfilling the minimum income standards for the preceding three years.",
    "Agree to provide financial support for 20 years following the approval of permanent residency.",
    "Agree to repay any social assistance provided to the sponsored individual during that period.",
  ];

  const superVisaEligibility = [
    "Demonstrate that they are the parents or grandparents of a Canadian citizen or permanent resident.",
    "Obtain a minimum coverage of $100,000 for medical expenses, hospital stays, and repatriation from a Canadian insurance provider with a minimum one-year validity.",
    "Obtain a medical evaluation.",
    "A Canadian family member must send a letter of invitation and guarantee financial support for the applicant throughout the whole visit.",
  ];

  const faqItems = [
    {
      question: "How can I sponsor my parents and grandparents if I live in Quebec?",
      answer:
        "If you live in Quebec, after being accepted as a sponsor by IRCC, you must meet Quebec’s immigration sponsorship standards. This includes fulfilling a second sponsorship agreement with the province, and effective November 2023, a welcome and integration plan for individuals aged 18-55.",
    },
    {
      question: "Is super visa and visitor visa the same?",
      answer: "No, a Super Visa allows stays up to 5 years, unlike a visitor visa which is typically for 6 months.",
    },
    {
      question: "Can I sponsor more than one parent or grandparent?",
      answer:
        "Yes, you can sponsor multiple individuals in your PGP application, but you will need to submit separate applications for each person (or couple) you sponsor. You must also meet the applicable income standards for each sponsored individual.",
    },
    {
      question: "What is the minimum income to sponsor Parents and Grandparents to immigrate to Canada?",
      answer:
        "You must have earned more than the Minimum Necessary Income required by Immigration, Refugees, and Citizenship Canada (IRCC) for each of the last three tax years.",
    },
    {
      question: "What is Canada's super visa processing time?",
      answer: "The processing time for a Super Visa is approximately 53 days.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Parents and Grandparents PR & Super Visa Application
            </h1>
            <p className="text-lg text-dark mb-4">
              Learn about the Canada Parents and Grandparents Program (PGP) and Super Visa options for parents and grandparents to join their loved ones in Canada.
            </p>
            <Button
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700"
              onClick={() => setIsConsultationFormOpen(true)}
            >
              Book a Consultation
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={GrandParents}
              alt="Parents and Grandparents Visa"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* PGP Eligibility Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Eligibility for Parents and Grandparents Program (PGP)</h2>
          <ul className="list-disc list-inside text-lg text-dark space-y-4">
            {pgpEligibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Super Visa Eligibility Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Super Visa Eligibility</h2>
          <ul className="list-disc list-inside text-lg text-dark space-y-4">
            {superVisaEligibility.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-dark">{faq.question}</h3>
                <p className="text-dark mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Time Section */}
      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dark mb-10">Super Visa Processing Time</h2>
          <p className="text-lg text-dark">
            The processing time for Super Visa applications is approximately 53 days for parents and grandparents living in India.
          </p>
        </div>
      </section>
      {/* <ChatBot/> */}
    </div>
    </div>
    </div>
  );
};

export default ParentsAndGrandparentsPage;
