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
  // bg-[url('/OfficePhoto.jpg')]
  return (
    <div className="relative h-full bg-[url('/OfficePhoto.jpg')] py-8  bg-cover flex flex-col items-center gap-16 text-white">
      {/* dark overlay */}
      <div className="absolute inset-0 bg-dark opacity-70" />

      {/* content */}
      <div className="relative mt-[13%] container flex flex-col md:flex-row justify-between item-center px-8 md:px-0 gap-8">
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
              <strong className="ml-6 mr-2">Consulting:</strong>Monday to Friday
            </li>
            <li className="flex">
              <strong className="ml-6 mr-[33px]">Hours:&nbsp;</strong>11:00 AM –
              3:00 PM MDT
            </li>
            <li className="flex">
              <strong className="ml-6 mr-[16px]">Saturday:&nbsp;</strong>Closed
            </li>
            <li className="flex">
              <strong className="ml-6 mr-[26px]">Sunday:&nbsp;</strong>Closed
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
                href="/"
                className="hover:text-yellow-500"
              >
                Visit Visa Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-yellow-500"
              >
                Work Permit
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-yellow-500"
              >
                Study Permit
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-yellow-500"
              >
                Immigrate
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-500">
                PR Card Renewal
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-yellow-500"
              >
                Citizenship
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-500">
                LMIA (for employers)
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative group overflow-hidden flex flex-col items-center ">
          <Image
            src="/Raj.jpg"
            alt="Rajendra Bhindar"
            height={180}
            width={240}
            className="bg-center rounded-full z-0 "
          />
          {/* <div className="absolute  w-[200] bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-full">
            <p className="text-white text-lg font-semibold">Rajendra Bhindar</p>
            <p className="text-white text-center text-sm px-4 mt-1">
              President &amp; Regulated Canadian Immigration Consultant (RCIC)
            </p>
            
          </div> */}
          <div className=" rounded-b-lg w-[260px] ">
            <div className="flex flex-col items-center rounded-lg shadow-lg">
              <p className="text-white font-bold">Rajender Singh Bhinder</p>
              <p className="text-white text-center text-xs font-semibold  my-1 ">
              RCIC | Director, <br/> The Immigration Company
              </p>
              <p className="text-white text-center text-xs font-semibold mb-1">
              Over 15 years of trusted immigration advice and global recruitment experience.
              </p>
            </div> 
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative mt-6 text-center border-t border-gray-700 pt-2 text-sm text-white z-50">
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
