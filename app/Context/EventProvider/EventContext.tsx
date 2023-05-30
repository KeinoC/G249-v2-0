"use client";

import React, { createContext, useState, useEffect } from 'react';
import { getAllEvents, getEventById, deleteEvent, updateEvent } from '@/Firebase/endpoints/events';

interface Event {
  id?: string;
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
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  return (
    <EventContext.Provider value={{ allEvents, setAllEvents, newEvent, setNewEvent }}>
      {children}
    </EventContext.Provider>
  );
};





