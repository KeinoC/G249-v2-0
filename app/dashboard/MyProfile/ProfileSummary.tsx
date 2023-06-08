"use client";
import React, { useContext, useImperativeHandle, useState } from "react";
import ClientSideBar from "../ClientSideBar"
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext"
import { UserContext } from "../../Context/UserProvider/UserContext"
import NavBar from "../../home/NavBar"
import MobileClientSideBar from "../MobileClientSideBar"
import MobileTabbedDashboard from "../MobileTabbedDashboard"

export default function ProfileSummary() {
    // Imports States along with types from state manager (AppProvider)
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile } = useContext(MiscContext);
    const { user } = useContext(UserContext)

    // {/* {isMobile ? <MobileClientSideBar /> : <ClientSideBar />} */}


    return (
        <div className="tab-display-container">
            <h1>{user.username}</h1>
        </div>
    );
}