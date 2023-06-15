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

export default function LoginForm() {
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
        handleLogout,
    } = useContext(UserContext);



    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={()=>handleLogin()}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="bg-black" onClick={()=>handleLogin()}>Login with Email</Button>
            <Button className="bg-black" onClick={()=>handleLogout()}>Logout</Button>
</form>

{/* 
            <Group position="center" sx={{ padding: 15 }}>
                <CustomGoogleButton
                    onClick={() => handleSocialLogin(googleProvider)}
                >
                    Login with Google
                </CustomGoogleButton>
                <CustomFacebookButton
                    onClick={() => handleSocialLogin(facebookProvider)}
                >
                    Login with Facebook
                </CustomFacebookButton>
            </Group> */}
        </div>
    );
}
