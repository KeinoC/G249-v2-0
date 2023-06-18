"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider/UserContext";
import NavBar from "../home/NavBar"
import ExploreMainComponent from "./ExploreMainComponent"

export default function ExplorePage() {
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

    return (
<div>
<NavBar />
<ExploreMainComponent />
</div>
    );
}