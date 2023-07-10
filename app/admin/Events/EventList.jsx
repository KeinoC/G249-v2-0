import React, { useContext } from "react";
import { EventContext } from "../../Context/EventProvider/EventContext";

export default function EventList() {
    const { allEvents } = useContext(EventContext);
    console.log(allEvents);

    const renderEvents = allEvents.map((event, index) => {
                console.log(event);
                return <div key={index}>{event.type}</div>;
            });


    return (
        <div>
            <h1>Event List----</h1>
            {renderEvents}
        </div>
    );
}
