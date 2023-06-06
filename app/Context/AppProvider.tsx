"use client";
import React from 'react';
import { EventProvider } from './EventProvider/EventContext';
import { MiscProvider } from './MiscProvider/MiscContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MiscProvider >
      <EventProvider>
        {children}
      </EventProvider>
      </MiscProvider>
  );
};
