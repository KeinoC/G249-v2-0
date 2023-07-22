import React, { useContext, useState, useEffect } from "react";
import { Modal, Group, Button, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UserContext, User } from "../../Context/UserProvider/UserContext";

export default function ClientProfileForm() {
    const { user, setUser, updateUser, createUser, getUserById, fullUser } =
        useContext(UserContext);
    const [opened, { open, close }] = useDisclosure(false);

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
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        email: user?.email || "",
        address: user?.address || "",
        profile_img: user?.profile_img || "",
        friend_since: user?.friend_since || "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        await e.preventDefault();
        setUser(formData);
        await updateUser(formData);
        // await createUser(formData);
        if (!user.userId) {
            await createUser({
                variables: {
                    "email": user?.email,
                    "userId": user?.userId
                }
            })
        }
        close();
    };

    console.log("user", user);

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
                        name="first_name"
                        value={formData.first_name}
                        placeholder={formData.first_name}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Last Name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder={formData.last_name}
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
                        name="profile_img"
                        value={formData.profile_img}
                        onChange={handleChange}
                        placeholder={formData.profile_img}
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
