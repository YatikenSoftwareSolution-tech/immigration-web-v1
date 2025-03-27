"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion"; 
import Nominee from '../../../assets/Nominee.jpg';
import styles from "../../../Home.module.css"
import { useRouter } from "next/navigation";

const AlbertaPNPPage = () => {
  const router = useRouter();

  // Streams in AAIP (Alberta Advantage Immigration Program)
  const programStreams = [
    {
      name: "Worker Stream",
      details: "For workers living and working in Alberta or planning to do so.",
    },
    {
      name: "Entrepreneur Stream",
      details: "For entrepreneurs looking to invest or start businesses in Alberta.",
    },
    {
      name: "Rural Renewal Stream",
      details: "For attracting newcomers to rural communities to fill labor shortages.",
    },
    {
      name: "Graduate Entrepreneur Stream",
      details: "For foreign graduates from Alberta post-secondary institutions who wish to start a business.",
    },
    {
      name: "Farm Stream",
      details: "For farmers wishing to establish or purchase a farm in Alberta.",
    },
  ];

  const eligibilityCriteria = [
    "Possess the knowledge, training, and professional experience necessary to support Alberta's economy.",
    "Desire to live in Alberta permanently.",
    "Meet specific stream eligibility requirements (e.g., work experience, job offer, education).",
    "For Express Entry streams: create a profile in the Express Entry system and meet minimum criteria.",
    "For Entrepreneur streams: Ability to invest in or start a business in Alberta.",
  ];

  const programAdvantages = [
    "Higher Incomes: Families in Alberta have a higher median income compared to other provinces in Canada.",
    "Scenic Beauty: Alberta is known for its stunning landscapes and diverse natural beauty.",
    "Standard of Living: Alberta offers a high standard of living, with a good quality of life and health services.",
  ];

  const testimonials = [
    {
      name: "Emma Roberts",
      feedback:
        "The Alberta PNP program was a seamless process, and I was able to settle in Alberta with my family. The support I received was invaluable.",
    },
    {
      name: "James Anderson",
      feedback:
        "After applying for the Alberta Advantage Immigration Program, I found success in just a few months. Highly recommend their services!",
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
              Alberta Provincial Nominee Program (PNP)
            </motion.h1>
            <motion.p
              className="text-lg text-dark mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Alberta offers one of the easiest paths to Permanent Residency in Canada through its Provincial Nominee Program (PNP). Learn about the eligibility requirements, streams, and how we can help you apply.
            </motion.p>
            <Button onClick={() => router.push("/form")} className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
              Book a Consultation
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* <Image
              src={Nominee}
              alt="Alberta Provincial Nominee Program"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
      </section>

      {/* Program Streams Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">
            Program Streams Under Alberta PNP
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {programStreams.map((stream, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <h3 className="text-xl font-semibold text-dark mb-4">{stream.name}</h3>
                <p className="text-dark">{stream.details}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">
            Eligibility Criteria for Alberta PNP
          </h2>
          <motion.ul
            className="list-disc list-inside text-lg text-dark space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {eligibilityCriteria.map((criterion, index) => (
              <li key={index}>{criterion}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Program Advantages Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">
            Advantages of Living in Alberta
          </h2>
          <motion.ul
            className="list-disc list-inside text-lg text-dark space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {programAdvantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">
            What Our Clients Say
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <p className="text-dark mb-4">{testimonial.feedback}</p>
                <h4 className="text-lg font-semibold text-dark">- {testimonial.name}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6 text-lg text-dark">
            <div className="accordion">
              <motion.div
                className="accordion-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h3 className="accordion-title">1. How can I simply understand Alberta Provincial Nominee Program?</h3>
                <p>
                  The Alberta Provincial Nominee Program (PNP) allows Alberta to nominate individuals for permanent
                  residence. Being nominated significantly enhances your chances of becoming a permanent resident in
                  Canada.
                </p>
              </motion.div>

              <motion.div
                className="accordion-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h3 className="accordion-title">2. What is Alberta Rural Renewal Stream?</h3>
                <p>
                  The Alberta Rural Renewal Stream helps draw and keep newcomers to rural Alberta. Rural towns can attract
                  and retain foreign nationals who want to live, work, and settle there.
                </p>
              </motion.div>

              <motion.div
                className="accordion-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h3 className="accordion-title">3. Do I need a job offer for the Alberta Provincial Nominee Program?</h3>
                <p>
                  Job offers are not mandatory for the Alberta Express Entry streams, but they are required for some other
                  streams. Check the specific requirements for the stream you're interested in.
                </p>
              </motion.div>

              <motion.div
                className="accordion-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h3 className="accordion-title">4. What are the Alberta Provincial Nominee Program's eligibility requirements?</h3>
                <p>
                  You must either be nominated under a stream or meet the minimum standards for the non-Express Entry
                  streams to apply under the PNP program.
                </p>
              </motion.div>

              <motion.div
                className="accordion-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <h3 className="accordion-title">5. Can I apply for PNP as a student?</h3>
                <p>
                  Yes, students can apply for certain PNPs based on their work experience, education, and skills.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* <ChatBot/> */}
    </div>
    </div>
        </div>
  );
};

export default AlbertaPNPPage;
