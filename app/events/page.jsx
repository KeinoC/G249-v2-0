"use client";
import React, { useContext, useState } from "react";
import NewEventForm from "./NewEventForm";
import { EventContext } from "../Context/EventProvider/EventContext";

export default function Events() {
    // Imports States along with types from state manager (AppProvider)
    const { allEvents }  = useContext(EventContext);

    return (
        <div>
            <NewEventForm />
        </div>
    );
}
