import * as React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      <div className="flex flex-col w-full mx-auto md:py-8 px-5 md:px-24 ">
        <section className="px-4 py-7 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-tertiary">
              About <span className="text-secondary">Immigration</span>{" "}
              <span className="text-tertiary">Company</span>
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              # We have been providing immigration services for over 15 years.
            </div>
            <p className="mt-10 text-base md:text-lg text-dark max-w-4xl mx-auto leading-relaxed">
              Welcome to Immigration Company, your trusted partner in navigating
              the complex world of Canadian immigration. With 15 years of
              experience, a proven track record, and a commitment to excellence,
              we provide strategic immigration solutions tailored to your unique
              needs. Whether you're seeking permanent residency, work permits,
              family sponsorship, business immigration, or refugee protection,
              our team is here to guide you every step of the way.
            </p>

            <p className="mt-6 text-base md:text-lg text-dark max-w-4xl mx-auto leading-relaxed">
              Our company is headed by Rajender Singh Bhinder, a dedicated
              Edmontonian for over 30 years. He is a seasoned immigration expert
              with more than 15 years of experience in assisting clients through
              different immigration routes.
            </p>
          </div>
        </section>
        <section className="px-4 py-7 mx-auto max-w-7xl">
          <div className="text-center space-y-4">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight">
              Why
              <span className="text-tertiary"> Choose </span>
              Us?
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              # Reliable and Established Immigration Services in Edmonton Since 2010
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 p-4 sm:p-6 mb-4">
              {/* Card 1: Immigration Simplified */}
              <div className="bg-[#1a2b4b]/5 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4b] mb-3 md:mb-4">
                  Trusted Expertise
                </h3>
                <p className="leading-relaxed text-dark text-sm md:text-base">
                  At The Immigration Company, we simplify the difficult and
                  time-consuming process of immigration to Canada. With over 15
                  years of recognition as the top immigration consultant in
                  Edmonton, we've successfully processed hundreds of candidate
                  profiles.
                </p>
              </div>

              {/* Card 2: Trusted Expertise */}
              <div className="bg-[#1a2b4b]/5 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-[#1a2b4b] mb-3 md:mb-4">
                  Client Centric Approach
                </h3>
                <p className="leading-relaxed text-dark text-sm md:text-base">
                  At The Immigration Company, we provide personalized,
                  client-focused support by guiding you through each step of the
                  immigration process with clear communication, tailored
                  solutions, and expert assistance for a smooth journey.
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
                      <span className="text-sm md:text-base">Work Permit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span className="text-sm md:text-base">
                        Visit Visa Service
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span className="text-sm md:text-base">Study Permit</span>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span className="text-sm md:text-base">Immigrate </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span className="text-sm md:text-base">PR Card</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#1a2b4b] rounded-full"></div>
                      <span className="text-sm md:text-base">LMIA</span>
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
                  President Rajender Bhinder, an Honors Immigration Practitioner
                  Program graduate from Seneca College in Ontario and a member
                  of CAPIC and CICC, provides personalized guidance on all
                  aspects of immigration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
