"use client"
import React, { useContext, useState } from "react";
import "./NavBar.css";
import Link from "next/link";
import { UserContext } from "../Context/UserProvider/UserContext";
import { app } from "../../Firebase/firebase-config";

export default function NavBar() {
    const { user, handleLogout } = useContext(UserContext);

    const logout = async () => {
        try {
            await app.auth().signOut();
            handleLogout();
        } catch (error) {
            console.log(error);
            // Handle logout error
        }
    };

console.log(user)

    return (
        <div className="navbar">
            <li className="nav-item">
                <Link href="/">GARDEN249</Link>
            </li>
            <li className="nav-item">
                <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link href="/events">Events</Link>
            </li>

            {user?.username ? (
                <li onClick={logout} className="nav-item">
                    Logout
                </li>
            ) : (
                <li className="nav-item">
                    <Link href="/login">Login</Link>
                </li>
            )}
        </div>
    );
}
