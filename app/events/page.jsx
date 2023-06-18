"use client";
import React, { useContext, useState } from "react";
import NewEventForm from "./NewEventForm";
import { EventContext } from "../Context/EventProvider/EventContext";

export default function Events() {
    // Imports States along with types from state manager (AppProvider)
    const { allEvents }  = useContext(EventContext);
    const { isMobile } = useContext(MiscContext);
    const [active, setActive] = useState(1);

    console.log(allEvents);

    return (
        <div>
            <NewEventForm />
        </div>
    );
}
