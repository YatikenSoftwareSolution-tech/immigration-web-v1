"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import styles from "../contacts/Contacts.module.css"
import emailjs from '@emailjs/browser';

function App() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .send(
        "service_zuuknl9",       
        "template_cs4uhfj",      
        formData,                
        "Ndv9C5G6QF6K7aPqG"        
      )
      .then(
        (response) => {
          alert("Email sent successfully, Our will reach out to you in 24 hours!");
        },
        (error) => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section - Responsive height */}
          <div 
            className="h-[250px] sm:h-[400px] bg-cover bg-center mt-10 relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="text-center text-white">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Contact Us</h1>
                <p className="text-base sm:text-lg">We're here to help with your immigration journey</p>
              </div>
            </div>
          </div>

          {/* Contact Form & Info - Stack on mobile */}
          <div className="max-w-7xl mx-auto px-4 py-6 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                Get in <span className="text-secondary">Touch</span>
              </h3>
              <p className="text-xl sm:text-3xl text-dark font-bold mb-4">The pleasure is all ours!</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="How can we help?" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    rows={4} 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full sm:w-auto bg-secondary hover:bg-red-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2">
                  Send <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                Contact <span className="text-secondary">Information</span>!
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1" style={{ color: "#363637" }} />
                  <div>
                    <h3 className="font-medium text-dark">Address</h3>
                    <p className="text-dark text-sm">9323- 35 Ave  <br />Edmonton, AB T6E 5R5<br />Canada</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1" style={{ color: "#363637" }} />
                  <div>
                    <h3 className="font-medium text-dark">Phone</h3>
                    <p className="text-dark text-sm">+1 7809-371-995</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1" style={{ color: "#363637" }} />
                  <div>
                    <h3 className="font-medium text-dark">Email</h3>
                    <p className="text-dark text-sm">info@immigrationservices.ca</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1" style={{ color: "#363637" }} />
                  <div>
                    <h3 className="font-medium text-dark">Business Hours</h3>
                    <p className="text-dark text-sm">Monday - Friday: 11:00 AM - 3:00 PM<br />Saturday: Closed<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="max-w-7xl mx-auto px-4 py-6 sm:py-12">
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                Frequently Asked <span className="text-secondary">Question</span>!
              </h3>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0">
                    <button className="w-full py-3 sm:py-4 flex justify-between items-center text-dark text-left" onClick={() => toggleFAQ(index)}>
                      <span className="font-medium text-base sm:text-lg">{faq.question}</span>
                      {openFAQ === index ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                    </button>
                    {openFAQ === index && <div className="pb-3 sm:pb-4 text-sm sm:text-base text-dark">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
