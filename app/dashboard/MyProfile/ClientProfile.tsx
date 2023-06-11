"use client";
import React, { useContext, useState } from "react";
import ClientSideBar from "../ClientSideBar"
import ProfileSummary from "./ProfileSummary"
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext"
import NavBar from "../../home/NavBar"
import MobileClientSideBar from "../MobileClientSideBar"
import MobileTabbedDashboard from "../MobileTabbedDashboard"
import ClientProfileForm from "./ClientProfileForm"
import { UserContext } from "../../Context/UserProvider/UserContext"

export default function ClientProfile() {
    // Imports States along with types from state manager (AppProvider)
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile }= useContext(MiscContext);




    const { isLoggedIn, user } = useContext(UserContext);


    return (
        <div className="tab-display-container">
                <div>
        <h2 className="font-bold text-lg">Personal Info</h2>
        <div className="info-container text-sm" >
        <li><span className="font-bold">First Name: </span>{user?.first_name}</li>
        <li><span className="font-bold">Last Name: </span>{user?.last_name}</li>
        <li><span className="font-bold">Email: </span>{user?.email}</li>
        <li><span className="font-bold">Address </span>{user?.address}</li>
        </div>
    </div>

        <ClientProfileForm />   
           
        </div>
    );
}