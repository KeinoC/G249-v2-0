import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);

  return (
    <EventContext.Provider value={{
        allUsers, setAllUsers
        }}>
      {children}
    </EventContext.Provider>
  );
};

