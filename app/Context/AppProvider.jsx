"use client";
import React from 'react';
import { EventProvider } from './EventProvider/EventContext';

export const AppProvider = ({ children }) => {
  return (
      <EventProvider>
        {children}
      </EventProvider>
  );
};
