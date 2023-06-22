"user-client";
import React from "react";
import { Accordion } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import "./ClientFAQ.css";

const questions = [
    {
        q: "Is furniture included?",
        a: "Yes, the following furniture are included in the base price: 50x White acrylic banquet chairs, 12x stools, 6x cocktail tables 8x 6ft plastic tables",
    },
    {
        q: "What amenities are available?",
        a: "High-speed internet both inside and out, Kitchenette with sink & running water, Full-sized refrigerator",
    },
    {
        q: "What the pricing?",
        a: "The price is $850 for the day from 12pm noon to 12am midnight. Inquire for options of starting earlier than 12p. The 12a end time is non-negotiable.",
    },
];

export default function ClientFAQ() {
    const renderFAQ = questions.map((question, index) => {
        return (
            <>
            <Accordion.Item key={index} value={question.q}>
                <Accordion.Control>{question.q}</Accordion.Control>
                <Accordion.Content>{question.a}</Accordion.Content>
            </Accordion.Item>
            </>
        );
    });

    return (
        <div className="tab-display-container">
            <Accordion
                icon={<IconPlus size="1rem" />}
                styles={{
                    icon: {
                        "&[data-rotate]": {
                            transform: "rotate(45deg)",
                        },
                    },
                }}
            >
                {renderFAQ}
            </Accordion>
        </div>
    );
}
