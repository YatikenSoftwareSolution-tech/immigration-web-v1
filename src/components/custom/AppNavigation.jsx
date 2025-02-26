"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useAppContext } from "../../contexts/AppContext";
import ImmigrationCompanyLogo from "../../assets/ImmigrationCompanyLogo.png";
import Image from "next/image";
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

  return (
    <nav className="flex justify-between items-center bg-white text-black px-8 py-4 fixed top-0 left-0 w-full shadow-lg z-20">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src={ImmigrationCompanyLogo}
            alt="Immigration Company"
            height={50}
            width={180}
            className="cursor-pointer"
          />
        </div>
      </Link>

      {/* Navigation list for bigger screens */}
      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4 justify-center item-center">
            <NavigationMenuItem >
              <NavigationMenuTrigger className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute bg-white shadow-lg  border-none outline-none">
                <ul className="w-[300px] border-none outline-none">
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/visitorVisa"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                    >
                      Visitor visa
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/superVisa"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                    >
                      Super visa
                    </NavigationMenuLink>
                  </li>
                  
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/workPermit"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                    >
                      Work Permit
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/pnpVisa"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                    >
                    PNP
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/prCard"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                    >
                     PR Card Renewal
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/studentVisa"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                     >
                      Job placement
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/tourism"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                      Express Entry
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/coaching"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                      Labour market impact assessment for employers
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/nominee"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                      Alberta provincial nominee program
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/sponsorship"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                      Spousal Sponsorship
                    </NavigationMenuLink>
                  </li>
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    <NavigationMenuLink
                      href="/services/parents"
                      className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                      Parents & grand parents PR application & super visa
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
              className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
            >
              About us
            </Link>
          </li>
         
          <li className="text-base">
            <Link
              href="/countries"
             className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
            >
              Careers
            </Link>
          </li>
          <li className="text-base">
            <Link
              href="/contacts"
              className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
            >
              Contact us
            </Link>
          </li>
         
        </ul>
      </div>

      <div className="hidden md:flex items-center">
        <Link
          href="/consultation"
          className="text-white bg-tertiary py-2 px-6 rounded-lg text-lg shadow-md transition duration-200 hover:bg-tertiary/90"
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
