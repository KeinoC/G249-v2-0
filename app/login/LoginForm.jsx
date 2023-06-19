"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserProvider/UserContext";
import { Button } from "@mantine/core";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";

const CustomButton = ({ onClick, children }) => {
    return <Button onClick={onClick}>{children}</Button>;
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

            <form onSubmit={handleLogin}>
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
                <Button className="bg-black" onClick={handleLogin}>
                    Login with Email
                </Button>
                <Button className="bg-black" onClick={handleLogout}>
                    Logout
                </Button>
            </form>

            {/* 
      <Group position="center" sx={{ padding: 15 }}>
        <CustomButton onClick={() => handleSocialLogin(googleProvider)}>
          <AiFillGoogleSquare />
          Login with Google
        </CustomButton>
        <CustomButton onClick={() => handleSocialLogin(facebookProvider)}>
          <AiFillFacebook />
          Login with Facebook
        </CustomButton>
      </Group> */}
        </div>
    );
}
