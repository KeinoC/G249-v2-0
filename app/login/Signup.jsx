import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider/UserContext";
import { Button, Group } from "@mantine/core";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";

const CustomGoogleButton = ({ onClick, children }) => {
    return (
        <Button onClick={onClick}>
            <AiFillGoogleSquare />
            {children}
        </Button>
    );
};

const CustomFacebookButton = ({ onClick, children }) => {
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
        // handleSocialLogin,
        googleProvider,
        facebookProvider,
    } = useContext(UserContext);

    return (
        <div className="flex flex-col">
            <h1 className="text-white self-center">Signup</h1>
            <form className="flex flex-col justify-around m-5" onSubmit={handleSignup}>
                <input
                className="h-10 mx-20 my-5 flex p-5 rounded"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                className="h-10 mx-20 my-5 flex p-5 rounded"
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="bg-black mx-20 my-5" onClick={handleSignup}>Signup with Email</Button>
                {/* <button onClick={() => handleSocialSignup(googleProvider)}>Signup with Google</button>
        <button onClick={() => handleSocialSignup(facebookProvider)}>Signup with Facebook</button> */}
            </form>
        </div>
    );
}
