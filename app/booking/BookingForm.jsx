"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext";
import NavBar from "../home/NavBar";
import EventCalendar from "../dashboard/MyEvents/EventCalendar";
import { Stepper, Button, Group } from "@mantine/core";
import Progress from "./RingProgress";

export default function BookingStepper() {
    const EventListing = useContext(EventContext);
    const { allEvents } = EventListing || {};
    const { isMobile } = useContext(MiscContext);
    const [active, setActive] = useState(1);

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    function handleWalkThrough() {
        // Handle walk through
    }

    return (
        <div className="flex flex-col">
            <Stepper className="text-sm" active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="First step" description="Create an account">
                    <EventCalendar />
                    Step 1 content: Create an account
                </Stepper.Step>
                <Stepper.Step label="Second step" description="Verify email">
                    Step 2 content: Verify email
                </Stepper.Step>
                <Stepper.Step label="Final step" description="Get full access">
                    Step 3 content: Get full access
                </Stepper.Step>
                <Stepper.Completed>
                    Completed, click back button to get to previous step
                </Stepper.Completed>
            </Stepper>

            <Group className="items-end" position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
        </div>
    );
}
