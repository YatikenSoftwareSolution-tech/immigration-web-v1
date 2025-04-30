"use client"
import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import bannerImage from "../../assets/heroBanner.jpg";
import photoImage from "../../assets/Photo.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutUsPage = () => {
  const router = useRouter();
  const cards = [
    {
      title: "News centre",
      description:
        "Latest updates and announcements from Immigration New Zealand",
    },
    {
      title: "Contact us",
      description:
        "Get in touch with Immigration New Zealand for support and inquiries",
    },
    {
      title: "How we work",
      description: "Learn about our processes, methods and service standards",
    },
    {
      title: "Resource library",
      description: "Access guides, forms, and immigration resources",
    },
    {
      title: "What we do",
      description: "Explore our services and core functions in immigration",
    },
    {
      title: "Policy and law",
      description: "Information about immigration legislation and policies",
    },
    {
      title: "Research and statistics",
      description: "Immigration data, trends and research findings",
    },
    {
      title: "Site information",
      description: "Website help and technical information",
    },
    {
      title: "Our online systems",
      description: "Access our digital services and online tools",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Company Information Section - Full Width */}
      <div className="relative w-full">
        <div>
          {/* Banner Image Container - Responsive height */}
          <div className=" mt-2 relative h-[50vh] md:h-[60vh] lg:h[80vh]  md:w-full lg:w-full">
            {/* Background Image - Fixed syntax typo in className */}
            <Image
              src={bannerImage}
              alt="Immigration Banner"
              className="w-[100vw] h-[100%] object-fill opacity-80"
            />
            
            
          </div>

          {/* Commitment Section with Image - Improved padding */}
          <div className="bg-[#1a2b4b] text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left side - Image with better responsive height */}
                <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src={photoImage}
                    alt="Immigration Consulting Team"
                    className="object-cover w-full h-full"
                    style={{ objectPosition: "center" }}
                  />
                </div>

                {/* Right side - Content with better spacing */}
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    About Us – Immigration Company
                  </h3>

                  <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-col gap-3 md:gap-4">
                      <p className="leading-relaxed text-sm md:text-base">
                        Welcome to Immigration Company, your trusted partner in
                        navigating the complex world of Canadian immigration.
                        With 15 years of experience, a proven track record, and
                        a commitment to excellence, we provide strategic
                        immigration solutions tailored to your unique needs.
                        Whether you're seeking permanent residency, work
                        permits, family sponsorship, business immigration, or
                        refugee protection, our team is here to guide you every
                        step of the way.
                      </p>

                      <p className="leading-relaxed text-sm md:text-base">
                        At Immigration Company, we believe that every
                        immigration journey is unique. Our firm is led by
                        Rajender Bhinder, a highly experienced immigration
                        professional with over 15 years of expertise in
                        representing clients across various immigration
                        pathways. His extensive knowledge and dedication have
                        helped countless individuals and businesses achieve
                        their immigration goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise & Services Cards - Improved grid responsiveness */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 p-4 sm:p-6 mt-8 mb-4">
            {/* Card 1: Immigration Simplified */}
            <div className="bg-[#1a2b4b]/5 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4b] mb-3 md:mb-4">
                Trusted Expertise
              </h3>
              <p className="leading-relaxed text-dark text-sm md:text-base">
                At The Immigration Company, we simplify the difficult and
                time-consuming process of immigration to Canada. With over 13
                years of recognition as the top immigration consultant in
                Edmonton, we've successfully processed hundreds of candidate
                profiles.
              </p>
            </div>

            {/* Card 2: Trusted Expertise */}
            <div className="bg-[#1a2b4b]/5 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4b] mb-3 md:mb-4">
                Trusted Expertise
              </h3>
              <p className="leading-relaxed text-dark text-sm md:text-base">
                Our team comprises certified professionals with extensive
                knowledge of Canadian immigration laws and policies. We stay
                updated with the latest regulations to provide our clients
                with the best guidance for a seamless immigration journey.
              </p>
            </div>

            {/* Card 3: Our Services - Responsive grid for services */}
            <div className="bg-[#1a2b4b]/5 p-4 sm:p-6 rounded-lg mb-4 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4b] mb-3 md:mb-4">
                Our Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-dark">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                    <span className="text-sm md:text-base">Canada PR</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                    <span className="text-sm md:text-base">Express Entry</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                    <span className="text-sm md:text-base">Citizenship</span>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                    <span className="text-sm md:text-base">Job Placement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                    <span className="text-sm md:text-base">Work Permit Visa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                    <span className="text-sm md:text-base">PNP & Super Visa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Leadership Excellence */}
            <div className="bg-[#1a2b4b]/5 p-4 sm:p-6 rounded-lg mb-4 md:mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4b] mb-3 md:mb-4">
                Leadership Excellence
              </h3>
              <p className="leading-relaxed text-dark text-sm md:text-base">
                President Raj Bhinder, an Honors Immigration Practitioner
                Program graduate from Seneca College in Ontario and a member
                of CAPIC and CICC, provides personalized guidance on all
                aspects of immigration.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section - Improved responsiveness */}
          <div className="bg-[#1a2b4b] text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="relative h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
                  <img
                    src="https://th.bing.com/th/id/OIP._SA2gmOS6ol21qyHvFjvHwHaFM?w=780&h=547&rs=1&pid=ImgDetMain"
                    alt="Immigration Consulting Team"
                    className="object-cover w-full h-full"
                    height={180}
                    width={260}
                  />
                </div>

                <div className="w-full">
                  <div className="space-y-3 md:space-y-4 w-full">
                    <h4 className="text-lg md:text-xl font-medium text-gray-200">
                      Why Choose Us:
                    </h4>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start space-x-2">
                        <div className="w-3 md:w-4 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base">
                          Expertise You Can Trust – With 15 years of
                          experience in immigration consulting, our team stays
                          up to date with the latest legal developments to
                          ensure accurate and effective representation.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-3 md:w-4 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base">
                          Client-Centered Approach – We prioritize our
                          clients' needs and work closely with them to develop
                          customized immigration strategies.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-3 md:w-4 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base">
                          Proven Success – Our track record of successful
                          cases reflects our dedication and in-depth
                          understanding of Canadian immigration policies.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-3 md:w-4 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base">
                          Technology-Driven Solutions – Our interactive
                          website offers AI-driven features to streamline the
                          immigration process and determine eligibility before
                          booking paid consultations.
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-3 md:w-4 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base">
                          Comprehensive Services – From initial assessments to
                          application submissions and appeals, we handle all
                          aspects of your immigration process.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUsPage;