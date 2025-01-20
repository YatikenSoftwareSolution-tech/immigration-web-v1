"use client"

import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const toggleSidenav = () => {
      setIsSidenavOpen(!isSidenavOpen);
    };
  
  return (
    <AppContext.Provider value={{ activeSection, setActiveSection, isSidenavOpen, setIsSidenavOpen, toggleSidenav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
