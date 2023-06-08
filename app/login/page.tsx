"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider/UserContext";
import LoginForm from "./LoginForm"

export default function Login() {
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
        handleSocialLogin,
        googleProvider,
        facebookProvider,
    } = useContext(UserContext);

    return (
        <div>
<LoginForm />
        </div>
    );
}
