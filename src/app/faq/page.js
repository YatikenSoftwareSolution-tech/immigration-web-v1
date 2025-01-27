"use client"
import Image from "next/image";
import React, { useState } from "react";
import FaqImage1 from "../../assets/FaqImage1.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Partner1 from "../../assets/Partner1.png";
import Partner2 from "../../assets/Partner2.png";
import Partner3 from "../../assets/Partner3.png";
import Partner4 from "../../assets/Partner4.png";
import Partner5 from "../../assets/Partner5.png";
import Partner6 from "../../assets/Partner6.png";
import Partner7 from "../../assets/Partner7.png";

import SubscribeToNewsletter from "@/components/custom/SubscribeToNewsletter";
import ContactForm from "@/components/custom/ContactForm";
// import ChatBot from "@/components/custom/ChatBot";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  

  return (
    <div>
      {/* Banner Section */}
      <section
        id="immigration"
        className="bg-gradient-to-r from-blue-100 to-white relative mx-auto w-full flex flex-col items-center"
      >
        <div className="faqBackgroundBanner bg-gradient-to-r from-blue-600 to-indigo-800 mt-16 h-[40vh] w-full absolute top-0 left-0 z-10">
          <h1 className="absolute left-[25%] top-[20%] text-8xl font-bold text-white">
            FAQ's
          </h1>
        </div>
        <div className="w-full p-20 flex justify-between mt-[46vh] gap-10">
          <Image src={FaqImage1} alt="FAQ Banner" className="rounded-lg shadow-lg w-1/2" />
          <div className="flex flex-col w-1/2 gap-6">
            <p className="text-secondary text-lg font-semibold">
              Frequently Asked Questions
            </p>
            <h2 className="text-4xl font-bold">
              Everything you need to know about
              <br />
              <span className="text-secondary">The Immigration Company</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              At the core of our unwavering dedication to delivering outstanding
              immigration solutions is our trusted expertise and commitment to
              excellence. Every question you have is important to us, and we
              greatly value the opportunity to assist you.
            </p>
            <Accordion type="single" collapsible>
              {["What services do we offer?", "What is the consultation process like?", "How much do your services cost?"].map((question, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive immigration and visa consulting
                    services, including visa application assistance, document
                    preparation, comprehensive visa assistance, category expertise, and transparent communication.
                  </AccordionContent>
                </AccordionItem>

              ))}
              <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How much do your services cost?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive immigration and visa consulting
                    services, including visa application assistance, document
                    preparation, Comprehensive Visa Assistance Visa Category
                    Expertise Transparency and Communication
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How much do your services cost?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive immigration and visa consulting
                    services, including visa application assistance, document
                    preparation, Comprehensive Visa Assistance Visa Category
                    Expertise Transparency and Communication
                  </AccordionContent>
                </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-r from-blue-50 to-red-50 w-full pt-20  flex justify-center bg-gray-50">
        <ContactForm/>
      </section>
      <section
        id="studentVisaPartners"
        className="py-20 h-[94vh] bg-secondary mx-auto relative w-full"
      >
        <div className="flex flex-col items-center justify-around text-center">
          <div className="text-lg font-semibold text-white mb-8">
            We love to work with our trusted partners
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              Partner1,
              Partner2,
              Partner3,
              Partner4,
              Partner5,
              Partner6,
              Partner7,
            ].map((partner, index) => (
              <div
                key={index}
                className="w-40 h-40 flex justify-center items-center bg-white rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <SubscribeToNewsletter />
      </section>
      {/* <ChatBot/> */}
    </div>
  );
};

export default Page;
