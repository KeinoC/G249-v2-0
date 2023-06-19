"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext";
import NavBar from "../home/NavBar";
import EventCalendar from "../dashboard/MyEvents/EventCalendar";
import { Stepper, Button, Group, Divider } from "@mantine/core";
import Progress from "./RingProgress";
import WalkthroughForm from "./WalkthroughForm";

export default function BookingStepper() {
    const [active, setActive] = useState(1);

    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    return (
        <div className="flex flex-col">
            <Group className=" min-h-fit justify-around p-0 m-0  " position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                    Back
                </Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
            <Divider my="sm" />

            <Stepper className="text-sm flex flex-col h-[75vh] w-screen px-5" active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="Walkthrough" description="Toggle to schedule walkthrough">
                <Divider my="sm" label="Schedule Walkthrough" labelPosition="center" />
                    <WalkthroughForm />
                </Stepper.Step>
                <Stepper.Step label="Second step" description="Verify email">
                <Divider my="sm" />
                    <EventCalendar />
                    Step 2 content: Verify email
                </Stepper.Step>
                <Stepper.Step label="Final step" description="Get full access">
                    Step 3 content: Get full access
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
