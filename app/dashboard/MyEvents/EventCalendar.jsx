"use client";
import React, { useContext, useState } from "react";
import ClientSideBar from "../ClientSideBar";
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext";
import NavBar from "../../home/NavBar";
import MobileClientSideBar from "../MobileClientSideBar";
import MobileTabbedDashboard from "../MobileTabbedDashboard";
import { Group } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import "./EventCalendar.css"

export default function EventCalendar() {
    // Imports States along with types from state manager (AppProvider)
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile } = useContext(MiscContext);

    // {/* {isMobile ? <MobileClientSideBar /> : <ClientSideBar />} */}

    return (
        <div className="tab-display-container">
            <Group position="center">
                <Calendar />
            </Group>
        </div>
    );
}
