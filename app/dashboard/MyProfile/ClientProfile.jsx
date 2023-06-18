"use client";
import React, { useContext, useState } from "react";
import ProfileSummary from "./ProfileSummary"
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext"
import NavBar from "../../home/NavBar"
import MobileTabbedDashboard from "../MobileTabbedDashboard"
import ClientProfileForm from "./ClientProfileForm"
import { UserContext } from "../../Context/UserProvider/UserContext"

export default function ClientProfile() {
    // Imports States along with types from state manager (AppProvider)
    const { allEvents }  = useContext(EventContext);
    const { isMobile } = useContext(MiscContext);
    const [active, setActive] = useState(1);




    const { isLoggedIn, user, fullUser } = useContext(UserContext);


    return (
        <div className="tab-display-container">
                <div>
        <h2 className="font-bold text-lg">Personal Info</h2>
        <div className="info-container text-sm" >
        <li><span className="font-bold">First Name: </span>{fullUser?.first_name}</li>
        <li><span className="font-bold">Last Name: </span>{fullUser?.last_name}</li>
        <li><span className="font-bold">Email: </span>{fullUser?.email}</li>
        <li><span className="font-bold">Address </span>{fullUser?.address}</li>
        </div>
    </div>

        <ClientProfileForm />
        </div>
    );
}