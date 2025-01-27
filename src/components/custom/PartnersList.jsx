import React from 'react'
import Partner1 from "../../assets/Partner1.png";
import Partner2 from "../../assets/Partner2.png";
import Partner3 from "../../assets/Partner3.png";
import Partner4 from "../../assets/Partner4.png";
import Partner5 from "../../assets/Partner5.png";
import Partner6 from "../../assets/Partner6.png";
import Partner7 from "../../assets/Partner7.png";
import Image from 'next/image';
import SubscribeToNewsletter from './SubscribeToNewsletter';

const PartnersList = () => {
  return (
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
  )
}

export default PartnersList
