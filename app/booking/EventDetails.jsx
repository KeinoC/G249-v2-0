"use client";
import React, { useContext, useState } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { MiscContext } from "../Context/MiscProvider/MiscContext";
import NavBar from "../home/NavBar";
import BookingStepper from "./BookingStepper";
import { Radio, MultiSelect, Divider, Slider, RangeSlider } from "@mantine/core";
import "./EventDetails.css";

export default function BookingPage() {
    const [eventType, setEventType] = useState(null);

    /// Event Type ///
    const eventTypeOptions = [
        { value: "baby-shower", label: "Baby Shower" },
        { value: "bday-adult", label: "Birthday Celebration (Adult)" },
        { value: "bday-child", label: "Birthday Celebration (Child)" },
        { value: "dinner", label: "Dinner Event" },
        { value: "bbq", label: "BBQ" },
        { value: "wedding", label: "Wedding" },
        { value: "other", label: "Other" },
    ];

    function RenderEventTypeChoices() {
        return (
            <MultiSelect
                className="text-yellow-600"
                data={eventTypeOptions}
                label="Choose Event Type"
                placeholder="Pick all that you like"
                withAsterisk
                dropdownType="modal"
                limit={3}
            />
        );
    }

    /// Guests ///
    const marks = [
        { value: 10, label: "10 guests" },
        { value: 30, label: "20 guests" },
        { value: 40, label: "40 guests" },
        { value: 50, label: "50 guests" },
        { value: 60, label: "60 guests" },
    ];

    function RenderGuestSlider() {
        return (
            <div className="my-9">
            <h4>Select estimated number of guests:</h4>
                      <RangeSlider
      className="my-2"
      labelAlwaysOn
      defaultValue={[40,50]}
      min={10}
      step={1}
      max={60}
      marks={[
        { value: 10, label: "10" },
        { value: 20, label: "20" },
        { value: 30, label: "30" },
        { value: 40, label: "40" },
        { value: 50, label: "50" },
        { value: 60, label: "60" },
    ]}
      />
            </div>

        );
    }

    return (
        <div className="h-screen">
            <div className="flex flex-col text-yellow-600">
                <Divider my="sm" label="Event Details" labelPosition="center" />
                <RenderEventTypeChoices />
                <RenderGuestSlider />
            </div>
        </div>
    );
}
