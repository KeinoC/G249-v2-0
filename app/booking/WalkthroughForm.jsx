"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext";
import NavBar from "../home/NavBar";
import { IconCheck, IconX } from "@tabler/icons-react";
import { Switch, Group, Divider } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import "./WalkthroughForm.css"

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
        <div className="flex flex-col ">
            <Switch
            className="switch my-5 flex justify-center"
                checked={booking.needsWalkthrough}
                onLabel="Yes"
                offLabel="No"
                size="lg"
                color="yellow"
                onChange={()=>handleWalkthroughToggle()}
                label="Would you like to schedule a walkthrough?"
                labelPosition="left"
            />

            {booking.needsWalkthrough && (
                <DateTimePicker
                className="date-input text-yellow-600 my-5 justify-center"
                color="yellow"
                    value={value}
                    onChange={handleDateChange}
                    label="Pick date and time"
                    placeholder="Pick date and time"
                    maw={400}
                    valueFormat="MMM D, YYYY hh:mm A"
                    mx="auto"
                    withAsterisk
                    dropdownType="modal"
                    
                />
            )}
        </div>
    );
}
