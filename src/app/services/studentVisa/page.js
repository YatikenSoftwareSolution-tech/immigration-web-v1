// import React from "react";
// import { Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import StudentVisaBanner1 from "../../../assets/StudentVisaBanner1.png";
// import University1 from "../../../assets/university1.png";
// import University2 from "../../../assets/university2.png";
// import University3 from "../../../assets/university3.png";
// import University4 from "../../../assets/university4.png";
// import University5 from "../../../assets/university5.png";
// import University6 from "../../../assets/university6.png";
// import University7 from "../../../assets/university7.png";

// const page = () => {
//   return (
//     <div>
//       <section
//         id="immigration"
//         className="bg-gradient-to-r from-pink-50 to-blue-100 w-full h-[90vh] flex item-center px-20"
//       >
//         <div className=" flex flex-wrap gap-4 justify-center items-center mx-auto">
//           <div className="flex flex-col ">
//             <h1 className="  text-4xl md:text-5xl font-bold">
//               Expert Student Visa Help
//             </h1>
//             <p className="mt-4 text-lg md:text-xl text-gray-500">
//               Since 1998 - Unparalleled Comprehensive Student Visa Guide
//             </p>

//             <ul className="mt-6 space-y-2 text-left">
//               <li className="flex items-center text-lg">
//                 <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 mr-2">
//                   <Check className="text-secondary" />
//                 </span>
//                 Expert Legal Support
//               </li>
//               <li className="flex items-center text-lg">
//                 <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 mr-2">
//                   <Check className="text-secondary" />
//                 </span>{" "}
//                 Meeting Your Unique Needs
//               </li>
//               <li className="flex items-center text-lg">
//                 <span className="flex items-center justify-center bg-gray-400 rounded-full p-2 mr-2">
//                   <Check className="text-secondary" />
//                 </span>{" "}
//                 Tailored Immigration Solutions
//               </li>
//             </ul>
//             <div className="flex items-center mt-20 gap-4 sm:gap-6 md:gap-8">
//               <Button className="w-[150px] md:w-[180px] text-white bg-secondary p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90">
//                 Book Consultation
//               </Button>
//               <Button className="w-[150px] text-white md:w-[180px] bg-dark p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-dark/90">
//                 Learn More
//               </Button>
//             </div>
//           </div>
//           <div
//             className="relative border rounded-lg"
//             style={{
//               border: "1px solid black",
//               borderRadius: "50%",
//               height: "600px",
//               width: "600px",
//             }}
//           >
//             <Image
//               src={StudentVisaBanner1}
//               alt="Banner"
//               //   width={600}
//               //   height={600}
//               fill={true}
//               className="landing-banner"
//             />
//           </div>
//         </div>
//       </section>
//       <section
//         id="immigrationPartners"
//         className="py-20 bg-secondary mx-auto relative w-full"
//       >
//         <div className="flex flex-col items-center justify-around text-center">
//           <div className="text-lg font-semibold text-white mb-8">
//             We love to work with our preferred partners
//           </div>
//           <div className="flex flex-wrap items-center lg:gap-14 md:gap-14">
//             {[
//               University1,
//               University2,
//               University3,
//               University4,
//               University5,
//               University6,
//               University7,
//             ].map((partner, index) => (
//               <div key={index}>
//                 <Image
//                   src={partner}
//                   alt={`Partner${index + 1}`}
//                   className="hover:scale-110 transition-transform duration-200"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default page;



"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Check } from "lucide-react";
import ConsultationForm from "@/components/custom/ConsultationForm";
import ProgramCard from "@/components/custom/ProgramCard";
import SuccessStoryCard from "@/components/custom/SuccessStoryCard";
import VT1 from "../../../assets/VT1.svg";
import VT2 from "../../../assets/VT2.svg";
import VT3 from "../../../assets/VT3.svg";
import VT4 from "../../../assets/VT4.svg";
import JobPlacement from '../../../assets/JobPlacement.jpg';
// import ChatBot from "@/components/custom/ChatBot";

const JobPlacementServicesPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  const jobSeekerServices = [
    "Application process",
    "Resume building",
    "Interview preparation",
    "Various professional development activities",
  ];

  const employerServices = [
    "Screening",
    "Interviewing",
    "Referencing",
    "Validating prospects",
  ];

  const successStats = [
    { background: "orange", icon: VT1, title: "100%", description: "Placement Rate" },
    { background: "green", icon: VT2, title: "10+", description: "Years of Expertise" },
    { background: "blue", icon: VT3, title: "500+", description: "Successful Placements" },
    { background: "red", icon: VT4, title: "50+", description: "Industry Partners" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-[10%] md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Find the Best Jobs in Canada for Indians
            </h1>
            <p className="text-lg text-dark mb-4">
              With our proven expertise, we help you land high-paying jobs in Canada and advance your career.
            </p>
            <Button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
              Get Started
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src={JobPlacement}
              alt="Job Placement in Canada"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Job Seeker Services Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">
            Services for Job Seekers
          </h2>
          <ul className="list-disc list-inside text-lg text-dark space-y-4">
            {jobSeekerServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Employer Services Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-10">
            Services for Employers
          </h2>
          <ul className="list-disc list-inside text-lg text-dark space-y-4">
            {employerServices.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="py-16 px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dark mb-10">
            Our Success at a Glance
          </h2>
          <div className="flex flex-wrap">
            {successStats.map((stat, index) => (
              <SuccessStoryCard key={index} stats={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dark mb-6">
            Ready to Land Your Dream Job in Canada?
          </h2>
          <p className="text-lg text-dark mb-6">
            Get in touch with The Immigration Company today and let us help you achieve your career aspirations in Canada.
          </p>
          <Button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
            Contact Us
          </Button>
        </div>
      </section>
      {/* <ChatBot/> */}
    </div>
  );
};

export default JobPlacementServicesPage;
