import React from "react";
import { FaPhone } from "react-icons/fa";
import ContactBanner from "../../assets/ContactBanner.jpg";
import Image from "next/image";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <>
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
                drop us a message using the form. We will get back to you as
                soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-secondary w-6 h-6 cursor-pointer" />
                  <p className="text-gray-500 font-bold text-sm">+1 234 567 890</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-secondary w-6 h-6 cursor-pointer" />
                  <p className="text-gray-500 font-bold text-sm">info@educationwebsite.com</p>
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
        <div className="h-40vh w-full bg-purple-400 mt-10">
          <img
            src="/images/contact.jpg.webp"
            alt=""
            className="h-full w-full"
          />
        </div>
        {/* Main Content */}
        <div className="flex-grow flex flex-col md:flex-row justify-center items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-12">
          {/* Enquiry Form (Horizontal Layout) */}
          <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-gray-300 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Full Name"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full border-gray-300 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email Address"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border-gray-300 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Mobile Number"
                  />
                </div>

                {/* Your City */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your City
                  </label>
                  <input
                    type="text"
                    className="w-full border-gray-300 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="City of Residence"
                  />
                </div>

                {/* Country Interested In */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Country Interested In
                  </label>
                  <select
                    className="w-full border-gray-300 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a Country
                    </option>
                    <option value="USA">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                {/* Visa Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Visa Type
                  </label>
                  <select
                    className="w-full border-gray-300 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Visa Type
                    </option>
                    <option value="student">Student Visa</option>
                    <option value="work">Work Visa</option>
                    <option value="tourist">Tourist Visa</option>
                    <option value="permanent-residency">
                      Permanent Residency
                    </option>
                  </select>
                </div>

                {/* Message Box */}
                <div className="col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border-gray-300 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium rounded-lg p-2 hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Contact Card (Blue Background) */}
        <div className="bg-blue-900 p-6 mt-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-white font-semibold">
              Feel Free to Reach Us
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-white">
              Contact <span className="text-indigo-400">Information</span>
            </h3>
            <p className="mt-4 text-gray-300">
              If you have any inquiries or need assistance, feel free to reach
              out to us. Our team is here to help you with any questions or
              concerns you may have.
            </p>

            {/* Phone Number Dropdown */}
            <div className="flex justify-center items-center space-x-2 mt-6">
              <FaPhone className="text-blue-600 text-xl" />
              <select
                className="border-gray-300 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a number
                </option>
                <option value="+1234567890">+1 234 567 890</option>
                <option value="+9876543210">+9 876 543 210</option>
                <option value="+1122334455">+1 122 334 455</option>
              </select>
              {/* extra cards */}
            </div>
          </div>
        </div>
        <div className="h-[40vh] w-full bg-white mt-10 ">
          <div
            id="card-shadow"
            className="h-20 flex items-center w-[20vw] border bg-white m-10 rounded-xl"
          >
            <img
              src="/images/Flag_of_India.svg.webp"
              alt=""
              className="h-12 mx-5 w-12 rounded-full"
            />
            <h2 className="text-black text-xl font-medium px-6">India</h2>
          </div>
        </div>
        <div className="h-[40vh] w-full bg-white  ">
          <div
            id="card-shadow"
            className="h-20 flex items-center w-[20vw] border bg-white m-10 rounded-xl"
          >
            <img
              src="/images/Flag_of_India.svg.webp"
              alt=""
              className="h-12 mx-5 w-12 rounded-full"
            />
            <h2 className="text-black text-xl font-medium px-6">India</h2>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-600">
            Contact <span className="text-blue-600 text-5xl">Us</span>
          </h1>
          <p className="text-gray-400 mt-4">
            We are here to help you with your educational journey. Reach out to
            us anytime!
          </p>
        </div>

        {/* Contact Info and Form Section */}
        <div className="w-full max-w-6xl flex gap-12 mx-auto">
          {/* Contact Info */}

          {/* Contact Form */}
          <div className="w-full h-auto md:w-3/5 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-6"></h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2"></label>
                <input
                  type="text"
                  className="w-full border-gray-200 border  p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-300"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2"></label>
                <input
                  type="text"
                  className="w-full border-gray-200 border  p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-300"
                  placeholder="Phone No*"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2"></label>
                <input
                  type="email"
                  className="w-full border-gray-200 border  p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-300"
                  placeholder="Your Email Address"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2"></label>
                <textarea
                  rows="4"
                  className="w-full border-gray-200 border  p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-orange-700 transition text-sm mx-auto flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4 text-white" /> {/* Icon */}
                <span>Send Message</span> {/* Text */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
