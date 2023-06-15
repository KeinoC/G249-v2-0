"use client";
import React, { useContext, useState } from "react";
import ClientSideBar from "../ClientSideBar"
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext"
import NavBar from "../../home/NavBar"
import MobileClientSideBar from "../MobileClientSideBar"
import MobileTabbedDashboard from "../MobileTabbedDashboard"
import ExploreSlide from "../../explore-the-garden/ExploreSlide"

export default function ExploreTab() {
    // Imports States along with types from state manager (AppProvider)
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile }= useContext(MiscContext);



    // {/* {isMobile ? <MobileClientSideBar /> : <ClientSideBar />} */}


    return (
        <div className="tab-display-container">
            <ExploreSlide />
        </div>
    );
}