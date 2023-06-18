"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext";
import NavBar from "../home/NavBar";
import EventCalendar from "../dashboard/MyEvents/EventCalendar";
import { Stepper, Button, Group } from "@mantine/core";
import Progress from "./RingProgress";
import BookingStepper from "./BookingStepper";

export default function BookingPage() {
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile } = useContext(MiscContext);
    const [active, setActive] = useState(1);

    return (
        <div className="h-screen">
            <NavBar />
            <div className="flex flex-row">
                <BookingStepper />
            </div>
        </div>
    );
}
