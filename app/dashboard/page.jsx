"use client";
import React, { useContext, useState } from "react";
import ClientSideBar from "./ClientSideBar"
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext"
import NavBar from "../home/NavBar"
import MobileClientSideBar from "./MobileClientSideBar"
import MobileTabbedDashboard from "./MobileTabbedDashboard"
import ProfileSummary from "./MyProfile/ProfileSummary";

export default function Dashboard() {
    // Imports States along with types from state manager (AppProvider)
    const { allEvents }  = useContext(EventContext);
    const { isMobile } = useContext(MiscContext);
    const [active, setActive] = useState(1);




    // {/* {isMobile ? <MobileClientSideBar /> : <ClientSideBar />} */}


    return (
        <div>
            <NavBar />
            <ProfileSummary />
            <MobileTabbedDashboard />
        </div>
    );
}