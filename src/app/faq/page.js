import Image from "next/image";
import React from "react";
import FaqImage1 from "../../assets/FaqImage1.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <div>
      <section
        id="immigration"
        className="pt-16 mx-auto w-full flex flex-col justify-between items-center"
      >
        <div className="faqBackgroundBanner h-[40vh] w-full absolute top-0 left-0 z-10">
          <h1 className="absolute left-[25%] top-[16%] text-8xl font-bold text-white">
            FAQ's
          </h1>
        </div>
        <div className="w-full p-20 flex justify-between mt-[32vh]">
          {" "}
          {/* Adjusted margin-top */}
          <Image src={FaqImage1} alt="Banner" className="rounded-lg shadow" />
          <div className="flex flex-col w-[50%] gap-4">
            <p className="text-secondary text-md font-semibold ">
              Frequently Asked Question
            </p>
            <h2 className="text-4xl font-semibold">
              Everything you need to know about
              <br />
              <span className="text-secondary">The Immigration Company</span>
            </h2>
            <p className="text-gray text-base font-semibold w-[80%]">
              At the core of our unwavering dedication to delivering outstanding
              immigration solutions is our trusted expertise and commitment to
              excellence. <br />
              Every question you have is important to us, and we greatly value
              the opportunity to assist you.
            </p>
            <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What services do we offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive immigration and visa consulting
                    services, including visa application assistance, document
                    preparation, Comprehensive Visa Assistance Visa Category
                    Expertise Transparency and Communication
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What is the consultation process like?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer comprehensive immigration and visa consulting
                    services, including visa application assistance, document
                    preparation, Comprehensive Visa Assistance Visa Category
                    Expertise Transparency and Communication
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
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
        </div>
      </section>
    </div>
  );
};

export default page;
