"use client";
 
import Link from "next/link";
import { useState } from "react";
 
const AppNavigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
 
  return (
    <nav className="flex justify-between item-centre bg-white text-black p-4 fixed top-0 left-0 w-full bg-blue-600 shadow-lg z-10">
      <div className="flex justify-between item-centre max-w-7xl py-3 w-full">
        <ul className="flex items-center space-x-8 ml-80">
          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className=" relative text-base hover:text-yellow-500 transition duration-300  ">
              Services
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[orangered] transition-all duration-300 group-hover:w-full"></span>
            {isServicesOpen && (
              <ul className="absolute bg-white shadow-lg mt-2 py-2 rounded-lg w-48">
                <li className="text-base">
                  <Link
                    href="/services/service-1"
                    className=" block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Service 1
                  </Link>
                </li>
                <li className="text-base">
                  <Link
                    href="/services/service-2"
                    className="block px-4 py-2 text-black hover:bg-black"
                  >
                    Service 2
                  </Link>
                </li>
                <li className="text-base">
                  <Link
                    href="/services/service-3"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Service 3
                  </Link>
                </li>
                <li className="text-base">
                  <Link
                    href="/services/service-4"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Service 4
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Other Navigation Links */}
          <li className="text-base">
            <Link
              href="/about-us"
              className="hover:text-yellow-500 transition duration-300 "
            >
              About Us
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/student-visa"
              className="hover:text-yellow-500 transition duration-300 "
            >
              Student Visa
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/travel-tourism"
              className="hover:text-yellow-500 transition duration-300 "
            >
              Travel/Tourism
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/visa"
              className="hover:text-yellow-500 transition duration-300 "
            >
              Visa
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/blogs"
              className="hover:text-yellow-500 transition duration-300 "
            >
              Blogs
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/countries"
              className="hover:text-yellow-500 transition duration-300 "
            >
              Countries
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/contacts"
              className="hover:text-yellow-500 transition duration-300 "
            >
              Contacts
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/faq"
              className="hover:text-yellow-500 transition duration-300 "
            >
              FAQ
            </Link>
          </li>
 
          {/* Book Consultation Button */}
          
        </ul>
        <div className="absolute right-10">
            <Link
              href="/consultation"
              className="text-white bg-[#D80621] py-2 px-6 rounded-lg text-lg shadow-md transition duration-200"
            >
              Book Consultation
            </Link>
          </div>
      </div>
    </nav>
  );
};
 
export default AppNavigation;