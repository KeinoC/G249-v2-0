
"use client";

import React, { useContext } from "react";
import { EventContext } from "../Context/EventProvider/EventContext";

export default function NewEventForm() {
  const { newEvent, setNewEvent } = useContext(EventContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    setNewEvent((prevEvent: object) => ({
      ...prevEvent,
      [inputName]: inputValue,
    }));
  };

  return (
    <form>
      <select>
        <option value="Inquiry">Inquiry</option>
        <option value="Pending">Pending</option>
        <option value="Contract">Contract</option>
      </select>
      <input
        name="eventHost"
        value={newEvent ? newEvent.eventHost : ""}
        type="text"
        placeholder="Host's full name"
        onChange={handleInputChange}
      />
      <input
        name="eventDate"
        value={newEvent.eventDate ? newEvent.eventDate : null}
        type="date"
        placeholder="Event Date"
        onChange={handleInputChange}
      />
    </form>
  );
}

