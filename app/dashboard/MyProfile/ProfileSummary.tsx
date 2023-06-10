"use client";
import React, { useContext, useImperativeHandle, useState } from "react";
import ClientSideBar from "../ClientSideBar";
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext";
import { UserContext } from "../../Context/UserProvider/UserContext";
import NavBar from "../../home/NavBar";
import MobileClientSideBar from "../MobileClientSideBar";
import MobileTabbedDashboard from "../MobileTabbedDashboard";
import Image from "next/image";

export default function ProfileSummary() {
    // Imports States along with types from state manager (AppProvider)
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile } = useContext(MiscContext);
    const { user } = useContext(UserContext);

    // {/* {isMobile ? <MobileClientSideBar /> : <ClientSideBar />} */}
//
    return (
        <div className="profile-summary-container flex flex-row bg-gray-300 p-1">
                <Image
                    className="rounded-full object-cover aspect-square"
                    alt={user?.first_name || ""}
                    src={user?.profile_img || ""} // Provide a default placeholder image
                    width={200} // Set the width of the image
                    height={200} // Set the height of the image
                />

            <div className="profile-detail-container w-3/4 flex flex-col mx-2 m-auto">
                <span className="text-lg  justify-start">{user?.first_name} {user?.last_name}</span>
                <li className="text-sm list-none">Member since: {user?.friend_since}</li>
                <div className=" text-sm alert-container ">
                    <button className="bg-amber-400 p-1 m-1 justify-self-start rounded hover:rounded-lg">Test Alert 1</button>
                    <button className="bg-amber-400 p-1 m-1 rounded hover:rounded-lg">Test Alert 2</button>
                </div>
            </div>
        </div>
    );
}
