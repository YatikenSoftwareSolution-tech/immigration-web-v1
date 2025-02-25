"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SuccessStoryCard from "@/components/custom/SuccessStoryCard";
import VT1 from "../../../assets/VT1.svg";
import VT2 from "../../../assets/VT2.svg";
import VT3 from "../../../assets/VT3.svg";
import VT4 from "../../../assets/VT4.svg";
import VT5 from "../../../assets/VT5.svg";
import ExpressEntry from '../../../assets/ExpressEntry.jpg';
// import ChatBot from "@/components/custom/ChatBot";
// import JobPlacement

const ExpressEntryPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  const expressEntryCategories = [
    "Canadian Experience Class",
    "Federal Skilled Worker Program",
    "Federal Skilled Trades Program",
  ];

  const expressEntryRequirements = [
    "Age: Points vary depending on age, with younger applicants earning more.",
    "Education: Must meet minimum educational standards, such as ECA for foreign degrees.",
    "Language Skills: Proficiency in English or French (IELTS, TEF, etc.).",
    "Work Experience: At least 1 year of Canadian or relevant foreign work experience.",
    "Skill Transferability: Ability to apply your skills effectively in the Canadian economy.",
  ];

  const expressEntryStats = [
    { background: "orange", icon: VT1, title: "3", description: "Express Entry Programs" },
    { background: "green", icon: VT2, title: "10+", description: "Years of Expertise" },
    { background: "blue", icon: VT3, title: "1000+", description: "Successful Clients" },
    { background: "red", icon: VT4, title: "98%", description: "Success Rate" },
  ];

  const expressEntryProcess = [
    "Eligibility Check: Determine your eligibility based on factors such as age, education, work experience, and language proficiency.",
    "Test Score: Your score will be calculated based on the CRS (Comprehensive Ranking System). This score is used to assess your profile against others in the Express Entry pool.",
    "Document Preparation: Ensure all necessary documents, including language tests, proof of education, work experience, and police clearance are ready.",
    "Create Profile: Create your Express Entry profile in the Immigration, Refugees and Citizenship Canada (IRCC) system.",
    "Invitation to Apply: Once you meet the required score, you will receive an Invitation to Apply (ITA) for permanent residence.",
    "Final Application Submission: Submit your application with all supporting documents and wait for approval."
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "The Immigration Company helped me navigate the Express Entry process with ease. Highly recommend their service!",
    },
    {
      name: "Sarah Lee",
      feedback: "Thanks to the team, I received my PR within just a few months. Very professional and supportive.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <section className="bg-green-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%]  md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              How to Get Canada Immigration Express Entry
            </h1>
            <p className="text-lg text-dark mb-4">
              Discover how you can easily immigrate to Canada through the Express Entry system with expert guidance on eligibility, requirements, and the process.
            </p>
            <Button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-700">
              Book a Consultation
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={ExpressEntry}
              alt="Canada Immigration Express Entry"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Express Entry Categories Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">
            Express Entry Categories
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expressEntryCategories.map((category, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-dark mb-4">{category}</h3>
                <p className="text-dark">
                  Learn more about the eligibility criteria and benefits for {category}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Express Entry Process Section */}
      <section className="bg-gray-100 py-16 px-10">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-dark mb-10">Express Entry Process</h2>
    <div className="space-y-6 text-lg text-dark">
      {expressEntryProcess.map((step, index) => (
        <div key={index} className="flex items-start md:items-center space-x-4"> {/* Align items to start on smaller screens */}
          <div className="flex items-center justify-center rounded-full bg-green-600 text-white w-10 h-10 shrink-0"> {/* Use flexbox for centering and shrink-0 */}
            {index + 1}
          </div>
          <p>{step}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Express Entry Requirements Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">Express Entry Requirements</h2>
          <ul className="list-disc list-inside text-lg text-dark space-y-4">
            {expressEntryRequirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      </section>

    {/* Success Stats Section */}
<section className="py-16 px-6 sm:px-10">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-10">
      Our Success at a Glance
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {expressEntryStats.map((stat, index) => (
        <SuccessStoryCard key={index} stats={stat} />
      ))}
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-dark mb-4">{testimonial.feedback}</p>
                <h4 className="text-lg font-semibold text-dark">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <ChatBot/> */}
    </div>
  );
};

export default ExpressEntryPage;
