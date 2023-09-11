import { Container, Paper, Typography, Stack, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface MapCardProps {
    redirect?: string;
    name: string;
    fill: string;
    opacity: number;
    width?: number;
    height?: number;
}

export default function MapCard(props: MapCardProps) {
    // create redirect to map page on div click
    const navigate = useNavigate();

    const { fill, opacity, name } = props;

    return (
        <div
            className="mapCard"
            onClick={() => {
                navigate(props.redirect || "/activity");
            }}
        >
            <Paper
                square
                className="mapItem"
                sx={{
                    background: fill,
                    width: props.width || 284,
                    height: props.height || 234,
                    position: "relative",
                    opacity: opacity || 0.8,

                    borderTop: "2px solid #FFFFFF",
                    borderLeft: "2px solid #FFFFF",
                }}
            >
                <Container>
                    <Stack
                        sx={{ mt: 2 }}
                        justifyContent={"center"}
                        alignContent={"center"}
                    >
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{
                                borderRadius: "8px",
                                border: "2px solid #FFFFFF",
                                p: 2,
                                color: "#FFFFFF",
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                            }}
                        >
                            {name}
                        </Typography>
                        <Avatar
                            sx={{
                                m: "auto",
                                height: 100,
                                width: 100,
                                mt: 3,
                            }}
                        >
                            <img
                                src="https://i.imgur.com/7bIhC0d.png"
                                alt="avatar"
                            />
                        </Avatar>
                    </Stack>
                </Container>
            </Paper>
        </div>
    );
}
