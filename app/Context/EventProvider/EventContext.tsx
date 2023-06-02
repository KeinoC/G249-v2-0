"use client";

import React, { createContext, useState, useEffect } from 'react';
import { getAllEvents, getEventById, deleteEvent, updateEvent } from '@/Firebase/endpoints/events';

export interface Event {
  id?: string;
  eventHost: string;
  eventDate: string;
  bookingStatus: string;
}

export interface EventContextProps {
  allEvents: Event[] | string;
  setAllEvents: React.Dispatch<React.SetStateAction<Event[] | string>>;
  newEvent: Event;
  setNewEvent: React.Dispatch<React.SetStateAction<Event>>;
}

export const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allEvents, setAllEvents] = useState<Event[] | string>([]);
  // useState<Event | undefined>(undefined);

  useEffect(() => {
    const fetchAllEvents = async (): Promise<void> => {
      try {
        const events: Event[] = await getAllEvents();
        setAllEvents(events);
      } catch (error) {
        // Handle error
        console.error("Error retrieving events:", error);
      }
    };

    fetchAllEvents();
  }, []);

  const [newEvent, setNewEvent] = useState<Event>({
    eventHost: '',
    eventDate: '',
    bookingStatus: '',
  });

  return (
    <EventContext.Provider value={{ allEvents, setAllEvents, newEvent, setNewEvent }}>
      {children}
    </EventContext.Provider>
  );
};





