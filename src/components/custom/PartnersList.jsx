import React from "react";
import Partner1 from "../../assets/Partner1.png";
import Partner2 from "../../assets/Partner2.png";
import Partner3 from "../../assets/Partner3.png";
import Partner4 from "../../assets/Partner4.png";
import Partner5 from "../../assets/Partner5.png";
import Partner6 from "../../assets/Partner6.png";
import Partner7 from "../../assets/Partner7.png";
import Image from "next/image";
import SubscribeToNewsletter from "./SubscribeToNewsletter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Globe } from "lucide-react";

const PartnersList = () => {
  return (
    <section
      id="studentVisaPartners"
      className="py-20 h-[94vh] bg-[#1a2b4b] mx-auto relative w-full px-40"
    >
     
         {/* Header Section */}
          <div className="text-center">
           <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-secondary mb-8">
             <Globe className="mr-2 h-5 w-5" />
              <span className="font-medium">Global Partners Network</span>
           </div>
           
          </div>
            
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true} // Infinite loop
        autoplay={{
          delay: 2000, // 2000ms = 2 seconds
          disableOnInteraction: false, // Keeps autoplay even after interaction
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {[
          Partner1,
          Partner2,
          Partner3,
          Partner4,
          Partner5,
          Partner6,
          Partner7,
        ].map((partner, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-40 h-40 flex justify-center items-center bg-white rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300 mt-8">
              <Image
                src={partner}
                alt={`Partner ${index + 1}`}
                className="hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SubscribeToNewsletter />
    </section>
  );
};

export default PartnersList;
