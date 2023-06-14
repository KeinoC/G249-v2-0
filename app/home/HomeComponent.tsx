"use client"
import React, { useContext } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import "./HomeComponent.css";

const HomeComponent = () => {

    const route =  useRouter();

function handleExplore() {
    route.push("./explore")
}

function handleBook() {
    route.push("./login")
}

    return (
        <div className="home-page">
            <h1 className="garden">Garden 249</h1>
            <div className="button-container">
                <Link
                    href="/explore"
                >
                    <button className="big-button" onClick={handleExplore}>Explore</button>
                </Link>
                <Link
                    href="/login"
                >
                    <button className="big-button" onClick={handleBook}>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeComponent;
