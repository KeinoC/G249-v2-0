import React, { createContext, useState, useEffect } from "react";
import {
    app,
    googleProvider,
    facebookProvider,
} from "../../../Firebase/firebase-config";
import firebase from "firebase/app";
import "firebase/auth";

interface User {
    userId: string;
    username?: string | null;
    email?: string | null;
    first_name: string;
    last_name: string;
    address: string;
    profile_img: string;
    friend_since: string;
}

interface UserContextProps {
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSignup: () => Promise<void>;
    handleSocialSignup: (provider: firebase.auth.AuthProvider) => Promise<void>;
    handleLogin: () => Promise<void>;
    handleSocialLogin: (provider: firebase.auth.AuthProvider) => Promise<void>;
    handleLogout: () => Promise<void>;
    googleProvider: firebase.auth.GoogleAuthProvider;
    facebookProvider: firebase.auth.FacebookAuthProvider;
}

export const UserContext = createContext<UserContextProps>({
    user: undefined,
    setUser: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    setPassword: () => {},
    handleSignup: async () => {},
    handleSocialSignup: async () => {},
    handleLogin: async () => {},
    handleSocialLogin: async () => {},
    handleLogout: async () => {},
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSignup = async () => {
        try {
            await app.auth().createUserWithEmailAndPassword(email, password);
            // Signup successful
            // Redirect to dashboard
            window.location.href = "/dashboard";
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle signup error
        }
    };

    const handleSocialSignup = async (provider: firebase.auth.AuthProvider) => {
        try {
            await app.auth().signInWithPopup(provider);
            // Social signup successful
            // Redirect to dashboard
            window.location.href = "/dashboard";
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle social signup error
        }
    };

    const handleLogin = async () => {
        try {
            await app.auth().signInWithEmailAndPassword(email, password);
            // Login successful
            window.location.href = "/dashboard";
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle login error
        }
    };

    useEffect(() => {
        const unsubscribe = app.auth().onAuthStateChanged((user) => {
            if (user) {
                const authUser: User = {
                    email: user.email || "",
                    userId: "",
                    first_name: "",
                    last_name: "",
                    address: "",
                    profile_img: "",
                    friend_since: "",
                };
                setUser(authUser);
                setIsLoggedIn(true)
                // User is logged in
                // setEmail(user.email);
            } else {
                // No user is logged in
                setEmail("");
                setIsLoggedIn(false);
            }
        });

        // Clean up the subscription when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleSocialLogin = async (provider: firebase.auth.AuthProvider) => {
        try {
            await app.auth().signInWithPopup(provider);
            // Social login successful
            const currentUser = app.auth().currentUser;
            if (currentUser) {
                const {
                    uid: userId,
                    displayName: displayName,
                    email,
                    photoURL: profile_img,
                } = currentUser;
                const user: User = {
                    userId,
                    username: displayName,
                    email: email || "",
                    first_name: "",
                    last_name: "",
                    address: "",
                    profile_img: profile_img || "",
                    friend_since: "",
                };
                setUser(user);
            }
            // Redirect to dashboard
            window.location.href = "/dashboard";
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle social login error
        }
    };

    const handleLogout = async () => {
        try {
            await app.auth().signOut();
            // Logout successful
            setUser(undefined); // Reset user state
            // Redirect to home page
            window.location.href = "/";
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle logout error
        }
    };

    return (
        <UserContext.Provider
            value={{
                user: user || {
                    userId: "",
                    email: "",
                    first_name: "",
                    last_name: "",
                    address: "",
                    profile_img: "",
                    friend_since: "",
                },
                setUser,
                email,
                setEmail,
                password,
                setPassword,
                handleSignup,
                handleSocialSignup,
                handleLogin,
                handleSocialLogin,
                handleLogout,
                googleProvider,
                facebookProvider,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
