import { app, db } from "../firebase-config";
import firebase from "firebase/app";

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

export const createUser = async (userData: User): Promise<string> => {
    try {
        const docRef = await db.collection("users").add(userData);
        console.log("User created with ID:", docRef.id);

        return docRef.id;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export const updateUser = async (
    additionalData: Record<string, any>
): Promise<void> => {
    const user = app.auth().currentUser;

    try {
        // Update the additional data
        await user?.updateProfile(additionalData);

        console.log("Additional data updated successfully");
    } catch (error) {
        console.error("Error updating additional data:", error);
        throw error;
    }
};

export const getAllUsers = async (): Promise<User[]> => {
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

export const getUserById = async (userId: string): Promise<void> => {
    try {
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

export const deleteUserById = async (userId: string): Promise<void> => {
    try {
        const userRef = db.collection("users").doc(userId);
        await userRef.delete();
        console.log("User deleted with ID:", userId);
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};
