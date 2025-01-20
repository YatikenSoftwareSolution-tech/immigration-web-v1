'use client';
import React, { useState } from 'react';
import { CircleUserRound, LogOut, MenuIcon, X } from 'lucide-react';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import ImmigrationCompanyLogo from '../../assets/ImmigrationCompanyLogo.png'


const Sidenav = () => {

    const { activeSection, setActiveSection, isSidenavOpen,  toggleSidenav} = useAppContext();
    const router = useRouter();
      const [openSubmenu, setOpenSubmenu] = useState(null);
    
      const handleLogout = () => {
        Cookies.remove('token');
        router.push('/auth/login');
      };
    
      const handleSubmenuToggle = (name) => {
        setOpenSubmenu(openSubmenu === name ? null : name);
      };

    const navItems = [
          { name: 'About Us', link: '/about-us' },
          { 
            name: 'Services', 
            subItems: [
              { name: 'Service 1', link: '/services/service-1' },
              { name: 'Service 2', link: '/services/service-2' },
              { name: 'Service 3', link: '/services/service-3' },
              { name: 'Service 4', link: '/services/service-4' }
            ]
          },
          { name: 'Student Visa', link: '/student-visa' },
          { name: 'Travel/Tourism', link: '/travel-tourism' },
          { name: 'Visa', link: '/visa' },
          { name: 'Blogs', link: '/blogs' },
          { name: 'Countries', link: '/countries' },
          { name: 'Contacts', link: '/contacts' },
          { name: 'FAQ', link: '/faq' }
        ];


  return (
    <>
    {isSidenavOpen && <aside
      className={`${
        isSidenavOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-secondary text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-4">
            <span className="text-2xl font-semibold flex gap-2 items-center">
                <Image alt='logo' src={ImmigrationCompanyLogo} height={60} width={60} className='rounded-full' />
            </span>
            <button onClick={toggleSidenav} className="lg:hidden">
                <X className="h-6 w-6" />
            </button>
            </div>

            <nav className="flex-grow mt-4 px-2">
          {navItems.map((item) => (
            <div key={item.name} className="mb-2">
              {item.subItems ? (
                <div>
                  <Button
                    variant="ghost"
                    className={`flex w-full justify-between px-4 text-left hover:bg-green-700 hover:text-white rounded-xl text-white ${
                      activeSection === item.name ? 'bg-green-700 rounded-xl ' : ''
                    }`}
                    onClick={() => handleSubmenuToggle(item.name)}
                  >
                    <span className="flex items-center">
                      
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
                            setActiveSection(subItem.name);
                            toggleSidenav();
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
                  variant={activeSection === item.name ? 'secondary' : 'ghost'}
                  className={`flex w-full justify-start px-4 text-left hover:bg-green-700 hover:text-white rounded-xl text-white ${
                    activeSection === item.name ? 'bg-green-700 rounded-xl ' : ''
                  }`}
                  onClick={() => {
                    setActiveSection(item.name);
                    toggleSidenav();
                  }}
                >
                  
                  {item.name}
                </Button>
              )}
            </div>
          ))}
        </nav>
        </div>
        </aside>}
        </>
  )
}

export default Sidenav
