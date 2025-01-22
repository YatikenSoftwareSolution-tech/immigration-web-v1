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
      <div className="h-[60vh] py-40 container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
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
                info@immigration.com
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-yellow-500 mr-3" />
              <a href="tel:+1234567890" className="hover:text-yellow-500">
                +1 (234) 567-890
              </a>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-500 mr-3" />
              123 Main Street, City, Country
            </li>
          </ul>
        </div>
 
        {/* Column 2: Explore */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Explore Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about-us" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#travel-tourism" className="hover:text-yellow-500">
                Travel and Tourism
              </a>
            </li>
            <li>
              <a href="#visa" className="hover:text-yellow-500">
                Visa
              </a>
            </li>
            <li>
              <a href="#blogs" className="hover:text-yellow-500">
                Blogs
              </a>
            </li>
            <li>
              <a href="#countries" className="hover:text-yellow-500">
                Countries
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-yellow-500">
                FAQ
              </a>
            </li>
          </ul>
        </div>
 
        {/* Column 3: Services Offered */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">Services Offered</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#consultation" className="hover:text-yellow-500">
                Visa Consultation
              </a>
            </li>
            <li>
              <a href="#work-permit" className="hover:text-yellow-500">
                Work Permits
              </a>
            </li>
            <li>
              <a href="#citizenship" className="hover:text-yellow-500">
                Citizenship Guidance
              </a>
            </li>
            <li>
              <a href="#family-visa" className="hover:text-yellow-500">
                Family Visas
              </a>
            </li>
            <li>
              <a href="#study-abroad" className="hover:text-yellow-500">
                Study Abroad Assistance
              </a>
            </li>
          </ul>
        </div>
 
        {/* Column 4: Location */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Locate Us</h3>
          <iframe
            className="w-full h-40 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091544!2d-122.41941508468128!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c69b7b497%3A0xc6a8a88ef1e7f9f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1672520627280!5m2!1sen!2sus"
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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
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