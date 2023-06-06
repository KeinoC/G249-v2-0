"use client";
import React, { useContext, useState } from "react";
import ClientSideBar from "./ClientSideBar"
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext"
import NavBar from "../home/NavBar"

export default function MobileClientSideBar() {
    // Imports States along with types from state manager (AppProvider)
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile }= useContext(MiscContext);

    console.log(isMobile);

    const [showSidebar, setShowSidebar] = useState(false);


    return (
        <div>
            <NavBar />
            <button onClick={()=>setShowSidebar(!showSidebar)}>Menu</button>
            {isMobile && showSidebar ? <ClientSideBar /> : <></>}
        </div>
    );
}