import React, { createContext, useState, useEffect } from "react";
import {
    getUserById,
    deleteUserById,
    updateUser,
} from "@/Firebase/endpoints/users";
import {
    app,
    db,
    googleProvider,
    facebookProvider,
} from "../../../Firebase/firebase-config";
import firebase from "firebase/app";
import "firebase/auth";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "./UserMutations";
import GET_FULL_USERS_QUERY from './UserQueries'

export const UserContext = createContext({
    user: undefined,
    setUser: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    isLoggedIn: false,
    setPassword: () => {},
    handleSignup: async () => {},
    handleSocialSignup: async () => {},
    handleLogin: async () => {},
    handleLogout: async () => {},
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
    getUserById: async () => {},
    deleteUserById: async () => {},
    updateUser: async () => {},
    createUser: async () => {},
    fullUser: undefined,
});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(undefined);
    const [fullUser, setFullUser] = useState(undefined);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [createUser, {data, loading, error}] = useMutation(CREATE_USER_MUTATION);

    const handleSignup = async () => {
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((cred) => {
                    return db.collection("users").doc(cred.user?.uid).set({
                        email: email,
                    });
                });
            window.location.href = "/dashboard";
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSocialSignup = async (provider) => {
        try {
            await app.auth().signInWithPopup(provider);
            window.location.href = "/dashboard";
        } catch (error) {
            console.log(error.message);
        }
    };


    // current user is the firebase authorized user
    const handleLogin = async () => {
        try {
            await app.auth().signInWithEmailAndPassword(email, password);
            const currentUser = app.auth().currentUser;
            if (currentUser) {
                const user = {
                    userId: currentUser.uid,
                    email: currentUser.email || "",
                    firstName: "",
                    lastName: "",
                    address: "",
                    profileImg: "",
                    createdAt: new Date().toString(),
                };
                setUser(user);
                 // graphql mutation
            }
            window.location.href = "/dashboard";
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = app.auth().onAuthStateChanged((user) => {
            if (user) {
                const authUser = {
                    email: user.email || "",
                    userId: user.uid,
                    firstName: "",
                    lastName: "",
                    address: "",
                    profileImg: "",
                    createdAt: new Date().toString(),
                };
                setUser(authUser);
                setIsLoggedIn(true);
            } else {
                setEmail("");
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await app.auth().signOut();
            setUser(undefined);
            setIsLoggedIn(false);
            window.location.href = "/";
        } catch (error) {
            console.log(error.message);
        }
    };

    // const createUser = async (userData) => {
    //     try {
    //         const existingUserQuery = await db
    //             .collection("users")
    //             .where("email", "==", userData.email)
    //             .get();

    //         if (!existingUserQuery.empty) {
    //             console.log("User with email already exists");
    //             return "";
    //         }

    //         const docRef = db.collection("users").doc(userData.userId);
    //         await docRef.set({
    //             id: docRef.id,
    //             email: userData.email,
    //         });

    //         console.log("User created with ID:", docRef.id);
    //         return docRef.id;
    //     } catch (error) {
    //         console.error("Error creating user:", error);
    //         throw error;
    //     }
    // };

    const updateUser = async (additionalData) => {
        const user = app.auth().currentUser;

        try {
            const uid = user?.uid;

            if (uid) {
                await db.collection("users").doc(uid).update(additionalData);
                console.log("User data updated successfully");
            } else {
                throw new Error("User not found");
            }
        } catch (error) {
            console.error("Error updating user data:", error);
            throw error;
        }
    };

    const getAllUsers = async () => {
        try {
            const snapshot = await db.collection("users").get();
            const users = snapshot.docs.map((doc) => ({
                userId: doc.id,
                ...doc.data(),
            }));
            return users;
        } catch (error) {
            console.error("Error retrieving users:", error);
            throw error;
        }
    };

    const getUserById = async (userId) => {
        try {
            const userRef = db.collection("users").doc(userId);
            const doc = await userRef.get();

            if (doc.exists) {
                return doc.data();
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error retrieving user:", error);
            throw error;
        }
    };

    const deleteUserById = async (userId) => {
        try {
            const userRef = db.collection("users").doc(userId);
            await userRef.delete();
            console.log("User deleted with ID:", userId);
        } catch (error) {
            console.error("Error deleting user:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const fetchedUser = await getUserById(user.userId);
                    setFullUser(fetchedUser);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            }
        };

        fetchData();
    }, [user]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                email,
                setEmail,
                password,
                setPassword,
                handleSignup,
                handleSocialSignup,
                handleLogin,
                handleLogout,
                googleProvider,
                facebookProvider,
                updateUser,
                getUserById,
                deleteUserById,
                isLoggedIn,
                createUser,
                fullUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
