"use client";
import { EventProvider } from "./EventProvider/EventContext";
import { MiscProvider } from "./MiscProvider/MiscContext";
import { UserProvider } from "./UserProvider/UserContext";
import { MediaProvider } from "./MediaProvider/MediaContext";
// import { ApolloProvider } from "react-apollo";
import React, { useContext, useState } from "react";
import NavBar from "../home/NavBar";
// import { ApolloProvider, useQuery } from 'react-apollo';
import { graphql } from "react-apollo";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { useQuery, gql } from "@apollo/client";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, location, path }) => {
            alert(`GraphQL Error: ${message}`);
        });
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:4444/graphql" }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

export const GET_EVENTS_QUERY = gql`
    {
            events {
                id
                type
            }
    }
`;

export const AppProvider = ({ children }) => {

    return (
        <ApolloProvider client={client}>
            <MiscProvider>
                <MediaProvider>
                    <UserProvider>
                        <EventProvider>{children}</EventProvider>
                    </UserProvider>
                </MediaProvider>
            </MiscProvider>
        </ApolloProvider>
    );
};
