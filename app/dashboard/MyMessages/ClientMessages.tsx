"use client";
import React, { useContext, useState } from "react";
import ClientSideBar from "../ClientSideBar"
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext"
import NavBar from "../../home/NavBar"
import MobileClientSideBar from "../MobileClientSideBar"
import MobileTabbedDashboard from "../MobileTabbedDashboard"

export default function ClientMessages() {
    // Imports States along with types from state manager (AppProvider)



    // {/* {isMobile ? <MobileClientSideBar /> : <ClientSideBar />} */}


    return (
        <div className="tab-display-container">
            Messages!
        </div>
    );
}