import StripOutButton from "@/components/ui/StripOutButton";
import Image from "next/image";
import LandingPageBanner1 from "../assets/LandingPageBanner1.jpg";
import LandingPageBanner2 from "../assets/LandingPageBanner2.jpg";
import { Button } from "@/components/ui/button";
import Partner1 from "../assets/Partner1.png";
import Partner2 from "../assets/Partner2.png";
import Partner3 from "../assets/Partner3.png";
import Partner4 from "../assets/Partner4.png";
import Partner5 from "../assets/Partner5.png";
import Partner6 from "../assets/Partner6.png";
import Partner7 from "../assets/Partner7.png";
import SubscribeIcon from '../assets/SubscribeIcon.png';

const ImmigrationPage = () => {
  return (
    <div>
      <section
        id="home"
        className="py-20 mx-auto relative w-full h-[90vh] flex flex-col justify-between items-center"
      >
        <div className="relative w-full max-w-[1200px] h-[500px] sm:h-[400px] md:h-[500px]">
          <Image
            src={LandingPageBanner1}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-[25%] transform -translate-x-1/2 flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <Button className="w-[150px] md:w-[180px] text-white bg-secondary p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-secondary/90">
              Book Consultation
            </Button>
            <Button className="w-[150px] md:w-[180px] bg-dark p-4 md:p-7 rounded-lg text-md md:text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-dark/90">
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section
  id="home"
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
        <div
          key={index}
         
        >
          <Image
            src={partner}
            alt={`Partner${index + 1}`}
             className="shadow hover:scale-110 transition-transform duration-200"
          />
        </div>
      ))}
    </div>
  </div>
</section>

<section 
  className="py-20 mx-auto relative w-full h-[90vh] flex flex-col justify-between items-center bg-gray-100"
>
  <div className="w-full mx-auto max-w-7xl flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-10">
    
    {/* Text Section */}
    <div className="text-center lg:text-left flex-1">
      <h2 className="text-3xl font-bold mb-6 ">
        Visa Types and Eligibility Assessment
      </h2>
      <div className="flex flex-wrap justify-center lg:justify-start gap-6">
        {/* Example Cards */}
        {[1, 2, 3, 4, 5].map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[260px] text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Visa Type {card}</h3>
            <p className="text-gray-600">Eligibility details for visa type {card}.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-1">
      <Image
        src={LandingPageBanner2}
        alt="Banner"
        width={400}
        className="transition-transform transform hover:scale-105 rounded-lg shadow-md"
      />
    </div>

  </div>
</section>


      <section className="py-20 bg-secondary mx-auto relative w-full ">
      <div className="container mx-auto px-10">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
                <Image
                  src={SubscribeIcon}
                  alt="Subscribe"
                  width={80}
                  height={80}
                />
                <h2 className="text-3xl font-bold mt-4">
                  Subscribe to Edural Newsletter
                </h2>
              </div>
              <div className="w-full lg:w-2/3">
              <form className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#222868] transition"
                />
                <button type="submit" className="bg-[#ff7800] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e66e00] transition-all">
                  Get Started Now
                </button>
              </form>
              </div>
            </div>
          </div>
      </section>
      <section  className="py-20 mx-auto relative w-full h-[90vh] flex flex-col justify-between items-center">

      </section>
      <section  className="py-20 mx-auto relative w-full h-[90vh] flex flex-col justify-between items-center">

      </section >
      <section  className="py-20 mx-auto relative w-full h-[90vh] flex flex-col justify-between items-center">

      </section>
      <StripOutButton />
    </div>
  );
};

export default ImmigrationPage;
