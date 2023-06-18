"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllEvents } from '@/Firebase/endpoints/events';
import { UserContext } from '../UserProvider/UserContext';

export const EventContext = createContext({});
export const EventProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState([]);
  const { fullUser } = useContext(UserContext);

  const [booking, setBooking] = useState({
    eventHost: fullUser,
    eventDate: new Date(),
    bookingStatus: '',
  });

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const events = await getAllEvents();
        setAllEvents(events);
        return events;
      } catch (error) {
        console.error("Error retrieving events:", error);
        throw error;
      }
    };

    fetchAllEvents()
      .catch((error) => {
        console.error("Error fetching events:", error);
        return [];
      })
      .then((events) => {
        console.log("Fetched events:", events);
      });
  }, []);

  return (
    <EventContext.Provider
      value={{ allEvents, setAllEvents, booking, setBooking, eventHost: fullUser, eventDate: new Date() }}
    >
      {children}
    </EventContext.Provider>
  );
};
