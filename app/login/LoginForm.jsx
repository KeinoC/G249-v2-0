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
        <div className="flex flex-col justify-center">
            <h1 className="text-white self-center">Login</h1>

            <form className="flex flex-col" onSubmit={handleLogin}>
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
                <Button className="bg-black mx-20 my-5" onClick={handleLogin}>
                    Login with Email
                </Button>
                <Button className="bg-black mx-20 my-5" onClick={handleLogout}>
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
