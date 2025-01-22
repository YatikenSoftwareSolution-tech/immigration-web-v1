"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useAppContext } from "../../contexts/AppContext";
import ImmigrationCompanyLogo from "../../assets/ImmigrationCompanyLogo.png";
import Image from "next/image";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const AppNavigation = () => {
  const { toggleSidenav } = useAppContext();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-white text-black p-4 fixed top-0 left-0 w-full shadow-lg z-20">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src={ImmigrationCompanyLogo}
            alt="Immigration Company"
            height="50"
            className="cursor-pointer"
          />
        </div>
      </Link>

      {/* Navigation list for bigger screens */}
      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 justify-center item-center">
            <NavigationMenuItem >
              <NavigationMenuTrigger className="text-base cursor-pointer hover:text-secondary transition duration-300">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute bg-white shadow-lg  border-none outline-none">
                <ul className="w-48  border-none outline-none">
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/visa"
                      className=""
                    >
                      Immigration Visa
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/studentVisa"
                     >
                      Student Visa
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/tourism"
                      >
                      Travel/Tourism
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/coaching"
                      >
                      Coaching
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ul className="flex items-center gap-10">

          {/* Other Navigation Links */}
          <li className="text-base">
            <Link
              href="/about"
              className="hover:text-secondary transition duration-300"
            >
              About us
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/blogs"
              className="hover:text-secondary transition duration-300"
            >
              Blogs
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/countries"
              className="hover:text-secondary transition duration-300"
            >
              Countries
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/contacts"
              className="hover:text-secondary transition duration-300"
            >
              Contacts
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/faq"
              className="hover:text-secondary transition duration-300"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex items-center">
        <Link
          href="/consultation"
          className="text-white bg-[#D80621] py-2 px-6 rounded-lg text-lg shadow-md transition duration-200 hover:bg-[#b5051a]"
        >
          Book Consultation
        </Link>
      </div>

      {/* Menu Icon for Mobile screens */}
      <div className="block md:hidden">
        <MenuIcon
          className="text-black w-8 h-8 cursor-pointer"
          onClick={toggleSidenav}
          aria-label="Toggle Navigation Menu"
        />
      </div>
    </nav>
  );
};

export default AppNavigation;
