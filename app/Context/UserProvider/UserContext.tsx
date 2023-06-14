"use client";
import React, {
    createContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
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

export interface User {
    userId: string;
    email?: string | null;
    first_name: string;
    last_name: string;
    address: string;
    profile_img: string;
    friend_since: string;
}

interface UserContextProps {
    user: User | undefined | void | null;
    setUser: Dispatch<SetStateAction<User | undefined | void | null>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    isLoggedIn: boolean;
    // setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    handleSignup: () => Promise<void>;
    handleSocialSignup: (provider: firebase.auth.AuthProvider) => Promise<void>;
    handleLogin: () => Promise<void>;
    // handleSocialLogin: (provider: firebase.auth.AuthProvider) => Promise<void>;
    handleLogout: () => Promise<void>;
    googleProvider: firebase.auth.GoogleAuthProvider;
    facebookProvider: firebase.auth.FacebookAuthProvider;
    // getAllUsers: () => Promise<void>;
    getUserById: (userId: string) => Promise<User | void | null | undefined>;
    deleteUserById: (userId: string) => Promise<User | void | undefined | null>;
    updateUser: (additionalData: { [key: string]: any }) => Promise<void>;
    createUser: (user: User) => Promise<string | void>;
    fullUser: User | void | null | undefined;
}

export const UserContext = createContext<UserContextProps>({
    user: undefined,
    setUser: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    isLoggedIn: false,
    // setIsLoggedIn: () => {},
    setPassword: () => {},
    handleSignup: async () => {},
    handleSocialSignup: async () => {},
    handleLogin: async () => {},
    // handleSocialLogin: async () => {},
    handleLogout: async () => {},
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
    // getAllUsers: async () => {},
    getUserById: async () => {},
    deleteUserById: async () => {},
    updateUser: async () => {},
    createUser: async () => {},
    fullUser: undefined,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | undefined | void | null>(undefined);
    const [fullUser, setFullUser] = useState<User | undefined | void | null>(
        undefined
    ); // to house firestore user which has all details

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            // Signup successful
            // Redirect to dashboard
            window.location.href = "/dashboard";
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle signup error
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ///------------------------------- "USER AUTHENTICATION LOGIC"-------------------------------///
    ////////////////////////////////////////////////////////////////////////////////////////////////

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
            const currentUser = app.auth().currentUser;
            if (currentUser) {
                const user: User = {
                    userId: currentUser.uid,
                    email: currentUser.email || "",
                    first_name: "",
                    last_name: "",
                    address: "",
                    profile_img: "",
                    friend_since: "",
                };
                setUser(user);
            }
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
                    userId: user.uid,
                    first_name: "",
                    last_name: "",
                    address: "",
                    profile_img: "",
                    friend_since: "",
                };
                setUser(authUser);
                setIsLoggedIn(true);
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

    // const handleSocialLogin = async (provider: firebase.auth.AuthProvider) => {
    //     try {
    //         await app.auth().signInWithPopup(provider);
    //         // Social login successful
    //         const currentUser = app.auth().currentUser;
    //         if (currentUser) {
    //             const {
    //                 uid: userId,
    //                 dName: displayName,
    //                 email,
    //                 photoURL: profile_img,
    //             } = currentUser;
    //             const user: User = {
    //                 userId,
    //                 displayName: dName,
    //                 email: email || "",
    //                 first_name: "",
    //                 last_name: "",
    //                 address: "",
    //                 profile_img: profile_img || "",
    //                 friend_since: "",
    //             };
    //             setUser(user);
    //         }
    //         // Redirect to dashboard
    //         window.location.href = "/dashboard";
    //     } catch (error) {
    //         console.log((error as firebase.auth.Error).message);
    //         // Handle social login error
    //     }
    // };

    const handleLogout = async () => {
        try {
            await app.auth().signOut();
            // Logout successful
            setUser(undefined);
            setIsLoggedIn(false); // Reset user state
            // Redirect to home page
            window.location.href = "/";
        } catch (error) {
            console.log((error as firebase.auth.Error).message);
            // Handle logout error
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ///------------------------------- "USER CRUD ACTIONS &  LOGIC"------------------------------///
    ////////////////////////////////////////////////////////////////////////////////////////////////

    /// setting full user object on login
    // useEffect(() => {
    //     if (user.userId?) {

    //     }
    // }, [user])

    /// User to update

    // const user = firebase.auth().currentUser;

    // // Update the additional data
    // user
    //   .updateProfile({
    //     key1: "value1",
    //     key2: "value2",
    //   })
    //   .then(() => {
    //     console.log("Additional data updated successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Error updating additional data:", error);
    //   });

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

    const createUser = async (
        userData: User
    ): Promise<string | void | undefined> => {
        try {
            // Check if user already exists
            const existingUserQuery = await db
                .collection("users")
                .where("email", "==", userData.email)
                .get();

            if (!existingUserQuery.empty) {
                // User already exists, handle accordingly
                console.log("User with email already exists");
                return ""; // or throw an error, or handle as needed
            }

            // Create new user
            const docRef = db.collection("users").doc(userData.userId); // Use userData.userId as the document ID
            await docRef.set({
                id: docRef.id,
                email: userData.email,
            });

            console.log("User created with ID:", docRef.id);
            return docRef.id;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    };

    const updateUser = async (
        additionalData: Record<string, any>
    ): Promise<void> => {
        const user = app.auth().currentUser;

        try {
            // Get the UID of the current user
            const uid = user?.uid;

            if (uid) {
                // Update the user document in the "users" collection
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

    const getAllUsers = async (): Promise<User[]> => {
        try {
            const snapshot = await db.collection("users").get();
            const users: User[] = snapshot.docs.map(
                (doc) =>
                    ({
                        userId: doc.id,
                        ...doc.data(),
                    } as User)
            );
            return users;
        } catch (error) {
            console.error("Error retrieving users:", error);
            throw error;
        }
    };

    const getUserById = async (userId: string): Promise<User | null> => {
        try {
            const userRef = db.collection("users").doc(userId);
            const doc = await userRef.get();

            if (doc.exists) {
                // Return the user data
                return doc.data() as User;
            } else {
                return null; // Return null if the user doesn't exist
            }
        } catch (error) {
            console.error("Error retrieving user:", error);
            throw error;
        }
    };

    const deleteUserById = async (userId: string): Promise<void> => {
        try {
            const userRef = db.collection("users").doc(userId);
            await userRef.delete();
            console.log("User deleted with ID:", userId);
        } catch (error) {
            console.error("Error deleting user:", error);
            throw error;
        }
    };

    //////////////////////////////////////////calling Cruds //////////////////////////////////

    //setting Full firestore user to fullUser state
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
    }, [getUserById, user]);

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////

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
                // handleSocialLogin,
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
