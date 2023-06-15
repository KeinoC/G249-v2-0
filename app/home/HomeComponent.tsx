"use client"
import React, { useContext } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import "./HomeComponent.css";

const HomeComponent = () => {

    const route =  useRouter();

function handleExplore() {
    setTimeout(() => {

        route.push("./explore-the-garden")
    },1000)
}

function handleBook() {
    setTimeout(() => {
        route.push("./login")
        
    }, 1000);
}

    return (
        <div className="home-page">
            <h1 className="garden">Garden 249</h1>
            <div className="button-container">
                    <button className="big-button" onClick={()=>handleExplore()}>Explore</button>
                    <button className="big-button" onClick={()=>handleBook()}>Book Now</button>
            </div>
        </div>
    );
};

export default HomeComponent;
