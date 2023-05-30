"use client";
import React from 'react';
import { EventProvider } from './EventContext';

export const AppProvider = ({ children }) => {
  return (
      <EventProvider>
        {children}
      </EventProvider>
  );
};
