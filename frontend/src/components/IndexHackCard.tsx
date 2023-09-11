import {
    Box,
    Grid,
    Autocomplete,
    TextField,
    Button,
    Stack,
} from "@mui/material";
import { Hackathon } from "../types";
import { useNavigate } from "react-router-dom";
type hackTag = {
    tag: string;
};

interface IndexHackCardProps {
    hack: Hackathon;
    findTeam: boolean;
}

export default function IndexHackCard(props: IndexHackCardProps) {
    const navigate = useNavigate();
    const { hack, findTeam } = props;
    console.log("Card");
    console.log(hack);

    function handleFindTeam() {
        console.log("searching for a team");
        navigate(`/teams/${hack.id}`);
    }

    return (
        <>
            <Box
                sx={{
                    width: 303,

                    borderRadius: 4,
                    background: "#ffffff1f",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    alignItems: "start",
                    p: 2.5,
                }}
            >
                <Grid container>
                    <Box
                        sx={{
                            width: 263,
                            height: 150,
                        }}
                    >
                        <img
                            style={{
                                width: "263px",
                                height: "150px",
                                borderRadius: "16px",
                            }}
                            src={hack.image ? hack.image : "/images/hack.png"}
                        />
                    </Box>
                    <Box>
                        <p
                            style={{
                                width: 263,
                                color: "#c059ff",
                                fontSize: 20,
                                fontStyle: "normal",
                                fontWeight: 700,
                                lineHeight: "normal",
                                marginTop: 20,
                                marginBottom: 12,
                            }}
                        >
                            {hack.title}
                        </p>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            flexDirection: "column",
                        }}
                    >
                        <p
                            style={{
                                marginTop: 0,
                                marginBottom: 8,
                                width: 223,
                                color: "#fff",
                                fontSize: 14,
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "normal",
                            }}
                        >
                            Регистрация до:{hack.registration_finish}
                        </p>
                        <p
                            style={{
                                marginTop: 0,
                                marginBottom: 8,
                                width: 223,
                                color: "#fff",
                                fontSize: 14,
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "normal",
                            }}
                        >
                            Команда: от {hack.team_minimum_size} до{" "}
                            {hack.team_maximum_size} участников
                        </p>
                        <p
                            style={{
                                marginTop: 0,
                                marginBottom: 8,
                                width: 223,
                                color: "#fff",
                                fontSize: 14,
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "normal",
                            }}
                        >
                            Призы: {hack.money_prize} ₽
                        </p>
                    </Box>
                    <Grid
                        container
                        sx={{
                            my: 2,
                        }}
                    >
                        {hack.tags && (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                {hack.tags.map((tag) => {
                                    return (
                                        <Box
                                            sx={{
                                                borderRadius: 2,
                                                border: 1,
                                                borderColor: "#c059ffcc",
                                                background: "#c059ff29",
                                                dispay: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginRight: 1,
                                                paddingTop: 0.5,
                                                paddingBottom: 0.5,
                                                paddingRight: 1,
                                                paddingLeft: 1,
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: "#fff",
                                                    textAlign: "center",
                                                    fontSize: 12,
                                                    fontStyle: "normal",
                                                    fontWeight: 400,
                                                    lineHeight: "normal",
                                                }}
                                            >
                                                {tag.tag}
                                            </p>
                                        </Box>
                                    );
                                })}
                            </Box>
                        )}
                    </Grid>
                    {findTeam && (
                        <Button
                            sx={{
                                my: 2,
                                width: "100%",
                                fontSize: "14px",
                                background: "#ffffff29",
                                borderRadius: 2,
                                border: "2 px solid #ffffff80",
                                color: "#ffffff",
                            }}
                            onClick={handleFindTeam}
                        >
                            Найти команду
                        </Button>
                    )}
                </Grid>
            </Box>
        </>
    );
}
