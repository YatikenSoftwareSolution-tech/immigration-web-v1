"use client";

import { Button } from "@/components/ui/button";
import SuccessStoryCard from "@/components/custom/SuccessStoryCard";
import VT1 from "../../../assets/VT1.svg";
import VT2 from "../../../assets/VT2.svg";
import VT3 from "../../../assets/VT3.svg";
import VT4 from "../../../assets/VT4.svg";
import { useRouter } from "next/navigation";

const JobPlacementServicesPage = () => {
  const router = useRouter();

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
    <div className={styles.container}>
      <div className={styles.pageContent}>
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
            <Button onClick={() => router.push("/form")} className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
              Get Started
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {/* <Image
              src={JobPlacement}
              alt="Job Placement in Canada"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            /> */}
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
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12"> {/* Added container for centering */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Use CSS Grid */}
            {successStats.map((stat, index) => (
              <SuccessStoryCard key={index} stats={stat} />
            ))}
          </div>
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
          <Button onClick={() => router.push("/form")} className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
            Contact Us
          </Button>
        </div>
      </section>
      {/* <ChatBot/> */}
    </div>
    </div>
        </div>
  );
};

export default JobPlacementServicesPage;
