"use client";

import React, { createContext, useState, useEffect } from 'react';
import { getAllEvents, getEventById, deleteEvent, updateEvent } from '@/Firebase/endpoints/events';

export interface GEvent {
  id?: string;
  eventHost: string;
  eventDate: string;
  bookingStatus: string;
}

export interface EventContextProps {
  allEvents: GEvent[] | string;
  setAllEvents: React.Dispatch<React.SetStateAction<GEvent[] | string>>;
  newEvent: GEvent;
  setNewEvent: React.Dispatch<React.SetStateAction<GEvent>>;
}

export const EventContext = createContext<EventContextProps>({} as EventContextProps);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allEvents, setAllEvents] = useState<GEvent[] | string>([]);
  // useState<Event | undefined>(undefined);

  useEffect(() => {
    const fetchAllEvents = async (): Promise<GEvent[]> => {
      try {
        const events: GEvent[] = await getAllEvents();
        setAllEvents(events);
        return events;
      } catch (error) {
        // Handle error
        console.error("Error retrieving events:", error);
        throw error;
      }
    };

    fetchAllEvents()
      .catch((error) => {
        // Handle any errors that occurred during the fetchAllEvents() call
        console.error("Error fetching events:", error);
        return []; // Return an empty array or handle the error accordingly
      })
      .then((events) => {
        // Use the fetched events if needed
        console.log("Fetched events:", events);
      });
  }, []);


  const [newEvent, setNewEvent] = useState<GEvent>({
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





