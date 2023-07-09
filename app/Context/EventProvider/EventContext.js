"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllEvents } from '@/Firebase/endpoints/events';
import { UserContext } from '../UserProvider/UserContext';
import { ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

/// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql'
})


export const EventContext = createContext({});
export const EventProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState([]);
  const { fullUser } = useContext(UserContext);

  const [booking, setBooking] = useState({
    eventHost: fullUser,
    eventDate: new Date(),
    bookingStatus: '',
    needsWalkthrough: false,
    walkthroughDate: "",
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


  /// GraphQL Queries
const getEventsQuery = gql`{
  events {
    type
    date
  }
}
`

const test = getEventsQuery
console.log(test);

  return (
    <ApolloProvider client = { client }>
    <EventContext.Provider
      value={{ allEvents, setAllEvents, booking, setBooking, fullUser}}
    >
      {children}
    </EventContext.Provider>
    </ApolloProvider>
  );
};
