import { app, db } from "../firebase-config";
import firebase from "firebase/app";

// Throttle configuration
const throttleConfig = {
    maxRequests: 1, // Maximum number of requests allowed within the time window
    pendingRequests: 0, // Number of pending requests
    timeWindow: 1000, // Time window in milliseconds (e.g., 1 second)
    requestQueue: [], // Queue to track pending requests
};

// Throttle function to check and manage request limits
const throttleFunction = () =>
    new Promise((resolve) => {
        if (throttleConfig.pendingRequests >= throttleConfig.maxRequests) {
            // If the maximum limit is reached, wait for the time window to pass before processing the request
            setTimeout(() => {
                throttleConfig.pendingRequests--;
                resolve();
            }, throttleConfig.timeWindow);
        } else {
            resolve();
        }

        // Increment the counter for pending requests
        throttleConfig.pendingRequests++;
    });

export const createUser = async (userData) => {
    try {
        await throttleFunction(); // Throttle the function

        const docRef = await db.collection("users").add(userData);
        console.log("User created with ID:", docRef.id);

        return docRef.id;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export const updateUser = async (additionalData) => {
    try {
        await throttleFunction(); // Throttle the function

        const user = app.auth().currentUser;

        // Update the additional data
        await user?.updateProfile(additionalData);

        console.log("Additional data updated successfully");
    } catch (error) {
        console.error("Error updating additional data:", error);
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        await throttleFunction(); // Throttle the function

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

export const getUserById = async (userId) => {
    try {
        await throttleFunction(); // Throttle the function

        const userRef = db.collection("users").doc(userId);
        const doc = await userRef.get();
        if (doc.exists) {
            // This line is not needed because the getUserById function is not supposed to return anything.
            // return {
            //     userId: doc.id,
            //     ...doc.data(),
            // } as User;
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error retrieving user:", error);
        throw error;
    }
};

export const deleteUserById = async (userId) => {
    try {
        await throttleFunction(); // Throttle the function

        const userRef = db.collection("users").doc(userId);
        await userRef.delete();
        console.log("User deleted with ID:", userId);
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};
