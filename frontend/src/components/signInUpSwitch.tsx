import { Button, Stack, Box } from "@mui/material";

interface SwitchProps {
    isSignIn: boolean;
    handleSignInButton: () => void;
    handleSignUpButton: () => void;
}

export default function SignInUpSwitch(props: SwitchProps) {
    let { isSignIn, handleSignInButton, handleSignUpButton } = props;

    return (
        <Box
            sx={{
                marginTop: 3,
                marginBottom: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                maxWidth={300}
            >
                <Button
                    variant="text"
                    size="small"
                    style={{
                        borderBottom: isSignIn
                            ? "2px solid #C059FF"
                            : "2px solid #fff",
                        color: isSignIn ? "#fff" : "#FFFFFF52",
                        borderRadius: 0,
                        width: 140,
                    }}
                    onClick={handleSignInButton}
                >
                    Войти
                </Button>
                <Button
                    variant="text"
                    size="small"
                    style={{
                        borderBottom: isSignIn
                            ? "2px solid #fff"
                            : "2px solid #605DE3",
                        color: isSignIn ? "#FFFFFF52" : "#fff",
                        borderRadius: 0,
                        width: 140,
                    }}
                    onClick={handleSignUpButton}
                >
                    Регистрация
                </Button>
            </Stack>
        </Box>
    );
}
