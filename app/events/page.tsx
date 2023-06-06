"use client";
import React, {useContext, useState} from 'react';
import NewEventForm from "./NewEventForm"
import {EventContext} from "../Context/EventProvider/EventContext"
import NavBar from '../home/NavBar';

export default function Events() {


    // Imports States along with types from state manager (AppProvider)
    const EventListing = useContext(EventContext)
    const {allEvents} = EventListing || {};

    console.log(allEvents)

    return (
        <div>
<NavBar />
        <NewEventForm />
        </div>
    )
}