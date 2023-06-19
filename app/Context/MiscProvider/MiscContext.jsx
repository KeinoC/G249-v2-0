"use client";
import React, { createContext, useState, useEffect } from 'react';

export const MiscContext = createContext({});
export const MiscProvider = ({ children }) => {
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
