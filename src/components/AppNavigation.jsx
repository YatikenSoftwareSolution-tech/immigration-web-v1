"use client"

import Link from 'next/link';
import { useState } from 'react';

const AppNavigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ul className="flex items-center space-x-8">
          {/* Services Dropdown */}
          <li 
            className="relative" 
            onMouseEnter={() => setIsServicesOpen(true)} 
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className="text-white cursor-pointer hover:text-gray-200">Services</span>
            {isServicesOpen && (
              <ul className="absolute bg-white shadow-lg mt-2 py-2 rounded-lg w-48">
                <li>
                  <Link href="/services/service-1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 1</Link>
                </li>
                <li>
                  <Link href="/services/service-2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 2</Link>
                </li>
                <li>
                  <Link href="/services/service-3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 3</Link>
                </li>
                <li>
                  <Link href="/services/service-4" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 4</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other Navigation Links */}
          <li>
            <Link href="/about-us" className="text-white hover:text-gray-200">About Us</Link>
          </li>
          <li>
            <Link href="/student-visa" className="text-white hover:text-gray-200">Student Visa</Link>
          </li>
          <li>
            <Link href="/travel-tourism" className="text-white hover:text-gray-200">Travel/Tourism</Link>
          </li>
          <li>
            <Link href="/visa" className="text-white hover:text-gray-200">Visa</Link>
          </li>
          <li>
            <Link href="/blogs" className="text-white hover:text-gray-200">Blogs</Link>
          </li>
          <li>
            <Link href="/countries" className="text-white hover:text-gray-200">Countries</Link>
          </li>
          <li>
            <Link href="/faq" className="text-white hover:text-gray-200">FAQ</Link>
          </li>

          {/* Book Consultation Button */}
          <li>
            <Link 
              href="/book-consultation" 
              className="text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-6 rounded-full text-lg shadow-md transition duration-200"
            >
              Book Consultation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavigation;
