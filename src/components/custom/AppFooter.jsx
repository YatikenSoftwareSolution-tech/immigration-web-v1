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
    <div className="relative h-[880px] py-8 bg-[url('/OfficePhoto.jpg')] bg-cover flex flex-col items-center gap-16 text-white">
      {/* dark overlay */}
      <div className="absolute mt-[calc(19%+18px)] inset-0 h-2/3  bg-black opacity-65" />

      {/* content */}
      <div className="relative mt-[18%] container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Contact Us */}
        <div className="text-left text-white">
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
                href={"https://maps.app.goo.gl/jwPKUGCnEmo6Cc5f6"}
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="text-yellow-500 mr-3" />
                9323‑35 Ave Edmonton, AB T6E 5R5 CANADA
              </Link>
            </li>
            <li className="flex">
              <strong className="ml-6">Consulting:&nbsp;</strong>Monday to
              Friday
            </li>
            <li className="flex">
              <strong className="ml-6">Hours:&nbsp;</strong>11:00 AM – 3:00 PM
              MDT
            </li>
            <li className="flex">
              <strong className="ml-6">Saturday:&nbsp;</strong>Closed
            </li>
            <li className="flex">
              <strong className="ml-6">Sunday:&nbsp;</strong>Closed
            </li>
          </ul>
        </div>

        {/* Column 2: Explore */}
        <div className="text-left text-white ">
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
        <div className="text-left text-white">
          <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/services/visitorVisa"
                className="hover:text-yellow-500"
              >
                Visit Visa Service
              </Link>
            </li>
            <li>
              <Link
                href="/services/workPermit"
                className="hover:text-yellow-500"
              >
                Work Permit
              </Link>
            </li>
            <li>
              <Link
                href="/services/studentVisa"
                className="hover:text-yellow-500"
              >
                Study Permit
              </Link>
            </li>
            <li>
              <Link
                href="/services/immigrate"
                className="hover:text-yellow-500"
              >
                Immigrate
              </Link>
            </li>
            <li>
              <Link href="/services/prCard" className="hover:text-yellow-500">
                PR Card Renewal
              </Link>
            </li>
            <li>
              <Link
                href="/services/citizenship"
                className="hover:text-yellow-500"
              >
                Citizenship
              </Link>
            </li>
            <li>
              <Link href="/services/lmia" className="hover:text-yellow-500">
                LMIA (for employers)
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative group overflow-hidden h-[250px] w-[200px]">
          <Image
            src="/Raj.jpg"
            alt="Rajendra Bhindar"
            height={200}
            width={200}
            className="bg-center rounded-full"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full">
            <p className="text-white text-lg font-semibold">Rajendra Bhindar</p>
            <p className="text-white text-center text-sm px-4 mt-1">
              President &amp; Regulated Canadian Immigration Consultant (RCIC)
            </p>
            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative mt-6 text-center border-t border-gray-700 pt-4 text-sm text-white z-50">
        <div className="flex flex-col items-center">
          <p>
            © {new Date().getFullYear()} Immigration Company is a licensed
            immigration consulting firm committed to providing honest and
            professional services to all our clients.
          </p>
          <div className="flex space-x-4 text-xl mt-4">
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
    </div>
  );
};

export default AppFooter;
