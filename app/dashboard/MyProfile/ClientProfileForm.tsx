"use client";
import React, { useContext, useState } from "react";
import ClientSideBar from "../ClientSideBar"
import ProfileSummary from "./ProfileSummary"
import { EventContext } from "../../Context/EventProvider/EventContext";
import { MiscContext } from "../../Context/MiscProvider/MiscContext"
import { UserContext } from "../../Context/UserProvider/UserContext"
import NavBar from "../../home/NavBar"
import MobileClientSideBar from "../MobileClientSideBar"
import MobileTabbedDashboard from "../MobileTabbedDashboard"
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';

export default function ClientProfileForm() {
    // Imports States along with types from state manager (AppProvider)
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile }= useContext(MiscContext);
    const { isLoggedIn, user } = useContext(UserContext);
    const [opened, { open, close }] = useDisclosure(false);


//

    // {/* {isMobile ? <MobileClientSideBar /> : <ClientSideBar />} */}

    // interface User {
    //     userId: string;
    //     displayName?: string | null;
    //     email?: string | null;
    //     first_name: string;
    //     last_name: string;
    //     address: string;
    //     profile_img: string;
    //     friend_since: string;
    // }

const personalInfo = (

        <>
        <Modal opened={opened} onClose={close} title="Authentication" centered>
        <div>
        <h2 className="font-bold text-lg">Personal Info</h2>
        <div className="info-container text-sm" >
        <li><span className="font-bold">First Name: </span>{user?.first_name}</li>
        <li><span className="font-bold">Last Name: </span>{user?.last_name}</li>
        <li><span className="font-bold">Email: </span>{user?.email}</li>
        <li><span className="font-bold">Address </span>{user?.address}</li>
        </div>
    </div>
        </Modal>
  
        <Group position="center">
          <Button className="bg-black" onClick={open}>Edit Profile Info</Button>
        </Group>
      </>
)



    return (
        <div className="tab-display-container">
{personalInfo}
        </div>
    );
}