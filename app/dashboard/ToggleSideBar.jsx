"use client";
import React, { useContext, useState } from "react";
import ClientSideBar from "./ClientSideBar"
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext"
import NavBar from "../home/NavBar"
import MobileClientSideBar from "./MobileClientSideBar"

export default function Dashboard() {
    // Imports States along with types from state manager (AppProvider)





    return (
        <div>
            <NavBar />
           <MobileClientSideBar /> 
           </div>
    );
}