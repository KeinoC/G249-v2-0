"use client";
import React from 'react';
import { EventProvider } from './EventProvider/EventContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
      <EventProvider>
        {children}
      </EventProvider>
  );
};
