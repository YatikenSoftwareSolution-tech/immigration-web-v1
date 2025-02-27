"use client";
import Image from "next/image";

import CountriesBanner2 from "../../assets/CountriesBanner2.jpg";
import ChatBot from "@/components/custom/ChatBot";
import PartnersList from "@/components/custom/PartnersList";
import CountriesBanner1 from "../../assets/CountriesBanner1.jpg";
import {
  Briefcase,
  Clock,
  Coffee,
  Globe2,
  GraduationCap,
  Heart,
  MapPin,
  User,
} from "lucide-react";
import React, { useState } from "react";

function JobCard({
  title,
  location,
  type,
  experience,
  description,
  responsibilities,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-dark mb-6">{title}</h3>
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-dark">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-dark">
          <Clock className="w-4 h-4 mr-2" />
          <span>{type}</span>
        </div>
        <div className="flex items-center text-dark">
          <Briefcase className="w-4 h-4 mr-2" />
          <span>{experience}</span>
        </div>
      </div>

      <p className="text-dark mb-4">{description}</p>

      <div
        className={`transition-all duration-300 ${
          isExpanded ? "block" : "hidden"
        }`}
      >
        <h4 className="font-semibold text-dark mb-2">Key Responsibilities:</h4>
        <ul className="list-disc list-inside space-y-1 text-dark mb-4">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col space-y-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </button>
        <button className="mx-auto mt-6 px-4 py-2  bg-secondary text-white rounded-md hover:bg-red-700 transition-colors text-center">
          Apply Now
        </button>
      </div>
    </div>
  );
}

const Carrers = () => {
  return (
    <div className="relative">
      <section id="careers" className="">
        <div className="relative w-full bg-cover bg-center mb-4 ">
          <Image
            src={CountriesBanner1}
            alt="Banner"
            height={100}
            width={100}
            layout="responsive"
            priority
          />
        </div>

        <div className="container mx-auto py-6 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-around">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <Image
              src={CountriesBanner2}
              alt="Banner"
              width={500}
              height={300}
              layout="responsive"
              objectFit="contain"
              className="rounded-lg"
              priority
            />
          </div>
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4 lg:gap-6 md:pl-10">
            {" "}
            {/* Adjusted gap */}
            <p className="text-secondary text-sm md:text-md  lg:text-3xl font-semibold">
              Let's work together
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-dark">
              {" "}
              {/* Adjusted text size */}
              We believe in small teams doing big things at
              <span className="text-secondary"> The Immigration Company</span>
            </h2>
            <p className="text-dark text-sm md:text-base font-semibold mt-2 md:mt-4">
              {" "}
              {/* Adjusted text size and margin */}
              Join our dynamic and diverse team at The Immigration Company,
              where innovation meets passion. We are committed to making a
              difference in the lives of immigrants and fostering a
              collaborative, growth-driven culture. Explore our open positions
              and become a part of something bigger.
            </p>
            <div className="mt-4 md:mt-8">
              {" "}
              {/* Adjusted margin */}
              <button
                href="#jobs"
                className="bg-secondary text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-secondary-dark transition duration-300 w-full md:w-auto" /* Adjusted text size and padding */
              >
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-3xl font-bold text-center mb-12 text-dark">Our<span className="text-secondary"> Culture</span> </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg h-[50vh]"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-semibold leading-tight text-dark mb-12">
                Where Passion
                <span className="text-secondary"> Meets Purpose </span>
              </h2>
              <p className="text-dark mb-6  text-base font-semibold">
                We're building a team of dedicated professionals who are
                passionate about making immigration processes simpler and more
                accessible. Our culture is built on empathy, innovation, and
                continuous learning.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <GraduationCap className="w-6 h-6 text-secondary  mr-2" />
                  <span className="text-dark text-base font-semibold px-2">
                    Continuous learning and development opportunities
                  </span>
                </li>
                <li className="flex items-center">
                  <User className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-dark text-base font-semibold px-2">
                    Collaborative and inclusive environment
                  </span>
                </li>
                <li className="flex items-center">
                  <Globe2 className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-dark text-base font-semibold px-2">
                    Global team with remote-first approach
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 w-full mx-auto ">
        <h2 className="text-4xl font-semibold leading-tight text-dark text-center mb-8">
          Why Work
          <span className="text-secondary"> With Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center ">
            <Globe2 className="w-12 h-12 mx-auto text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-dark mb-2">
              Global Impact
            </h3>
            <p className="text-dark">
              Make a difference in people's lives across the world
            </p>
          </div>
          <div className="text-center">
            <User className="w-12 h-12 mx-auto text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-dark">
              Diverse Teams
            </h3>
            <p className="text-dark">
              Work with talented people from various backgrounds
            </p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-dark">
              Great Benefits
            </h3>
            <p className="text-dark">
              Comprehensive healthcare and wellness programs
            </p>
          </div>
          <div className="text-center">
            <Coffee className="w-12 h-12 mx-auto text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-dark">
              Work-Life Balance
            </h3>
            <p className="text-dark">
              Flexible schedules and remote work options
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-8 w-full mx-auto bg-gradient-to-r from-pink-50 to-blue-100">
        <h2 className="text-4xl font-semibold leading-tight text-dark text-center mb-8 ">
          Current Job
          <span className="text-secondary">Openings</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JobCard
            title="Senior Immigration Consultant"
            location="New York, USA"
            type="Full-time"
            experience="3+ years"
            description="Join our team as a Senior Immigration Consultant and help guide clients through complex immigration processes while ensuring compliance with current laws ."
            responsibilities={[
              "Manage complex immigration cases from initiation to completion",
              "Provide expert consultation on immigration matters",
              "Review and prepare visa applications and supporting documentation",
              "Maintain up-to-date knowledge of immigration laws and procedures",
              "Mentor junior consultants and support staff",
            ]}
          />
          <JobCard
            title="Legal Case Manager"
            location="Remote"
            type="Full-time"
            experience="2+ years"
            description="We're seeking a detail-oriented Legal Case Manager to oversee immigration case workflows and ensure smooth processing of client applications."
            responsibilities={[
              "Coordinate with clients and legal teams throughout the immigration process",
              "Track case progress and maintain detailed documentation",
              "Manage deadlines and filing requirements",
              "Communicate updates to stakeholders",
              "Implement and maintain case management systems",
            ]}
          />
          <JobCard
            title="Customer Success Specialist"
            location="Toronto, Canada"
            type="Full-time"
            experience="1+ years"
            description="Be the voice of our company and help clients navigate their immigration journey while providing exceptional support and guidance."
            responsibilities={[
              "Provide first-line support to clients throughout their immigration process",
              "Onboard new clients and explain our services",
              "Coordinate with internal teams to resolve client inquiries",
              "Maintain high customer satisfaction ratings",
              "Contribute to improving customer service processes",
            ]}
          />
        </div>
      </section>

      {/* <PartnersList />
      <ChatBot /> */}
    </div>
  );
};

export default Carrers;
