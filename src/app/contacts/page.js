// "use client"
// import React from "react";
// import { FaPhone } from "react-icons/fa";
// import ContactBanner from "../../assets/ContactBanner.jpg";
// import Image from "next/image";
// import { Phone, Mail, MapPin, Send } from "lucide-react";
// import ContactForm from "@/components/custom/ContactForm";
// import ChatBot from "@/components/custom/ChatBot";
// import PartnersList from "@/components/custom/PartnersList";

// const ContactPage = () => {
//   return (
//     <div className="">
//       <section
//         id="about-landing"
//         className="w-full flex flex-col justify-center py-12 px-20"
//       >
//         <div className="flex justify-between item-center">
//           <Image src={ContactBanner} alt="Contact us Banner" height={400} />
//           <div className=" bg-white mt-24">
//             <h2 className="text-3xl font-semibold text-orange-600 mb-6">
//               <span className="text-secondary">Feel free to contact!</span>
//             </h2>
//             <p className="text-gray-500 mb-6">
//               Feel free to reach out to us using the contact details below, or
//               drop us a message using the form. We will get back to you as soon
//               as possible.
//             </p>
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Phone className="text-secondary w-6 h-6 cursor-pointer" />
//                 <p className="text-gray-500 font-bold text-sm">
//                 <a href="tel:+1234567890" className="hover:text-secondary">
//                   +1 234 567 890
//                   </a>
//                 </p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Mail className="text-secondary w-6 h-6 cursor-pointer" />
//                 <p className="text-gray-500 font-bold text-sm">
//                   info@immigrationcompany.ca
//                 </p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <MapPin className="text-secondary w-6 h-6 cursor-pointer" />
//                 <p className="text-gray-500 font-bold text-sm">
//                   123 xyz, Edmonton Canada.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bg-gradient-to-r from-blue-50 to-red-50 w-full pt-20  flex justify-center bg-gray-50">
//         <ContactForm/>
//       </section>
//       {/* <PartnersList /> */}
//       <ChatBot/>
//     </div>
//   );
// };

// export default ContactPage;

"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import ChatBot from "@/components/custom/ChatBot";
import { Button } from "@/components/ui/button";
function App() {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqs = [
    {
      question: "How long does the immigration process typically take?",
      answer: "The processing time varies depending on the type of visa or immigration service. Generally, it can take anywhere from 3 months to 2 years. We recommend starting the process as early as possible and consulting with our immigration experts for specific timelines."
    },
    {
      question: "What documents do I need for my application?",
      answer: "Required documents typically include valid passport, birth certificate, marriage certificate (if applicable), police clearance, medical examination results, proof of funds, and educational credentials. The exact requirements depend on your specific case and type of application."
    },
    {
      question: "Do I need a job offer to immigrate?",
      answer: "Not always. While having a job offer can help in certain immigration programs, there are many pathways that don't require one. These include family sponsorship, study permits, refugee claims, and some skilled worker programs."
    },
    {
      question: "Can I bring my family with me?",
      answer: "Yes, in most cases you can include your spouse/partner and dependent children in your application. Additional documentation will be required for family members, and we can guide you through the process."
    },
    {
      question: "What are the language requirements?",
      answer: "Language requirements vary by program. Most immigration streams require proof of language proficiency in English and/or French through standardized tests like IELTS or CELPIP. We can help you understand the specific requirements for your case."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">We're here to help with your immigration journey</p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-gray-600 mb-4">
          Get in <span className="text-secondary">touch</span>, ask a <span className="text-secondary">question</span>
        </h3>
        <p className="text-3xl font-bold mb-4">The pleasure is all ours!</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={4} placeholder="Your message here..."></textarea>
            </div>
            <Button type="submit" className="bg-secondary hover:bg-red-500 text-white px-10 py-6 rounded-lg flex items-center gap-2">
            Send <ArrowRight />
          </Button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-gray-600 mb-4">
          Contact <span className="text-secondary">Information</span>!
        </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">123 Immigration Street<br />Suite 456<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@immigrationservices.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold text-gray-600 mb-4">
          Frequently Asked  <span className="text-secondary">Question</span>!
        </h3>
        
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button className="w-full py-4 flex justify-between items-center text-left" onClick={() => toggleFAQ(index)}>
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openFAQ === index ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                {openFAQ === index && <div className="pb-4 text-gray-600">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
          <ChatBot/>

    </div>
  );
}

export default App;
