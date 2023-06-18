"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext"
import NavBar from "../home/NavBar"

export default function MobileClientSideBar() {
    // Imports States along with types from state manager (AppProvider)
    const { allEvents }  = useContext(EventContext);
    const { isMobile } = useContext(MiscContext);
    const [active, setActive] = useState(1);




    return (
        <div>
            <NavBar />
        </div>
    );
}