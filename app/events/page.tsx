"use client";
import React, {useContext} from 'react';
import NewEventForm from "./NewEventForm"
import {EventContext} from "../Context/EventProvider/EventContext"


export default function Events() {

const {allEvents} = useContext(EventContext)

    console.log(allEvents)

    return (
        <main>Hello from Events

        <NewEventForm />
        </main>
    )
}