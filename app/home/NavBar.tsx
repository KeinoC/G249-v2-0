"use client";
import React, { useContext, useState } from "react";
import "./Navbar.css";
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="navbar">
            <li className="nav-item">
              <Link href="/">GARDEN249</Link>
              </li>
            <li className="nav-item">
              <Link href="/events">Events</Link>
              </li>
            <li className="nav-item">Login</li>
        </div>
    );
}
document.querySelector("body")
