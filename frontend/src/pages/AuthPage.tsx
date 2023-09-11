import { Box, Card, Stack, Typography, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

import SignInUpSwitch from "../components/signInUpSwitch";
import { useState, useEffect } from "react";
// @ts-ignore
import TelegramLoginButton from "react-telegram-login";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetCurrentUserMutation } from "../features/user/authApiSlice";
import { setCredentials } from "../features/user/authSlice";

export default function AuthPage() {
    const [isSignIn, setIsSignIn] = useState<boolean>(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [getCurrentUser] = useGetCurrentUserMutation();

    useEffect(() => {
        // try to get token from local storage
        const token: string | null = localStorage.getItem("token");
        console.log(`token from local storage: ${token}`);
        if (token != null) {
            dispatch(setCredentials({ accessToken: token, user: null }));
            navigate("/");
        }
    }, []);

    const handleSignUpButton = () => {
        setIsSignIn(false);
    };

    const handleSignInButton = () => {
        setIsSignIn(true);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 20,
                height: "100%",
                m: "auto",
            }}
        >
            <Stack
                direction="column"
                sx={{
                    background: "#ffffff1f",
                    pr: 2,
                    borderRadius: 3,
                }}
            >
                <SignInUpSwitch
                    isSignIn={isSignIn}
                    handleSignInButton={handleSignInButton}
                    handleSignUpButton={handleSignUpButton}
                />
                {isSignIn ? <SignInForm /> : <SignUpForm />}
            </Stack>
        </Box>
    );
}
