import React, { useContext } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";
import { TextInput, Checkbox, Button, Group, Box, Select } from '@mantine/core';
import { createEvent } from "../../Firebase/endpoints/events";

export default function NewEventForm() {
  const NewBooking = useContext(EventContext);
  const { booking, setBooking } = NewBooking || {};

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    setBooking((prevEvent) => ({
      ...prevEvent,
      [inputName]: inputValue,
    }));
  };

  const handleSelectionChange = (value) => {
    setBooking((prevEvent) => ({
      ...prevEvent,
      ["bookingStatus"]: value,
    }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();

    if (booking.eventHost && booking.eventDate && booking.bookingStatus) {
      createEvent(booking);
      setBooking({
        eventHost: '',
        eventDate: '',
        bookingStatus: '',
      });
    } else {
      console.log('Please fill in all required fields');
    }
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={handleSubmitBooking}>
        <Select
          onChange={handleSelectionChange}
          value={booking ? booking.bookingStatus : ""}
          name="bookingStatus"
          placeholder="Enter booking status"
          data={[
            { value: "Inquiry", label: "Inquiry" },
            { value: "Pending", label: "Pending" },
            { value: "Contract", label: "Contract" }
          ]}
        />

        <TextInput
          name="eventHost"
          value={booking?.eventHost?.email ?? ""}
          type="text"
          placeholder="Host's full name"
          onChange={handleInputChange}
        />
        <TextInput
          name="eventDate"
          value={booking?.eventDate?.toString().split("T")[0] ?? ""}
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
