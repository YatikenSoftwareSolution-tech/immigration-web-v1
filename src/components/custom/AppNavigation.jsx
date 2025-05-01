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
} from "@/components/ui/navigation-menu";

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
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 justify-center item-center">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute bg-white shadow-lg  border-none outline-none">
                  <ul className="w-[300px] border-none outline-none">
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
                        href="/services/visitorVisa"
                        className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                        Visit visa service
                      </NavigationMenuLink>
                    </li>

                    <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <NavigationMenuLink
                        href="/services/studentVisa"
                        className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                        Study Permit
                      </NavigationMenuLink>
                    </li>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <NavigationMenuLink
                        href="/services/immigrate"
                        className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                        Immigrate
                      </NavigationMenuLink>
                    </li>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <NavigationMenuLink
                        href="/services/prCard"
                        className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                        PR Card
                      </NavigationMenuLink>
                    </li>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <NavigationMenuLink
                        href="/services/citizenship"
                        className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                        Citizenship
                      </NavigationMenuLink>
                    </li>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      <NavigationMenuLink
                        href="/services/lmai"
                        className="text-base text-dark font-semibold cursor-pointer hover:text-tertiary transition duration-300"
                      >
                        LMIA (for employers)
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
          href="/book-consultation"
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
