'use client';
import React, { useState } from 'react';
import { CircleUserRound, LogOut, MenuIcon, X } from 'lucide-react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Sidebar = ({
  sidebarOpen,
  toggleSidebar,
  navItems,
  activeTab,
  setActiveTab,
}) => {
  const router = useRouter();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleLogout = () => {
    Cookies.remove('token');
    router.push('/auth/login');
  };

  const handleSubmenuToggle = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <aside
      className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-green-800 text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
      {/* <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-2xl font-semibold flex gap-2 items-center">
            <Image alt='logo' src='/logo.jpg' height={60} width={60} className='rounded-full' />
            <h1>Adigo</h1>
          </span>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div> */}

        {/* Navigation */}
        {/* <nav className="flex-grow mt-4 px-2">
          {navItems.map((item) => (
            <div key={item.name} className="mb-2">
              {item.subItems ? (
                <div>
                  <Button
                    variant="ghost"
                    className={`flex w-full justify-between px-4 text-left hover:bg-green-700 hover:text-white rounded-xl text-white ${
                      activeTab === item.name ? 'bg-green-700 rounded-xl ' : ''
                    }`}
                    onClick={() => handleSubmenuToggle(item.name)}
                  >
                    <span className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </span>
                    <span>{openSubmenu === item.name ? '-' : '+'}</span>
                  </Button>
                  {openSubmenu === item.name && (
                    <div className="pl-8 mt-2 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Button
                          key={subItem.name}
                          variant="ghost"
                          className="w-full text-left hover:bg-green-700 hover:text-white text-white"
                          onClick={() => {
                            setActiveTab(subItem.name);
                            toggleSidebar();
                          }}
                        >
                          {subItem.name}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  variant={activeTab === item.name ? 'secondary' : 'ghost'}
                  className={`flex w-full justify-start px-4 text-left hover:bg-green-700 hover:text-white rounded-xl text-white ${
                    activeTab === item.name ? 'bg-green-700 rounded-xl ' : ''
                  }`}
                  onClick={() => {
                    setActiveTab(item.name);
                    toggleSidebar();
                  }}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Button>
              )}
            </div>
          ))}
        </nav> */}

        {/* Profile and Logout at the Bottom */}
        {/* <div className="p-4 border-t border-gray-700">
          <Button
            variant="ghost"
            className="mt-2 w-full gap-4 justify-start text-white hover:bg-green-700 hover:text-white"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div> */}
      {/* </div> */}
    </aside>
  );
};

export default Sidebar;
