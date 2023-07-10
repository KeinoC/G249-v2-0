"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllEvents } from '@/Firebase/endpoints/events';
import { UserContext } from '../UserProvider/UserContext';
import { print } from 'graphql';
// import { GET_EVENTS_QUERY } from "../AppProvider";

import { graphql } from 'react-apollo'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useQuery, gql } from "@apollo/client";

/// apollo client setup
// const client = new ApolloClient({
//   uri: 'http://localhost:4444/graphql'
// })



const GET_EVENTS_QUERY = gql`{

  events {
    id
    type
}
}
`


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




const { error, loading, data } = useQuery(GET_EVENTS_QUERY);

useEffect(()=> {
  if (data) {
    setAllEvents(data.events);
  }
}, [data])

  return (
    <EventContext.Provider
      value={{ allEvents, setAllEvents, booking, setBooking, fullUser}}
    >
      {children}
    </EventContext.Provider>
  );
};
