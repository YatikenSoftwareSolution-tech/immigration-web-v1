"use client";

import { Button } from "@/components/ui/button";
import VT1 from "../assets/VT1.svg";
import VT2 from "../assets/VT2.svg";
import VT3 from "../assets/VT3.svg";
import VT4 from "../assets/VT4.svg";
import VT5 from "../assets/VT5.svg";
import { useState } from "react";
import ConsultationForm from "@/components/custom/ConsultationForm";
import ProgramCard from "@/components/custom/ProgramCard";
import VisaTypeCard from "@/components/custom/VisaTypeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Users, ArrowRight, Award, BookCheck, Briefcase, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "./Home.module.css";
import HumanitarianForm from "@/components/custom/HumanitarianForm";
import Image from "next/image";

const ImmigrationPage = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const [isSpecialProgramOpen, setIsSpecialProgramOpen] = useState(false);
  const router = useRouter();

  const calculateCrs = () => {
    router.push(
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html#calculator"
    );
  };

  const visaTypes = [
    {
      icon: VT1,
      title: "Tourist Visa",
      description:
        "Visit new places to discover with a Tourist Visa. We deliver your documents ...",
    },
    {
      icon: VT2,
      title: "Commercial Visa",
      description:
        "Developing your trade, setting up new sales channels Your visa is ready...",
    },
    {
      icon: VT3,
      title: "Student Visa",
      description:
        "Embarking on a journey of higher education in a foreign country opens doors to...",
    },
    {
      icon: VT4,
      title: "Residence Visa",
      description:
        "Expert Guidance for a Seamless Immigration Journey Expert Guidance...",
    },
    {
      icon: VT5,
      title: "Work Visa",
      description:
        "Get your Visa now for new business and earning opportunities. We deliver your...",
    },
  ];

  const Programs = [
    {
      title: "Humanitarian and Compassionate Ground",
      description:
        "Designed for individuals facing severe hardships due to environmental, political, or health crises, this program offers urgent support and safe relocation options.",
      link: "/humanitarian-cause",
    },
    {
      title: "Children for Canadian Citizenship",
      description:
        "Focused on ensuring a bright future, this program supports the immigration of children eligible for Canadian citizenship, providing access to quality education and a nurturing environment.",
      link: "/children-citizenship",
    },
    {
      title: "Home care workers (caregivers)",
      description:
        "As a caregiver, you can come to Canada to become a permanent resident or work temporarily.",
      link: "/caregivers",
    },
  ];


  if (isConsultationFormOpen) {
    return (
      <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
      />
    );
  }

  if (isSpecialProgramOpen) {
    return (
      <HumanitarianForm
        isOpen={isSpecialProgramOpen}
        onClose={() => setIsSpecialProgramOpen(false)}
      />
    );
  }
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      <div className="w-full max-w-7xl mx-auto py-20 px-4 md:px-6 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 flex flex-col space-y-6 animate-fade-in">
            
            <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-gray-900 leading-[1.1]">
             <span className="text-tertiary"> Immigration <span className="text-secondary">Visa </span> </span>
              <span className="text-tertiary relative">
                Consulting
                {/* <div className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/20 rounded-full"></div> */}
              </span>
            </h1>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
              #1 Immigration Consultancy in Edmonton
            </div>
            <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-dark leading-relaxed max-w-xl">
              Your trusted partner for expert immigration services in Edmonton.
              We make your dreams of global mobility a reality.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => router.push("/about")}
                className="group bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                <span className="text-lg font-medium">Fill detailed form</span>
              </button>
              <button
                onClick={() => setIsConsultationFormOpen(true)}
                className="px-8 py-4 rounded-xl inline-flex items-center gap-2 border-2 border-gray-200 hover:border-secondary text-dark hover:text-secondary transition-colors duration-300"
              >
                <span className="text-lg font-medium">Fill quick form</span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative">
            <div className="aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden transform md:rotate-0 transition-transform hover:rotate-2 duration-500 group relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-black/60 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Our Edmonton Office</h3>
                <p className="text-white/90 mb-4">10019 103 Avenue Northwest<br/>Edmonton, AB T5J 0G9</p>
                <div className="flex gap-4">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                    <span className="text-sm">View on Maps →</span>
                  </a>
                  <a href="tel:+1234567890" className="text-white hover:text-secondary transition-colors">
                    <span className="text-sm">Call Us →</span>
                  </a>
                </div>
              </div>
              <Image
                src="/OfficePhoto.jpg"
                alt="Interior of our Edmonton immigration office"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 w-full relative">
            <div className="aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden transform md:-rotate-0 transition-transform hover:rotate-2 duration-500 group relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-black/60 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Raj Kumar</h3>
                <p className="text-white/90 mb-4">Senior Immigration Consultant<br/>RCIC License #R123456</p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                    <span className="text-sm">LinkedIn →</span>
                  </a>
                  <a href="mailto:raj@example.com" className="text-white hover:text-secondary transition-colors">
                    <span className="text-sm">Email Me →</span>
                  </a>
                </div>
              </div>
              <Image
                src="/Raj.jpg"
                alt="Our experienced consultant Raj"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
              Trusted Experience
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 leading-tight">
              <span className="text-tertiary">15 Years of </span>
              <span className="text-secondary">Excellence</span> in Immigration Services
            </h2>
            <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-dark leading-relaxed">
              At the forefront of immigration consulting in Edmonton, our team
              leverages a decade and a half of hands-on expertise to navigate
              complex visa pathways and deliver personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <button
                onClick={() => router.push("/about")}
                className="group bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg transition-all duration-300 hover:translate-y-[-2px] text-lg font-medium"
              >
                Learn More About Us
              </button>
              <button
                onClick={() => window.open("https://calendly.com", "_blank")}
                className="px-8 py-4 rounded-xl inline-flex items-center gap-2 border-2 border-gray-200 hover:border-secondary text-dark hover:text-secondary transition-colors duration-300 text-lg font-medium"
              >
                Schedule a Call
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
                <h4 className="text-2xl font-bold text-secondary mb-2">2000+</h4>
                <p className="text-dark">Successful Immigration Cases</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
                <h4 className="text-2xl font-bold text-secondary mb-2">98%</h4>
                <p className="text-dark">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="flex flex-col items-center gap-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Our Services
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 leading-tight">
              <span className="text-tertiary">Immigration </span>
              <span className="text-secondary">Services</span> We Offer
            </h2>
            <p className="text-dark text-lg max-w-2xl mx-auto">
              Comprehensive immigration solutions tailored to your unique needs. Each service is backed by our years of expertise and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Express Entry Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30 flex flex-col">
              <div className="bg-secondary/10 rounded-xl p-4 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Express Entry Program</h3>
              <p className="text-dark mt-2 flex-grow">Fast-track your immigration process through Canada's Express Entry system. Ideal for skilled workers and professionals.</p>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-2 text-dark">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Processing time: 6-8 months</span>
                </div>
                <div className="flex items-center gap-2 text-dark">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Success rate: 95%</span>
                </div>
                <button onClick={() => setIsConsultationFormOpen(true)} className="mt-4 w-full bg-secondary/10 hover:bg-secondary text-secondary hover:text-white py-3 rounded-xl font-medium transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Family Sponsorship Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30 flex flex-col">
              <div className="bg-secondary/10 rounded-xl p-4 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Family Sponsorship</h3>
              <p className="text-dark mt-2 flex-grow">Reunite with your loved ones in Canada. We help you navigate the family sponsorship process with care and expertise.</p>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-2 text-dark">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Spouse, Parents & Children</span>
                </div>
                <div className="flex items-center gap-2 text-dark">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full documentation support</span>
                </div>
                <button onClick={() => setIsConsultationFormOpen(true)} className="mt-4 w-full bg-secondary/10 hover:bg-secondary text-secondary hover:text-white py-3 rounded-xl font-medium transition-colors duration-300">
                  Start Process
                </button>
              </div>
            </div>

            {/* Student Visa Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30 flex flex-col">
              <div className="bg-secondary/10 rounded-xl p-4 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Student Visa</h3>
              <p className="text-dark mt-2 flex-grow">Pursue your educational dreams in Canada. We assist with study permits, school applications, and post-graduation work permits.</p>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-2 text-dark">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>School admission support</span>
                </div>
                <div className="flex items-center gap-2 text-dark">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SDS & Regular stream</span>
                </div>
                <button onClick={() => setIsConsultationFormOpen(true)} className="mt-4 w-full bg-secondary/10 hover:bg-secondary text-secondary hover:text-white py-3 rounded-xl font-medium transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <button onClick={() => router.push("/services")} className="group bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-xl inline-flex items-center gap-3 transition-all duration-300 text-lg font-medium">
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </section>

        {/* Contact Section */}
        <section className="flex flex-col items-center gap-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Get in Touch
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 leading-tight">
              <span className="text-tertiary">Contact </span>
              <span className="text-secondary">Us</span> Today
            </h2>
            <p className="text-dark text-lg max-w-2xl mx-auto">
              We're here to help with your immigration journey. Reach out to us for expert guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-200"
                    rows="4"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 rounded-xl p-3">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                    <p className="text-gray-600">9323- 35 Ave<br />Edmonton, AB T6E 5R5<br />Canada</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 rounded-xl p-3">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+11 7809-371-995</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 rounded-xl p-3">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">info@immigrationservices.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 rounded-xl p-3">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-secondary/10 to-transparent rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Quick Response Promise</h4>
                <p className="text-gray-600">We aim to respond to all inquiries within 24 hours during business days. Your immigration journey is our priority.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImmigrationPage;
