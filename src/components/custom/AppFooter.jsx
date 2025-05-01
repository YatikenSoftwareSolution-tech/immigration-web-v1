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
    <footer>
      <div className="py-[5%] container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Contact Us */}
        <div className="text-left ">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <FaEnvelope className="text-yellow-500 mr-3" />
              <Link
                href="mailto:info@immigration.com"
                className="hover:text-yellow-500"
              >
                info@immigrationcompany.ca
              </Link>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-yellow-500 mr-3" />
              <Link href="tel:+17809371995" className="hover:text-yellow-500">
                +1-7809371995
              </Link>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" />
              9323- 35 Ave Edmonton, AB T6E 5R5 CANADA
            </li>
            <li className="flex ">
              <strong>Consulting Hours:</strong> Monday to Friday, 11:00 AM – 3:00 PM <br/>
              </li>
              <li className="flex ">
              <strong>Saturday: &nbsp;</strong> Closed
              </li>
              <li className="flex ">
              <strong>Sunday: &nbsp;</strong> Closed
            </li>
          </ul>
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
              <Link href="/contact" className="hover:text-yellow-500">
                Contact Us
              </Link>
            </li>
           
          </ul>
        </div>
 
        {/* Column 3: Services Offered */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/visitorVisa" className="hover:text-yellow-500">
              Visit visa service
              </Link>
            </li>
            <li>
              <Link href="/services/workPermit" className="hover:text-yellow-500">
              Work Permit
              </Link>
            </li>
            <li>
              <Link href="/services/studentVisa" className="hover:text-yellow-500">
              Study Permit
              </Link>
            </li>
            <li>
              <Link href="/services/immigrate" className="hover:text-yellow-500">
              Immigrate
              </Link>
            </li>
            <li>
              <Link href="/services/prCard" className="hover:text-yellow-500">
                PR Card renewal
              </Link>
            </li>
            <li>
              <Link href="/services/citizenship" className="hover:text-yellow-500">
              Citizenship
              </Link>
            </li>
            <li>
              <Link href="/services/coaching" className="hover:text-yellow-500">
              LMAI (for employers)
              </Link>
            </li>
          </ul>
        </div>
 
        {/* Column 4: Location */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Locate Us</h3>
          <iframe
            className="w-full h-40 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d76000.24367833059!2d-113.474289!3d53.468324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f2ab6057191%3A0x71fc53a206488a4b!2s9323%2035%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6E%205R5%2C%20Canada!5e0!3m2!1sen!2sus!4v1740708587593!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
 
      {/* Footer Bottom */}
      <div className="mt-6 text-center border-t border-gray-700 pt-4 text-sm">
        <div className="flex flex-col items-center">
          <p>
            © {new Date().getFullYear()} Immigration Company is a licensed immigration consulting firm committed to providing honest and professional services to all our clients.
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
              href="https://www.instagram.com/theimmigrationcompany/"
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