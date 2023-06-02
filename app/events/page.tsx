"use client";
import React, {useContext, useState} from 'react';
import NewEventForm from "./NewEventForm"
import {EventContext} from "../Context/EventProvider/EventContext"


export default function Events() {
    
    // const contextData = useContext(MyContext);/
    
    // Use the context data in your component
    // const { foo, bar } = contextData || {};
    //////////////
    
    // const {allEvents} = useContext(EventContext)
    const EventContext = useContext(EventContext)
    const {allEvents} = EventContext || {};

    console.log(allEvents)

    return (
        <main>Hello from Events

        <NewEventForm />
        </main>
    )
}