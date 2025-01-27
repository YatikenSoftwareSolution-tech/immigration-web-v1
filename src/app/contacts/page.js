"use client"
import React from "react";
import { FaPhone } from "react-icons/fa";
import ContactBanner from "../../assets/ContactBanner.jpg";
import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import ContactForm from "@/components/custom/ContactForm";
import ChatBot from "@/components/custom/ChatBot";
import PartnersList from "@/components/custom/PartnersList";

const ContactPage = () => {
  return (
    <div className="">
      <section
        id="about-landing"
        className="w-full flex flex-col justify-center py-12 px-20"
      >
        <div className="flex justify-between item-center">
          <Image src={ContactBanner} alt="Contact us Banner" height={400} />
          <div className=" bg-white mt-24">
            <h2 className="text-3xl font-semibold text-orange-600 mb-6">
              <span className="text-secondary">Feel free to contact!</span>
            </h2>
            <p className="text-gray-500 mb-6">
              Feel free to reach out to us using the contact details below, or
              drop us a message using the form. We will get back to you as soon
              as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-secondary w-6 h-6 cursor-pointer" />
                <p className="text-gray-500 font-bold text-sm">
                  +1 234 567 890
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-secondary w-6 h-6 cursor-pointer" />
                <p className="text-gray-500 font-bold text-sm">
                  info@educationwebsite.com
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-secondary w-6 h-6 cursor-pointer" />
                <p className="text-gray-500 font-bold text-sm">
                  123 Learning Lane, Knowledge City
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-50 to-red-50 w-full pt-20  flex justify-center bg-gray-50">
        <ContactForm/>
      </section>
      <PartnersList />
      <ChatBot/>
    </div>
  );
};

export default ContactPage;
