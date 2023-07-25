import React, { useContext, useState, useEffect } from "react";
import { Modal, Group, Button, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UserContext, User } from "../../Context/UserProvider/UserContext";

export default function ClientProfileForm() {
    const { user, setUser, updateUser, createUser, userToUpdate, setUserToUpdate, getUserById, fullUser } =
        useContext(UserContext);
    const [opened, { open, close }] = useDisclosure(false);
    // const [currentTime, setCurrentTime] = useState(new Date().toString());

    // const refreshUser = async () => {
    //     if (user) {
    //         try {
    //             const firestoreUser: User | void = await getUserById(user?.userId);
    //             setUser(firestoreUser);
    //             console.log("gotUser")
    //         } catch (error) {
    //             console.error("Error fetching user:", error);
    //         }
    //     }
    // };

    const [formData, setFormData] = useState({
        userId: user?.userId || "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        address: user?.address || "",
        profileImg: user?.profileImg || "",
        createdAt: user?.createdAt || new Date().toString(),
    });

    console.log(user)

    const handleChange = (e) => {
        e.preventDefault();
        // setCurrentTime(new Date().toString());
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        setUserToUpdate({
            ...userToUpdate, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        await e.preventDefault();
        setUser(userToUpdate);
        await updateUser(userToUpdate);
        close();
    };

    console.log(userToUpdate);

    const personalInfo = (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Authentication"
                centered
            >
                <form onSubmit={handleSubmit}>
                    <h2 className="font-bold text-lg">Personal Info</h2>
                    <TextInput
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        placeholder={formData.firstName}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={formData.lastName}
                    />
                    <TextInput
                        label="EmailAddress"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={formData.email}
                    />
                    <TextInput
                        label="Profile Image URL"
                        name="profileImg"
                        value={formData.profileImg}
                        onChange={handleChange}
                        placeholder={formData.profileImg}
                    />
                    <TextInput
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder={formData.address}
                    />
                    <div style={{ marginTop: "1rem" }}>
                        <Button className="bg-black" type="submit">
                            Save
                        </Button>
                    </div>
                </form>
            </Modal>

            <Group position="center">
                <Button className="bg-black" onClick={open}>
                    Edit Profile Info
                </Button>
            </Group>
        </>
    );

    return <div className="tab-display-container">{personalInfo}</div>;
}
