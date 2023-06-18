"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./HomeComponent.css";

const HomeComponent = () => {
    const router = useRouter();

    const handleExplore = () => {
        setTimeout(() => {
            router.push("./explore-the-garden");
        }, 1000);
    };

    const handleBook = () => {
        setTimeout(() => {
            router.push("./login");
        }, 1000);
    };

    return (
        <div className="home-page fixed">
<div className="g249-container flex flex-column w-screen h-screen">
  <div className="G-div">
    <div className="G text-10xl">G</div>
  </div>
  <div className="num-div text-4xl">
    <div className="num n2">2</div>
    <div className="num n4">4</div>
    <div className="num n9">9</div>
  </div>
</div>


            <div className="button-container">
                <button className="big-button" onClick={handleExplore}>
                    Explore
                </button>
                <button className="big-button" onClick={handleBook}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default HomeComponent;