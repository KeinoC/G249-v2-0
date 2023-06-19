"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext";

import ExploreSlide from "../../explore-the-garden/ExploreSlide";


export default function ExploreTab() {
    // Imports States along with types from state manager (AppProvider)


    return (
        <div className="tab-display-container">
            <ExploreSlide />
            <button>
                <a href="/booking">Book Now</a>
            </button>
        </div>
    );
}
