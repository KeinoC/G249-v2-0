import React, { createContext, useState, useEffect } from 'react';

export interface MiscContextProps {
  isMobile: boolean;
}

export const MiscContext = createContext<MiscContextProps>({} as MiscContextProps);

export const MiscProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check the initial device type on component mount

    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <MiscContext.Provider value={{ isMobile }}>
      {children}
    </MiscContext.Provider>
  );
};
