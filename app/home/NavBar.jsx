"use client";
import React, { useContext } from "react";
import "./NavBar.css";
import Link from "next/link";
import { UserContext } from "../Context/UserProvider/UserContext";
import { app } from "../../Firebase/firebase-config";

export default function NavBar() {
    const { user, handleLogout, isLoggedIn } = useContext(UserContext);

    return (
        <div className="navbar">
            <li className="nav-item">
                <Link href="/">GARDEN249</Link>
            </li>

            {isLoggedIn && (
                <li className="nav-item">
                    <Link href="/dashboard">Dashboard</Link>
                </li>
            )}

            {isLoggedIn && (
                <li className="nav-item">
                    <Link href="/events">Events</Link>
                </li>
            )}

            {user?.email ? (
                <li onClick={handleLogout} className="nav-item">
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
