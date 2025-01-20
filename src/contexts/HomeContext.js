import { createContext, useState, useContext } from 'react';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
    
    const [activeSection, setActiveSection] = useState('home');

  return (
    <ImmigrationContext.Provider value={{ user, setUser, applicationStatus, setApplicationStatus }}>
      {children}
    </ImmigrationContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
