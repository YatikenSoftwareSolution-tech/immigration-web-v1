import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import AboutUsBanner1 from "../../assets/AboutUsBanner1.jpg";
import StatsCard from "@/components/ui/statsCard";
import PeopleCard from "@/components/ui/peopleCard";
import Partner1 from "../../assets/Partner1.png";
import Partner2 from "../../assets/Partner2.png";
import Partner3 from "../../assets/Partner3.png";
import Partner4 from "../../assets/Partner4.png";
import Partner5 from "../../assets/Partner5.png";
import Partner6 from "../../assets/Partner6.png";
import Partner7 from "../../assets/Partner7.png";
import SubscribeToNewsletter from "@/components/custom/SubscribeToNewsletter";

const page = () => {
  return (
    <div>
      <section
        id="immigration"
        className="bg-gradient-to-r from-red-50 to-blue-100 py-24 px-10 mx-auto relative w-full flex flex-col justify-center"
      >
        <div className="flex flex-col w-full gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
            <h1 className="w-full md:w-1/2 text-4xl md:text-5xl font-bold leading-snug text-center">
              Committed to your visa
              <p className="text-secondary">Successes</p>
            </h1>
            <h2 className="w-full md:w-1/2 text-gray font-medium text-lg md:text-xl leading-relaxed">
              We deliver budget-friendly visa solutions, removing financial
              barriers from your journey. Our goal is to provide quality
              services at reasonable rates.
            </h2>
          </div>

          <div className="flex justify-center item-center">
            <Image
              src={AboutUsBanner1}
              alt="Banner"
              height={500}
              className="landing-banner"
            />
          </div>
          <div className="flex gap-10 justify-center item-center">
            <StatsCard />
            <StatsCard />
            <StatsCard />
          </div>
        </div>
      </section>
      <section
        id="immigration"
        className=" py-20 px-10 mx-auto relative w-full flex flex-col justify-between items-center"
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-8 gap-6">
            <h1 className="w-full md:w-1/2 text-4xl md:text-5xl font-bold leading-snug text-center">
            Our trusted immigration
              <p><span className="text-secondary">Support </span>
              team</p>
            </h1>
            <h2 className="w-full md:w-1/2 text-gray font-medium text-lg md:text-xl leading-relaxed">
                At the heart of our commitment to providing exceptional
                immigration solutions stands
            </h2>
          </div>
          <div className="flex justify-between item-center ">
            {[1, 2, 3, 4, 5, 6].map((people) => {
              return <PeopleCard key={people} />;
            })}
          </div>
        </div>
      </section>
      <section
        id="immigrationPartners"
        className="py-20 bg-secondary mx-auto relative w-full"
      >
        <div className="flex flex-col items-center justify-around text-center">
          <div className="text-lg font-semibold text-white mb-8">
            We love to work with our preferred partners
          </div>
          <div className="flex flex-wrap items-center lg:gap-14 md:gap-14">
            {[
              Partner1,
              Partner2,
              Partner3,
              Partner4,
              Partner5,
              Partner6,
              Partner7,
            ].map((partner, index) => (
              <div key={index}>
                <Image
                  src={partner}
                  alt={`Partner${index + 1}`}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <SubscribeToNewsletter />
    </div>
  );
};

export default page;
