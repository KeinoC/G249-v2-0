import React, { createContext, useState } from "react";
import {
    app,
    googleProvider,
    facebookProvider,
} from "../../../Firebase/firebase-config";
import firebase from "firebase/app";
import "firebase/auth";

interface User {
    userId: string;
    username: string;
    first_name: string;
    last_name: string;
    address: string;
    profile_img: string;
    friend_since: string;
}

interface UserContextProps {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSignup: () => Promise<void>;
    handleSocialSignup: (provider: firebase.auth.AuthProvider) => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({
    user: {
        userId: "",
        username: "",
        first_name: "",
        last_name: "",
        address: "",
        profile_img: "",
        friend_since: "",
    },
    setUser: () => {},
    setEmail: () => {},
    setPassword: () => {},
    handleSignup: async () => {},
    handleSocialSignup: async () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User>({
        userId: "1",
        username: "keinoc",
        first_name: "Keino",
        last_name: "Chichester",
        address: "Brooklyn, New York",
        profile_img:
            "https://i.pinimg.com/564x/75/e1/73/75e173eb37b5d047c9476ccc49cacf5b.jpg",
        friend_since: "Dec, 2018",
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            await app.auth().createUserWithEmailAndPassword(email, password);
            // Signup successful
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle signup error
        }
    };

    const handleSocialSignup = async (provider: firebase.auth.AuthProvider) => {
        try {
            await app.auth().signInWithPopup(provider);
            // Social signup successful
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle social signup error
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                setEmail,
                setPassword,
                handleSignup,
                handleSocialSignup,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
