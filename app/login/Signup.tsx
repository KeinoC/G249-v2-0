"use client"
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider/UserContext";
import { Button, ButtonProps,Group } from "@mantine/core";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";

interface CustomButtonProps {
    onClick: () => Promise<void>;
    children: React.ReactNode;
}

const CustomGoogleButton: React.FC<CustomButtonProps> = ({
    onClick,
    children,
}) => {
    return (
        <Button onClick={onClick}>
            <AiFillGoogleSquare />
            {children}
        </Button>
    );
};

const CustomFacebookButton: React.FC<CustomButtonProps> = ({
    onClick,
    children,
}) => {
    return (
        <Button onClick={onClick}>
            <AiFillFacebook />
            {children}
        </Button>
    );
};

export default function Signup() {
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
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignup}>Signup with Email</button>
          {/* <button onClick={() => handleSocialSignup(googleProvider)}>Signup with Google</button>
          <button onClick={() => handleSocialSignup(facebookProvider)}>Signup with Facebook</button> */}
          </form>
        </div>
      );
    };