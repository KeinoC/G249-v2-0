"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider/UserContext";
import { MediaContext } from "../Context/MediaProvider/MediaContext";
import NavBar from "../home/NavBar"
import ExploreMainComponent from "./ExploreMainComponent"
import { Carousel } from '@mantine/carousel';
import Image from "next/image";

export default function ExploreSlide() {
    const {
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        handleSignup,
        handleSocialSignup,
        handleLogin,
        // handleSocialLogin,
        googleProvider,
        facebookProvider,
    } = useContext(UserContext);
    const { slideImages } = useContext(MediaContext)

const slideDisplay = slideImages.map((slideImage, index) => {
    return (
        <Carousel.Slide className="object-cover"  key={index}>
            <img className="object-cover aspect-1/1" src={slideImage.url} alt={slideImage.name} />
        </Carousel.Slide>
    )
})


    return (
        <Carousel className="width-full" maw={320} mx="auto" withIndicators height={300}>
        {slideDisplay}
      </Carousel>
    );
}