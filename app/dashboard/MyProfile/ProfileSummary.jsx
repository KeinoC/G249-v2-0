/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useContext, useImperativeHandle, useState } from "react";
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext";
import { UserContext } from "../../Context/UserProvider/UserContext";
import NavBar from "../../home/NavBar";
import MobileTabbedDashboard from "../MobileTabbedDashboard";
import Image from "next/image";

export default function ProfileSummary() {
    // Imports States along with types from state manager (AppProvider)
    const { allEvents }  = useContext(EventContext);
    const { isMobile } = useContext(MiscContext);
    const [active, setActive] = useState(1);
    const { user, fullUser } = useContext(UserContext);

    return (
        <div className="profile-summary-container flex flex-row bg-gray-300 p-1">
            <div className="w-1/4 flex">
                <img
                    className="object-cover rounded-full  m-auto shadow-3xl"
                    src={fullUser?.profileImg}
                    alt="profile pic"
                />
            </div>

            <div className="profile-detail-container w-3/4 flex flex-col mx-2 m-auto">
                <div className="flex flex-col">
                    <span className="text-lg  justify-start">
                        {fullUser?.firstName} {fullUser?.lastName}
                    </span>
                    <li className="text-sm list-none">
                        Member Since: {fullUser?.createdAt?.slice(0, 10)}
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
