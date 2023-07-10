"use client";
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
import { useQuery, gql } from '@apollo/client'



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

export default function Dashboard() {
    // console.log(graphql(GET_EVENTS_QUERY));

    // const {} = useQuery(GET_EVENTS_QUERY)

    return (
        <ApolloProvider client={client}>
            <div>
                <NavBar />
                <h1>Testing</h1>
            </div>
        </ApolloProvider>
    );
}
