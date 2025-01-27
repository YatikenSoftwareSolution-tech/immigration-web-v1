import Image from "next/image";
import React from "react";
import CountriesBanner2 from "../../assets/CountriesBanner2.jpg";
import SubscribeToNewsletter from "@/components/custom/SubscribeToNewsletter";
import Partner1 from "../../assets/Partner1.png";
import Partner2 from "../../assets/Partner2.png";
import Partner3 from "../../assets/Partner3.png";
import Partner4 from "../../assets/Partner4.png";
import Partner5 from "../../assets/Partner5.png";
import Partner6 from "../../assets/Partner6.png";
import Partner7 from "../../assets/Partner7.png";
// import ChatBot from "@/components/custom/ChatBot";

const page = () => {
  return (
    <div>
      <section
        id="careers"
        className="relative mx-auto w-full flex flex-col items-center"
      >
        <div className="countriesBackgroundBanner mt-10 h-[40vh] w-full absolute ">
          <h1 className="absolute left-[15%] top-[16%] text-8xl font-bold text-dark">
            Careers
          </h1>
        </div>

        <div className="w-full p-20 flex flex-col md:flex-row items-center justify-around mt-[40vh]">
          {/* Banner Image Section */}
          
            <Image
              src={CountriesBanner2}
              alt="Banner"
              layout="intrinsic"
              width={500}
            />

          {/* Text Content Section */}
          <div className="flex flex-col w-full md:w-1/2 gap-4 md:pl-10 mt-8 md:mt-0">
            <p className="text-secondary text-md font-semibold">
              Let's work together
            </p>
            <h2 className="text-4xl font-semibold leading-tight">
              We believe in small teams doing big things at 
              <span className="text-secondary"> The Immigration Company</span>
            </h2>
            <p className="text-gray text-base font-semibold mt-4">
              Join our dynamic and diverse team at The Immigration Company, where
              innovation meets passion. We are committed to making a difference
              in the lives of immigrants and fostering a collaborative, growth-driven
              culture. Explore our open positions and become a part of something bigger.
            </p>

            <div className="mt-8">
              <a
                href="#jobs"
                className="bg-secondary text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-secondary-dark transition duration-300"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="jobs" className="bg-gradient-to-r from-pink-50 to-blue-100 w-full bg-gray-50 py-16">
          <div className="max-w-screen-xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-8">Current Job Openings</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Job Posting Example */}
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h4 className="text-2xl font-semibold mb-2">Immigration Consultant</h4>
                <p className="text-gray-600 text-lg mb-4">
                  Provide expert advice to clients, helping them navigate the immigration
                  process with ease.
                </p>
                <a
                  href="#apply"
                  className="bg-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-secondary-dark transition duration-300"
                >
                  Apply Now
                </a>
              </div>

              {/* Job Posting Example */}
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <h4 className="text-2xl font-semibold mb-2">Visa Processing Specialist</h4>
                <p className="text-gray-600 text-lg mb-4">
                  Assist clients in completing their visa applications and ensure
                  all documentation is accurate and submitted on time.
                </p>
                <a
                  href="#apply"
                  className="bg-secondary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-secondary-dark transition duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
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

export default page;
