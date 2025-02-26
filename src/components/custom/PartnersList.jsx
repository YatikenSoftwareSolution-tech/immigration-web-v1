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
  const partners = [
    { image: Partner1, name: "Partner 1" },
    { image: Partner2, name: "Partner 2" },
    { image: Partner3, name: "Partner 3" },
    { image: Partner4, name: "Partner 4" },
    { image: Partner5, name: "Partner 5" },
    { image: Partner6, name: "Partner 6" },
    { image: Partner7, name: "Partner 7" },
  ];

  return (
    <section id="studentVisaPartners" className="py-8 sm:py-12 md:py-20 bg-[#1a2b4b] w-full relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2 text-secondary">
            <Globe className="mr-1.5 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base font-medium">Global Partners Network</span>
          </div>
        </div>

        {/* Swiper Container with additional wrapper for better centering */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl">
            <Swiper
              slidesPerView="auto"
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                360: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 3, spaceBetween: 15 },
                640: { slidesPerView: 4, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
                1280: { slidesPerView: 6, spaceBetween: 20 },
              }}
              modules={[Autoplay]}
              className="px-2"
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index} className="swiper-slide flex items-center justify-center">
                  <div className="w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 flex justify-center items-center bg-white rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={80}
                      height={80}
                      style={{ 
                        maxWidth: '70%', 
                        height: 'auto', 
                        objectFit: 'contain' 
                      }}
                      className="hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Newsletter with proper spacing */}
        <div className="mt-12 sm:mt-16 md:mt-24 w-full">
          <SubscribeToNewsletter />
        </div>
      </div>
      
      {/* Add this style for better Swiper slide centering */}
      <style jsx global>{`
        .swiper-slide {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>
    </section>
  );
};

export default PartnersList;