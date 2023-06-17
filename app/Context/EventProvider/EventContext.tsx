"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllEvents, getEventById, deleteEvent, updateEvent } from '@/Firebase/endpoints/events';
import {User} from "../UserProvider/UserContext"
import { UserContext }  from "../UserProvider/UserContext"



export interface GEvent {
  id?: string | undefined;
  eventHost: User | string | undefined | number | void | null;
  eventDate: Date | undefined | string;
  bookingStatus: string | undefined;
}

export interface EventContextProps {
  eventHost: User | string;
  eventDate: Date;
  allEvents: GEvent[] | string;
  setAllEvents: React.Dispatch<React.SetStateAction<GEvent[] | string>>;
  booking: GEvent;
  setBooking: React.Dispatch<React.SetStateAction<GEvent>>;
}

export const EventContext = createContext<EventContextProps>({} as EventContextProps);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allEvents, setAllEvents] = useState<GEvent[] | string>([]);
  // useState<Event | undefined>(undefined);
  const { fullUser } = useContext(UserContext);
  
  /// Booking related /////
  
  const [myEvents, setMyEvent] = useState<GEvent | undefined>(undefined);
  
  
  /// Booking above ////
  
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


  const [booking, setBooking] = useState<GEvent>({
    eventHost: fullUser,
    eventDate: new Date(),
    bookingStatus: ''
  });

  return (
    <EventContext.Provider value={{ allEvents, setAllEvents, booking, setBooking, eventHost: fullUser || '', eventDate: new Date() }}>
      {children}
    </EventContext.Provider>
  );
};





