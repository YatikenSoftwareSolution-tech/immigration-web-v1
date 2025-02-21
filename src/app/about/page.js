import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import bannerImage from "../../assets/heroBanner.jpg";
import photoImage from "../../assets/Photo.jpg";
import Image from "next/image";

const AboutUsPage = () => {
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
        <div >
          {/* Banner Image Container */}
          <div className="relative h-[60vh] w-full">
            {/* Background Image */}
            <Image
              src={bannerImage}
              alt="Immigration Banner"
              className="w-full h-[60vh] mt-6object-cover opacity-80"
            />
           
            
            {/* Text Container */}
            <div className="absolute inset-0 max-w-6xl mx-auto px-6 flex items-center justify-end">
              <h1 className="text-6xl font-bold text-white w-1/2 text-right">
                About The Immigration Company
              </h1>
            </div>
          </div>

          {/* Commitment Section with Image */}
          <div className="bg-[#1a2b4b] text-white p-8  space-x-2">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left side - Image */}
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src={photoImage}
                    alt="Immigration Consulting Team"
                    className="object-cover w-full h-[60vh] mt-6 px-10"
                  />
                </div>

                {/* Right side - Content */}
                <div className="space-y-6 ">
                  <h3 className="text-2xl font-semibold">
                    About Us – Immigration Company
                  </h3>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-4">
                      <p className="leading-relaxed">
                        Welcome to Immigration Company, your trusted partner in
                        navigating the complex world of Canadian immigration.
                        With 15 years of experience, a proven track record, and
                        a commitment to excellence, we provide strategic
                        immigration solutions tailored to your unique needs.
                        Whether you’re seeking permanent residency, work
                        permits, family sponsorship, business immigration, or
                        refugee protection, our team is here to guide you every
                        step of the way.
                      </p>

                      <p className="leading-relaxed">
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

          
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 mb-4">
              {/* Card 1: Immigration Simplified */}
              <div className="bg-[#1a2b4b]/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">
                  Trusted Expertise
                </h3>
                <p className="leading-relaxed text-dark">
                  At The Immigration Company, we simplify the difficult and
                  time-consuming process of immigration to Canada. With over 13
                  years of recognition as the top immigration consultant in
                  Edmonton, we've successfully processed hundreds of candidate
                  profiles.
                </p>
              </div>

              {/* Card 2: Trusted Expertise */}
              <div className="bg-[#1a2b4b]/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">
                  Trusted Expertise
                </h3>
                <p className="leading-relaxed text-dark">
                  Our team comprises certified professionals with extensive
                  knowledge of Canadian immigration laws and policies. We stay
                  updated with the latest regulations to provide our clients
                  with the best guidance for a seamless immigration journey.
                </p>
              </div>

              {/* Card 3: Our Services */}
              <div className="bg-[#1a2b4b]/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">
                  Our Services
                </h3>
                <div className="grid grid-cols-2 gap-6 text-dark">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span>Canada PR</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span>Express Entry</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span>Citizenship</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span>Job Placement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span>Work Permit Visa</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span>PNP & Super Visa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Leadership Excellence */}
              <div className="bg-[#1a2b4b]/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-[#1a2b4b] mb-4">
                  Leadership Excellence
                </h3>
                <p className="leading-relaxed text-dark">
                  President Raj Bhinder, an Honors Immigration Practitioner
                  Program graduate from Seneca College in Ontario and a member
                  of CAPIC and CICC, provides personalized guidance on all
                  aspects of immigration.
                </p>
              </div>
            </div>
            <div className="bg-[#1a2b4b] text-white p-8  space-x-2">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <img
                      src="https://th.bing.com/th/id/OIP._SA2gmOS6ol21qyHvFjvHwHaFM?w=780&h=547&rs=1&pid=ImgDetMain"
                      alt="Immigration Consulting Team"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="w-full">
                    <div className="space-y-4 w-full">
                      <h4 className="text-xl font-medium text-gray-200">
                        Why Choose Us:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-4 h-2 bg-white rounded-full mt-2"></div>
                          <span>
                            Expertise You Can Trust – With 15 years of
                            experience in immigration consulting, our team stays
                            up to date with the latest legal developments to
                            ensure accurate and effective representation.
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-4 h-2 bg-white rounded-full mt-2"></div>
                          <span>
                            Client-Centered Approach – We prioritize our
                            clients’ needs and work closely with them to develop
                            customized immigration strategies.
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-4 h-2 bg-white rounded-full mt-2"></div>
                          <span>
                            Proven Success – Our track record of successful
                            cases reflects our dedication and in-depth
                            understanding of Canadian immigration policies.
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-4 h-2 bg-white rounded-full mt-2"></div>
                          <span>
                            Technology-Driven Solutions – Our interactive
                            website offers AI-driven features to streamline the
                            immigration process and determine eligibility before
                            booking paid consultations.
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-4 h-2 bg-white rounded-full mt-2"></div>
                          <span>
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
            
            <div className="relative w-full ">
              <div
                className="absolute inset-0 h-[800px]"
                style={{
                  backgroundImage: `url(https://www.telegraph.co.uk/content/dam/Travel/2019/May/solo-travel-iStock-904084674.jpg?imwidth=1400)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <div className="max-w-2xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-dark text-center">
                  Quick Links
                </h2>

                <div className="grid grid-cols-3 gap-px border border-white/10 divide-white/10">
                  {cards.map((card, index) => (
                    <Card
                      key={index}
                      className="group relative aspect-square rounded-none border-0 shadow-none bg-white/70 hover:bg-[#1a2b4b]/95 transition-colors duration-300"
                    >
                      <CardHeader className="relative h-full flex items-start p-3">
                        <CardTitle className="text-base text-dark-opacity  text-dark duration-300 group-hover:opacity-0 text-center font-semibold">
                          {card.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-xs px-3">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

           
          </div>
        </div>



        <div className="w-full h-[40vh] mx-auto bg-[#1a2b4b] text-white p-8  mt-24">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="leading-relaxed">
              Whether you’re an individual seeking a fresh start, a family
              looking to reunite, or an employer navigating the complexities of
              hiring foreign talent, Immigration Company is here to make the
              process smooth and efficient. Contact us today to start your
              immigration journey with a team that cares about your success!
            </p>
            <button className="mt-6 bg-white text-[#1a2b4b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default AboutUsPage;
