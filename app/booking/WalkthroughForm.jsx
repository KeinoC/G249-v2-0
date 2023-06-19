"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext";
import NavBar from "../home/NavBar";
import { IconCheck, IconX } from "@tabler/icons-react";
import { Switch, Group, Divider } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export default function WalkthroughForm() {
    const { booking, setBooking } = useContext(EventContext);

    const [value, setValue] = useState(new Date());

    const handleWalkthroughToggle = () => {
        setBooking((prevBooking) => ({
            ...prevBooking,
            needsWalkthrough: !prevBooking.needsWalkthrough,
        }));
    };

    const handleDateChange = (selectedDate) => {
        setBooking((prevBooking) => ({
            ...prevBooking,
            walkthroughDate: selectedDate,
        }));
        setValue(selectedDate);
    };

    return (
        <div className="flex flex-col">
            <Switch
            className="switch"
                checked={booking.needsWalkthrough}
                onLabel="Yes"
                offLabel="No"
                size="lg"
                color="teal"
                onChange={()=>handleWalkthroughToggle()}
                label="I would like to schedule a walkthrough"
                labelPosition="left"
            />

            {booking.needsWalkthrough && (
                <DateInput
                className="date-input"
                    value={value}
                    onChange={handleDateChange}
                    label="Date input"
                    placeholder="Date input"
                    maw={400}
                    mx="auto"
                />
            )}
        </div>
    );
}
