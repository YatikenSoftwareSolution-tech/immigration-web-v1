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
              <a
                href="mailto:info@immigration.com"
                className="hover:text-yellow-500"
              >
                info@immigrationcompany.ca
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-yellow-500 mr-3" />
              <a href="tel:+17809371995" className="hover:text-yellow-500">
                +1-7809371995
              </a>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" />
              9323- 35 Ave Edmonton, AB T6E 5R5 CANADA
            </li>
          </ul>
        </div>
 
        {/* Column 2: Explore */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Explore Links</h3>
          <ul className="space-y-2 text-sm">
          <li>
              <a href="/" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/carrers" className="hover:text-yellow-500">
                Carrers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
           
          </ul>
        </div>
 
        {/* Column 3: Services Offered */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/services/visitorVisa" className="hover:text-yellow-500">
                Visitor Visa
              </a>
            </li>
            <li>
              <a href="/services/superVisa" className="hover:text-yellow-500">
                Super Visa
              </a>
            </li>
            <li>
              <a href="/services/workPermit" className="hover:text-yellow-500">
                Work Permit
              </a>
            </li>
            <li>
              <a href="/services/pnpVisa" className="hover:text-yellow-500">
                PNP
              </a>
            </li>
            <li>
              <a href="/services/prCard" className="hover:text-yellow-500">
                PR Card renewal
              </a>
            </li>
            <li>
              <a href="/services/tourism" className="hover:text-yellow-500">
                Express Entry
              </a>
            </li>
            <li>
              <a href="/services/coaching" className="hover:text-yellow-500">
                LMIAE
              </a>
            </li>
            <li>
              <a href="/services/sponsorship" className="hover:text-yellow-500">
                Spousal Sponsorship
              </a>
            </li>
            <li>
              <a href="/services/parents" className="hover:text-yellow-500">
                Parents and Grand Parents PR
              </a>
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
      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm">
        <div className="flex flex-col items-center">
          <p>
            © {new Date().getFullYear()} Immigration Website. All rights
            reserved.
          </p>
          <div className="flex space-x-4 text-xl mt-4">
            <a
              href="https://www.facebook.com/Immicomp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/Immicomp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/theimmigrationcompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/theimmigrationcompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default AppFooter;