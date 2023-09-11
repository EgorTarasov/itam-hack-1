import {
    Stack,
    Button,
    Container,
    CssBaseline,
    Box,
    Grid,
    TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";

// import { Typography} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/user/authSlice";
import { useRegisterMutation } from "../features/user/authApiSlice";

export default function SignUpForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register /*{ isLoading }*/] = useRegisterMutation();

    const [error, SetErr] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignUp(e: FormEvent<HTMLFormElement>) {
        console.log(username);
        e.preventDefault();
        if (username.match(/^[a-zA-Z]+$/) && username.split(" ").length <= 2) {
            SetErr("некоректный ФИО");
        } else {
            try {
                const signUpData = {
                    first_name: username.split(" ")[0],
                    last_name: username.split(" ")[1],
                    email: email,
                    password: password,
                };
                console.log(signUpData);
                const data = await register(signUpData).unwrap();
                console.log(data);

                dispatch(
                    setCredentials({
                        accessToken: data.access_token,
                        user: null,
                    }),
                );
                // if token
                navigate("/survey");
            } catch (err: any) {
                if (err.response) {
                    console.log(err.response);
                } else if (err.response.status === 400) {
                    console.log(err.response);
                } else if (err.response.status === 401) {
                    console.log(err.response);
                } else {
                    console.log(err.response);
                }
                console.log(err);
            }
        }
    }

    return (
        <Box component="form" onSubmit={handleSignUp} sx={{ ml: 2, pl: 2 }}>
            <Stack direction="column">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="username"
                                        label="Фио"
                                        name="username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        sx={{
                                            background: "#F0F1F5",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Почта"
                                        name="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        sx={{
                                            background: "#F0F1F5",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Пароль"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        sx={{
                                            background: "#F0F1F5",
                                            borderRadius: 3,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Регистрация
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Stack>
        </Box>
    );
}
