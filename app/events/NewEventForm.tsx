
"use client";

import React, { useContext, useState, useEffect } from "react";
import { EventContext } from "../Context/EventContext";

export default function NewEventForm() {

const {allEvents} = useContext(EventContext);


  return (
    <form>
      <select>
        <option value="Inquiry">Inquiry</option>
        <option value="Pending">Pending</option>
        <option value="Contract">Contract</option>
      </select>
      <input type="text" placeholder="Host's full name" />
      <input type="date" placeholder="Event Date" />
    </form>
  );
}
