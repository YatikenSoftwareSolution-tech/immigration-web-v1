"use client";

import React, { useState } from 'react';
import { LogOut, X } from 'lucide-react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import ImmigrationCompanyLogo from '../../assets/ImmigrationCompanyLogo.png';
import Link from 'next/link';

const Sidenav = () => {
  const { activeSection, setActiveSection, isSidenavOpen, toggleSidenav } = useAppContext();
  const router = useRouter();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuToggle = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const navItems = [
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contacts' }
  ];

  return (
    <>
      {isSidenavOpen && (
        <aside
          className={`${
            isSidenavOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed inset-y-0 left-0 z-50 w-72 bg-primary text-tertiary transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-2xl font-semibold flex gap-2 items-center">
              <Link href="/">
                <Image
                  alt="logo"
                  src={ImmigrationCompanyLogo}
                  height={200}
                  width={200}
                  className="rounded-full"
                />
                </Link>
              </span>
              <button onClick={toggleSidenav} className="lg:hidden p-3">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-grow mt-4 px-2">
              {navItems.map((item, index) => (
                <div key={index} className="mb-2 text-lg font-semibold text-left ">
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => handleSubmenuToggle(item.name)}
                        className="w-full px-4 py-2 text-left hover:bg-secondary rounded-lg hover:text-white transition"
                      >
                        {item.name}
                      </button>
                      {openSubmenu === item.name && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              onClick={() => {
                                setActiveSection(subItem.name);
                                toggleSidenav();
                                router.push(subItem.link);
                              }}
                              className="block w-full text-left px-4 py-2 hover:bg-secondary hover:text-white transition rounded-lg"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )  : (
                    <button
                      onClick={() => {
                        setActiveSection(item.name);
                        toggleSidenav();
                        router.push(item.link);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-secondary hover:text-white transition"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidenav;
