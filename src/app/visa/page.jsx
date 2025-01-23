import React from 'react';
import './page.css';
import usercheck from "../../assets/usercheck.svg";
import Image from 'next/image';
import send from "../../assets/send.svg";
import thumbsup from "../../assets/thumbsup.svg";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import LandingPageBanner1 from "../../assets/LandingPageBanner1.jpg";
import LandingPageBanner2 from "../../assets/LandingPageBanner2.jpg";
import VisaVision from "../../assets/VisaVision.svg";
import arrowup from "../../assets/arrowup.svg";
import arrowright from "../../assets/arrowright.svg";
import LogoClient1 from "../../assets/LogoClient1.svg";
import LogoClient2 from "../../assets/LogoClient2.svg";
import LogoClient3 from "../../assets/LogoClient3.svg";
import LogoClient4 from "../../assets/LogoClient4.svg";
import LogoClient5 from "../../assets/LogoClient5.svg";
import VisaCardGrid from './VisaCardGrid';
import { progress } from "../../components/ui/progress";
import whyus from "../../assets/whyus.svg";
import { Button } from "../../components/ui/button";
import Replacethis from "../../assets/Replacethis.svg";
import VideoBox from "../../assets/VideoBox.svg";
import Testimonials from './Testimonials';
const services = [
  {
    image: usercheck,
    title: 'User Check',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quas.',
  },
  {
    image: send,
    title: 'Send Documents',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quas.',
  },
  {
    image: thumbsup,
    title: 'Get Approved',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quas.',
  },
];

const logos = [
  {
    image: LogoClient1,
    title: 'Client 1',
   
  },
  {
    image: LogoClient2,
    title: 'Client 2',
    
  },
  {
    image: LogoClient3,
    title: 'Client 3',
  
  },
  {
    image: LogoClient4,
    title: 'Client 4',
  
  },
  {
    image: LogoClient5,
    title: 'Client 5',
    
  },
];
const gallerycards = [
    {
     
      image: Replacethis,
    title: 'Student Visa',
    },
    {

      image:  Replacethis,

 
      title: 'Student Visa',
    },
    {

 
      image:  Replacethis,

      title: 'Student Visa',
    },

]

