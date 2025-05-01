"use client";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Services } from "./constants/home";

const ImmigrationPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
      alert("Message sent successfully! We will get back to you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
      <div className="flex flex-col gap-16 w-full mx-auto py-16 px-5 md:px-24 ">
        {/* Hero Section */}
        <section className="flex flex-col md:h-[80vh] md:flex-row items-center gap-14  ">
          <div className="md:w-1/2 flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-gray-900 leading-[1.1]">
              <span className="text-tertiary">
                {" "}
                Immigration <span className="text-secondary">Visa </span>{" "}
              </span>
              <span className="text-tertiary relative">
                Consulting
                {/* <div className="absolute -bottom-2 left-0 w-full h-2 bg-secondary/20 rounded-full"></div> */}
              </span>
            </h1>
            <div className="md:w-[70%] inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
            # Righteous Immigration Advices Since 2010
            </div>
            <p className="text-[clamp(1rem,2vw,1.1rem)] text-dark leading-relaxed max-w-xl">
              Since 2010, Immigration Company has been dedicated to providing
              ethical and personalized immigration consulting services. <br />{" "}
              Whether you're looking to visit, study, work, or settle
              permanently in Canada, our experienced team is here to guide you
              every step of the way.
              <br /> We understand that each client's journey is unique, and
              we're committed to offering solutions tailored to your individual
              needs.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Link href="/consultation-form">
                <button className="group bg-secondary hover:bg-secondary-dark text-white px-6 py-4 rounded-xl inline-flex items-center gap-3 shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                  <span className="text-lg font-medium">
                    Fill Consultation Form
                  </span>
                </button>
              </Link>
              <Link href="/about">
                <button className="px-6 py-4 rounded-xl inline-flex items-center gap-2 border-2 border-gray-200 hover:border-secondary text-dark hover:text-secondary transition-colors duration-300">
                  <span className="text-lg font-medium">Know More</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full relative">
            <div className="aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden transform md:rotate-0 transition-transform group relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-black/60 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Our Edmonton Office
                </h3>
                <p className="text-white/90 mb-4">
                  10019 103 Avenue Northwest
                  <br />
                  Edmonton, AB T5J 0G9
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://maps.app.goo.gl/QDFCSxSjgNebK7mG7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <span className="text-sm">View on Maps →</span>
                  </a>
                  <a
                    href="tel:+17809371995"
                    className="text-white hover:text-secondary transition-colors"
                  >
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
        <section className="flex flex-col-reverse md:h-[80vh] md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 w-full relative">
            <div className="aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden transform  group relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-black/60 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Rajender Bhinder
                </h3>
                <p className="text-white/90 mb-4">
                  President & Regulated Canadian Immigration Consultant (RCIC){" "}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/rajender-bhinder-99011846/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <span className="text-sm">LinkedIn →</span>
                  </a>
                  <a
                    href="mailto:Raj@ImmigrationCompany.ca"
                    className="text-white hover:text-secondary transition-colors"
                  >
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
          <div className="md:w-1/2 flex flex-col">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-dark leading-tight md:mb-4">
              <span className="text-tertiary"> </span>15 Years of
              <span className="text-tertiary"> Excellence</span> in Immigration
              Services
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
            # Trusted Canadian Immigration Consultants Since 2010
              
            </div>
            <p className="text-[clamp(1.1rem,2.5vw,1rem)] text-dark leading-relaxed">
              Based in Edmonton, Alberta, Rajender Bhinder brings over 15 years
              of hands-on immigration experience. A certified and passionate
              Canadian immigration expert, Rajender is committed to ethical
              practices, in-depth legal knowledge, and providing personalized
              immigration solutions for clients worldwide.
              <br /> His mission is to make Canadian immigration clear,
              achievable, and accessible for everyone.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-100">
                <h4 className="text-2xl font-bold text-secondary mb-2">
                  2000+
                </h4>
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
        <section className="flex flex-col  md:h-min-[80vh] items-center gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight">
              Our
              <span className="text-tertiary"> Canadian </span>
              Immigration Services
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Whatever be your journey, make us a part of it.
            </div>
            <p className="text-dark text-lg max-w-2xl mx-auto">
              Comprehensive immigration solutions tailored to your unique needs.
              Each service is backed by our years of expertise and commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {Services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30 flex flex-col"
              >
                <div className="bg-secondary/10 rounded-xl p-4 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mt-4">
                  {service.title}
                </h3>
                <p className="text-dark mt-2 flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-dark">
                      <svg
                        className="w-5 h-5 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{point}</span>
                    </div>
                  ))}
                  
                </div>
                <div className="flex justify-between mt-6">
                  <Link href={service.redirect} className="w-[48%]">
                  
                <button
                    className="mt-4 w-full bg-secondary/10 hover:bg-secondary text-secondary hover:text-white py-3 rounded-xl font-medium transition-colors duration-300"
                  >
                    Apply Now
                  </button>
                  </Link>
                  <Link href={service.link} className="w-[48%]">
                  <button
                    className="mt-4 w-full bg-dark/10 hover:bg-dark/90 text-dark hover:text-white py-3 rounded-xl font-medium transition-colors duration-300"
                  >
                    Know More
                  </button>
                  </Link>
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex flex-col md:h-min-[80vh] text-dark items-center gap-8">
          <div className="text-center space-y-4">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark leading-tight">
              <span className="text-dark">Contact </span>
              <span className="text-tertiary">Us</span> Today
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              Get in Touch
            </div>
            <p className="text-dark text-lg max-w-2xl mx-auto">
              We're here to help with your immigration journey. Reach out to us
              for expert guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-200"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors duration-200"
                    rows="4"
                    placeholder="How can we help you?"
                    required
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
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 rounded-xl p-3">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Visit Us
                    </h4>
                    <p className="text-gray-600">
                      9323- 35 Ave
                      <br />
                      Edmonton, AB T6E 5R5
                      <br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 rounded-xl p-3">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Call Us
                    </h4>
                    <p className="text-gray-600">+1 780 937 1995</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 rounded-xl p-3">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Email Us
                    </h4>
                    <p className="text-gray-600">
                      info@immigrationcompany.ca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-secondary/10 rounded-xl p-3">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Friday: 11:00 AM - 3:00 PM
                      <br />
                      Saturday: Closed
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImmigrationPage;
