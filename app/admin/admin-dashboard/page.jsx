"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext"
import NavBar from "../home/NavBar"
import MobileTabbedDashboard from "./MobileTabbedDashboard"
import ProfileSummary from "./MyProfile/ProfileSummary";

export default function Dashboard() {


    return (
        <div>
            <NavBar />
            <ProfileSummary />
            <MobileTabbedDashboard />
        </div>
    );
}