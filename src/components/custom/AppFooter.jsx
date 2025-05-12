import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const AppFooter = () => {
  return (
    <footer className="relative bg-center md:bg-top bg-[url('/OfficePhoto2.jpg')] md:bg-[url('/OfficePhoto.jpg')] h-[1200px] md:h-auto min-h-[600px] lg:min-h-[800px] bg-cover bg-no-repeat flex flex-col justify-between items-center text-white">
      {/* dark overlay */}
      <div className="absolute inset-0 bg-dark opacity-75" />

      {/* main content */}
      <div className="relative top-[160px] md:top-[220px] container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4">
        {/* Column 1: Contact Us */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <FaEnvelope className="text-yellow-500 mr-3" />
              info@immigrationcompany.ca
            </li>
            <li className="flex items-center">
              <FaPhone className="text-yellow-500 mr-3" />
              +1 780 937 1995
            </li>
            <li className="flex items-center">
              <Link
                href="https://maps.app.goo.gl/jwPKUGCnEmo6Cc5f6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaMapMarkerAlt className="text-yellow-500 mr-3" />
                9323-35 Ave Edmonton, AB T6E 5R5 CANADA
              </Link>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="font-medium text-white mb-2">Business Hours</h4>
            <div className="grid grid-cols-[max-content,1fr] gap-x-6 gap-y-1 text-sm">
              <strong>Consulting:</strong>
              <p>Monday to Friday</p>
              <strong>Hours:</strong>
              <p>11:00 AM – 3:00 PM MDT</p>
              <strong>Saturday:</strong>
              <p>Closed</p>
              <strong>Sunday:</strong>
              <p>Closed</p>
            </div>
          </div>
        </div>

        {/* Column 2: Explore */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Explore Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-yellow-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services Offered */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Visit Visa Service",
              "Work Permit",
              "Study Permit",
              "Immigrate",
              "PR Card Renewal",
              "Citizenship",
              "LMIA (for employers)",
            ].map((service) => (
              <li key={service}>
                <Link href="/" className="hover:text-yellow-500">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Director Info */}
        <div className="flex flex-col items-center px-2">
          <div className="group relative overflow-hidden">
            <Image
              src="/Raj.jpg"
              alt="Rajendra Bhindar"
              width={240}
              height={240}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-full"
            />
          </div>
          <div className="text-center px-2">
            <p className="text-white font-bold">Rajender Singh Bhinder</p>
            <p className="text-white text-xs font-semibold my-1">
              RCIC | Director, <br /> The Immigration Company
            </p>
            <p className="text-white text-xs font-semibold mb-1">
              Over 15 years of trusted immigration advice and global
              recruitment experience.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white py-3 text-xs md:text-sm text-white w-full">
        <div className="container mx-auto flex flex-col gap-2 justify-between items-center space-y-2 md:space-y-0 px-4 sm:px-8">
          <p className="text-center md:text-left text-white">
            © {new Date().getFullYear()} Immigration Company is a licensed
            immigration consulting firm committed to providing honest and
            professional services to all our clients.
          </p>
          <div className="flex space-x-4 text-xl">
            <Link
              href="https://www.facebook.com/Immicomp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://x.com/Immicomp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raj-bhinder-4442b37a/?originalSubdomain=ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.instagram.com/theimmigrationcompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;