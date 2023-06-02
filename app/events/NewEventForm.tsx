"use client";
import React, { useContext } from "react";
import { EventContext, GEvent } from "../Context/EventProvider/EventContext";
import { TextInput, Checkbox, Button, Group, Box, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { createEvent } from "../../Firebase/endpoints/events"



export default function NewEventForm() {

  // const { newEvent, setNewEvent } = useContext(EventContext);
  const NewEventListing = useContext(EventContext)
  const {newEvent, setNewEvent} = NewEventListing || {}

  // console.log(newEvent ? newEvent : "testing")

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const inputValue = e.target.value;
  const inputName = e.target.name;

  setNewEvent((prevEvent: GEvent) => ({
    ...prevEvent,
    [inputName]: inputValue,
  }));
};

const handleSelectionChange = (value: "string") => {
  setNewEvent((prevEvent: GEvent) => ({
    ...prevEvent, ["bookingStatus"] : value
  }))
};

/// error: 'newEvent' is possibly 'undefined'. --- trying to fix case where Event is possibly undefined.


const handleSubmitNewEvent = (e: React.FormEvent) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Check if all required fields are filled before submitting the form
  if (newEvent.eventHost && newEvent.eventDate && newEvent.bookingStatus) {
    createEvent(newEvent);
    setNewEvent({
      eventHost: '',
      eventDate: '',
      bookingStatus: '',
    });
  } else {
    // Handle the case when required fields are not filled
    console.log('Please fill in all required fields');
  }
};


  return (
    <Box maw={300} mx="auto">
    <form onSubmit={handleSubmitNewEvent}>

      <Select
      onChange={handleSelectionChange}
      value={newEvent ? newEvent.bookingStatus : ""}
      name="bookingStatus"
      placeholder="Enter booking status"
      data={[
        {value: "Inquiry", label: "Inquiry" },
        {value: "Pending", label: "Pending" },
        {value: "Contract", label: "Contract" }
]}
/>

      <TextInput
        name="eventHost"
        value={newEvent ? newEvent.eventHost : ""}
        type="text"
        placeholder="Host's full name"
        onChange={handleInputChange}
      />
      <TextInput
        name="eventDate"
        value={newEvent.eventDate ? newEvent.eventDate : ""}
        type="date"
        placeholder="Event Date"
        onChange={handleInputChange}
      />
    <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
    </form>
    </Box>
  );
}
