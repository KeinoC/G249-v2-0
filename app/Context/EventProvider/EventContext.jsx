"use client";

import React, { createContext, useState, useEffect } from 'react';
import { createEvent } from "../../../Firebase/endpoints/events"

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [newEvent, setNewEvent] = useState({})
  const [allEvents, setAllEvents] = useState([]);






  return (
    <EventContext.Provider value={{
        allEvents, setAllEvents
        }}>
      {children}
    </EventContext.Provider>
  );
};
