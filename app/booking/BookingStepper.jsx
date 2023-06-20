"use client";
import React, { useContext, useState, useClient } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext";
import NavBar from "../home/NavBar";
import EventCalendar from "../dashboard/MyEvents/EventCalendar";
import { Stepper, Button, Group, Divider } from "@mantine/core";
import Progress from "./RingProgress";
import WalkthroughForm from "./WalkthroughForm";
import BookingForm from "./BookingForm";
import EventDetails from "./EventDetails";
import "./BookingStepper.css"

export default function BookingStepper() {
    const [active, setActive] = useState(0);

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));



    return (
        <div className="flex flex-col text-yellow-600">
            <Group className=" min-h-fit justify-around p-0 m-0  " position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
            <Divider my="sm" />

            <Stepper separatorStyle={{height:5}} orientation="vertical" color="yellow" size="sm" radius="md" iconSize={25} className="text-sm flex flex-col h-[80vh] w-screen px-5" active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step className="text-yellow-600" label="Walkthrough" description="Schedule walkthrough">
                <Divider my="sm" label="Schedule Walkthrough" labelPosition="center" />
                    <WalkthroughForm />
                </Stepper.Step>
                <Stepper.Step className="text-yellow-600" label="Choose a Date" description="Choose your event date (feel free to add a backup date)">
                <Divider my="sm" />
                    <EventCalendar />
                    {/* <BookingForm /> */}
                </Stepper.Step>
                <Stepper.Step className="text-yellow-600" label="Event Details" description="Provide details of your event">
                    <EventDetails />
                </Stepper.Step>
                
                <Stepper.Step className="text-yellow-600" label="Overview" description="Confirm details of your inquiry before submitting">
                </Stepper.Step>

                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>

            </Stepper>
            <Divider my="sm" />

            <Group className=" flex justify-around p-0 m-0  " position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
        </div>
    );
}
