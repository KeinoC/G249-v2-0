"use client";

import React, { createContext, useState, useEffect } from 'react';

interface Event {
  eventHost: string;
  eventDate: string;
  bookingStatus: string;
}

interface EventContextProps {
  allEvents: Event[];
  setAllEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  newEvent: Event;
  setNewEvent: React.Dispatch<React.SetStateAction<Event>>;
}

export const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [newEvent, setNewEvent] = useState<Event>({
    eventHost: '',
    eventDate: '',
    bookingStatus: '',
  });
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  return (
    <EventContext.Provider value={{ allEvents, setAllEvents, newEvent, setNewEvent }}>
      {children}
    </EventContext.Provider>
  );
};




