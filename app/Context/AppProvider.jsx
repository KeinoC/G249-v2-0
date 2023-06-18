"use client";
import React from "react";
import { EventProvider } from "./EventProvider/EventContext";
import { MiscProvider } from "./MiscProvider/MiscContext";
import { UserProvider } from "./UserProvider/UserContext";
import { MediaProvider } from "./MediaProvider/MediaContext";

export const AppProvider = ({ children }) => {
    return (
        <MiscProvider>
            <MediaProvider>
                <UserProvider>
                    <EventProvider>{children}</EventProvider>
                </UserProvider>
            </MediaProvider>
        </MiscProvider>
    );
};