const Page = () => {
  return (
    <div>
      <section id="Visa-Landing" className="background-container">
        <div className="content">
          <h1>Navigating your Path Abroad</h1>
          <p>With Trusted Visa Enterprise!</p>
        </div>
      </section>

      <section id="Services">
        <div className="flex justify-center">
          {services.map((service, index) => (
            <Card key={index} className="custom-card flex flex-col">
              <CardHeader>
                <div className="flex justify-center items-center">
                  <Image src={service.image} alt={service.title} width={40} height={40} className="mb-4" />
                </div>
                <div className="flex justify-center items-center">
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-full">
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about-us" className="pt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-6 pl-8 text-content">
            <span className="text-red-500 uppercase font-bold">ABOUT US</span>
            <h1 className="text-5xl font-bold text-black mt-5 mb-20">
              Unveiling the Vision and Values
            </h1>
            <p className="font-['Inter'] text-base leading-[1.6] font-normal">
              At nullam leo consectetur euismod enim. Orci donec sapien et semper
              fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
            </p>
            <div className="space-y-8 mt-8">
              <div>
                <h2 className="text-2xl font-semibold flex items-center">
                  <span className="our-vision mr-2">
                    <Image src={arrowup} alt="arrowup" width={24} height={24} />
                  </span>
                  <span className="text-[#0096FF]">Our Vision</span>
                </h2>
                <p className="mt-2 font-['Inter'] text-base leading-[1.6] font-normal">
                  At nullam leo consectetur euismod enim. Orci donec sapien et semper
                  fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
                </p>
              </div>
              <div className="our-value">
                <h2 className="text-2xl font-semibold flex items-center">
                  <span className="our-values mr-2">
                    <Image src={arrowright} alt="arrowright" width={24} height={24} />
                  </span>
                  <span className="text-[#040610]">Our Values</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-6 h-full flex justify-end image-container">
            <Image src={VisaVision} alt="About Us" width={721} height={480} className="h-auto object-contain" priority />
          </div>
        </div>
      </section>

      <section id="logos">
        <div className="flex justify-center">
          {logos.map((logo, index) => (
            <Card key={index} className="clients-logo flex flex-col">
              <CardHeader>
                <div className="flex justify-center items-center">
                  <Image src={logo.image} alt={logo.title} height="62"  />
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-full">
                <CardDescription className="text-center">{logo.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="our-service">
        <div className="services">
<div className="service-text">
  <p>OUR SERVICE</p>
  </div>
  <div className="service-heading">
  <h1>Our Comprehensive Visa and</h1>
    
    <h1>Immigration Solutions</h1>
    <div className="service-content">
    <p>Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem.</p>
      <p>Ultrices adipiscing dictumst purus convallis.</p>
      </div>
</div>
</div>

<VisaCardGrid />

</section>

<section id="why-us">
  <div className="container">
    <div className="left">
      <Image src={whyus} alt="Image Description" height={437} width={500} />
    </div>
    <div className="right">
      <div className="why-us-heading">
        <p>Why Choose Us</p>
      </div>
      <div className="large-heading">
        <h1>Benefits of Our Expertise</h1>
      </div>
      <div className="whyuscontent">
        <p>
          At nullam leo consectetur euismod enim. Orci donec sapien et semper fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh. Amet duis orci nibh nullam. Phasellus suspendisse ornare arcu eu orci urna justo.
        </p>
      </div>

      <div className="whyusstats">
        <h6>Personalized Service</h6>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '548.8px' }}></div>
        </div>

        <h6>Customer Satisfaction</h6>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: '504.9px' }}></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="ourgallery">
<div className="gallery-page flex flex-row justify-between items-center"> 
  {/* Left text container */}
  <div className="gallery-text-container flex-1"> 
    <div className="gallery-text">
      <p>OUR GALLERY</p>
    </div>
    <div className="gallery-heading">
      <h1>Photo Gallery</h1>
      <div className="service-content">
        <p>At nullam leo consectetur euismod enim. Orci donec sapien et semper</p>
        <p>fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.</p>
      </div>
    </div>
  </div>
  {/* Right button */}
  <div className="gallery-button flex justify-center items-center"> 
    <Button className="w-[150px] md:w-[180px] text-white bg-secondary px-6 py-4 md:px-8 md:py-6 rounded-lg text-md md:text-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:bg-secondary/90 hover:shadow-xl">
      See All Gallery
    </Button>
  </div>
</div>
<div className="gallerycards justify-center items-center"> 
  {gallerycards.map((galphoto, index) => (
    <Card
      key={index}
      className="clients-logo items-center justify-center mx-4" // Add spacing between cards
    >
      <CardHeader>
        <div className="justify-center items-center">
          <Image src={galphoto.image} alt={galphoto.title} height={364} width={364} />
        </div>
      </CardHeader>
      
    </Card>
  ))}
</div>


</section>
<section id="Testimonials">
  <div className="testimonial-page">
    <div className="testimonial-heading">
      <h1>What Our Clients Say</h1> 
    </div>
    <Image src={VideoBox} alt="Testimonials"  className="mb-4" />
  </div>
<Testimonials />
</section>


<section id="Visa-Landing" className="background-container-last">
        <div className="content">
          <div className="visa-last-text">
          <p>UNLOCK YOUR IMMIGRATION POTENTIAL</p>
          </div>
          <div className="visa-heading">
          <h1>
      Take the First Step Towards Your<br />
      Immigration Goals
    </h1>
    <div className="visa-last-content ">
      <p>Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem. Ultrices<br />
        
        adipiscing dictumst purus convallis convallis imperdiet</p></div>
            <Button className="w-[150px] md:w-[180px] text-white bg-secondary px-6 py-4 md:px-8 md:py-6 rounded-lg text-md md:text-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:bg-secondary/90 hover:shadow-xl">
      Get Started Now
    </Button>
          </div>
        </div>
      </section>
</div>

  
  );
};

export default Page;