"use client";
import React from 'react';
import { EventProvider } from './EventProvider/EventContext';
import { MiscProvider } from './MiscProvider/MiscContext';
import { UserProvider } from './UserProvider/UserContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MiscProvider >
      <UserProvider >
      <EventProvider>
        {children}
      </EventProvider>
      </UserProvider>
      </MiscProvider>
  );
};
