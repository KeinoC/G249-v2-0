/* eslint-disable react/no-string-refs */
"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext";
import NavBar from "../../home/NavBar";
import MobileTabbedDashboard from "../MobileTabbedDashboard";
import ExploreSlide from "../../explore-the-garden/ExploreSlide";
import { Button } from "@mantine/core";

export default function ExploreTab() {
    // Imports States along with types from state manager (AppProvider)
    const { allEvents }  = useContext(EventContext);
    const { isMobile } = useContext(MiscContext);
    const [active, setActive] = useState(1);

    return (
        <div className="tab-display-container">
            <ExploreSlide />
            <button>
                <a href="/booking">Book Now</a>
            </button>
        </div>
    );
}
