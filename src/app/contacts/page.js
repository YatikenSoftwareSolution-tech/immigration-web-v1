import React from "react";
import { FaPhone } from "react-icons/fa";
 
const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-40vh w-full bg-purple-400 mt-10">
        <img src="/images/contact.jpg.webp" alt="" className="h-full w-full" />
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
            If you have any inquiries or need assistance, feel free to reach out
            to us. Our team is here to help you with any questions or concerns
            you may have.
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
  );
};
 
export default ContactPage;