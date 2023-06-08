"use client"
import React from "react";
import { Button, ButtonProps, Group } from "@mantine/core";
import { AiFillFacebook, AiFillGoogleSquare } from "react-icons/ai";

export function GoogleButton(props: ButtonProps) {
    return (
        <Button
            leftIcon={<AiFillGoogleSquare />}
            variant="default"
            color="gray"
            {...props}
        >
            Continue with Google
        </Button>
    );
}

export function FacebookButton(props: ButtonProps) {
    return (
        <Button
            leftIcon={<AiFillFacebook />}
            sx={(theme) => ({
                backgroundColor: "#4267B2",
                color: "#fff",
                "&:not([data-disabled]):hover": {
                    backgroundColor: theme.fn.darken("#4267B2", 0.1),
                },
            })}
            {...props}
        >
            Sign in with Facebook
        </Button>
    );
}

export function SocialButtons() {
    return (
        <Group position="center" sx={{ padding: 15 }}>
            <GoogleButton />
            <FacebookButton />
        </Group>
    );
}
