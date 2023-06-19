"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider/UserContext";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import NavBar from "../home/NavBar";
import { Button, Group } from "@mantine/core";

export default function Login() {


    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm((prevState) => !prevState);
    };
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
        <div className="login-page">
            <NavBar />
            <div className="flex flex-col justify-around">
                {showLoginForm ? <LoginForm /> : <Signup />}
                <Button color="teal" className="bg-teal mx-20 my-5" onClick={toggleForm}>
                    {showLoginForm ? "Switch to Signup" : "Switch to Login"}
                </Button>
            </div>
        </div>
    );
}
