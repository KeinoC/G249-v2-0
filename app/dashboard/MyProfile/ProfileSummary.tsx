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
    const { user, fullUser } = useContext(UserContext);

    return (
        <div className="profile-summary-container flex flex-row bg-gray-300 p-1">
            
            <div>
                <img
                    className="object-cover rounded-full w-1/2 m-auto"
                    src={fullUser?.profile_img}
                    alt="profile pic"
                />
            </div>

            <div className="profile-detail-container w-3/4 flex flex-col mx-2 m-auto">
                <div className="flex flex-row">
                    <span className="text-lg  justify-start">
                        {fullUser?.first_name} {fullUser?.last_name}
                    </span>
                    <li className="text-sm list-none">
                        Member since: {fullUser?.friend_since}
                    </li>
                </div>
            <div className=" text-sm alert-container flex flex-row ">
                <button className="bg-amber-400 p-1 m-1 justify-self-start rounded hover:rounded-lg">
                    Test Alert 1
                </button>
                <button className="bg-amber-400 p-1 m-1 rounded hover:rounded-lg">
                    Test Alert 2
                </button>
            </div>
            </div>

        </div>
    );
}
