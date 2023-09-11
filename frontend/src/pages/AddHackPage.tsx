import { TextField, Box, Grid, Stack, Button, MenuItem } from "@mui/material";
import RegisteredNavBar from "../components/RegisteredNavBar";
import { useNavigate } from "react-router-dom";
import DataBox from "../components/DataBox";
import { User, Hackathon } from "../types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchUsers from "../components/SearchUsers";
import API_HOST from "../app/api/api";
import axios from "axios";
import * as React from "react";

interface TeamMemberProps {
    member: User;
}

const currencies = [
    {
        value: "Backend",
        label: "Backend",
    },
    {
        value: "Frontend",
        label: "Frontend",
    },
    {
        value: "ML",
        label: "ML",
    },
    {
        value: "Designer",
        label: "Designer",
    },
    {
        value: "Тим-лид",
        label: "Тим-лид",
    },
];

function TeamMemberCard(props: TeamMemberProps) {
    const { member } = props;
    return (
        <Stack
            maxWidth={420}
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={3}
            sx={{
                height: "100%",
                background: "#ffffff1f",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
            }}
        >
            <h1
                style={{
                    color: "#ffffff",
                    fontSize: "20px",
                }}
            >
                {member.first_name + "   " + member.last_name}
            </h1>

            <DataBox text={member.roles[0].role_name} fontSize={14} />

            <DataBox text={member.tg_username} fontSize={14} />
        </Stack>
    );
}

interface InviteMembersProps {
    isModalOpen: boolean;
    toogleModal: () => void;
}

function InviteMembers(props: InviteMembersProps) {
    return (
        <Stack
            maxWidth={420}
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={3}
            sx={{
                height: "100%",
                background: "#ffffff1f",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
            }}
        >
            <Button
                sx={{
                    width: 252,
                    py: "12px",
                    px: "20px",
                    borderRadius: "8px",
                    background: "var(--purple, #C059FF)",
                }}
            >
                <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.5 0.5C6.08579 0.5 5.75 0.835786 5.75 1.25V5.75H1.25C0.835786 5.75 0.5 6.08579 0.5 6.5C0.5 6.91421 0.835786 7.25 1.25 7.25H5.75V11.75C5.75 12.1642 6.08579 12.5 6.5 12.5C6.91421 12.5 7.25 12.1642 7.25 11.75V7.25H11.75C12.1642 7.25 12.5 6.91421 12.5 6.5C12.5 6.08579 12.1642 5.75 11.75 5.75H7.25V1.25C7.25 0.835786 6.91421 0.5 6.5 0.5Z"
                        fill="white"
                    />
                </svg>
                <p
                    style={{
                        color: "var(--White, #FFF)",
                        textAlign: "center",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                    }}
                >
                    Пригласить участника
                </p>
            </Button>
            <p
                style={{
                    color: "var(--purple, #C059FF)",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                }}
            >
                или
            </p>
            <p
                style={{
                    color: "var(--White, #FFF)",
                    textAlign: "center",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                }}
            >
                Укажите, какой участник команды вам нужен
            </p>
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="EUR"
                        sx={{ background: "#fff", borderRadius: "8px" }}
                    >
                        {currencies.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                sx={{ background: "#fff" }}
                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Box>
        </Stack>
    );
}

const teamMembersMock = [
    {
        id: 1,
        email: "test@test.com",
        first_name: "Евгений",
        last_name: "Гуров",
        internal_role: "admin",
        level: 4.7,
        tg_username: "yogenyslav",
        graduation_year: "2024-01-01",
        image_url: "http://localhost:9999/static/avatar_photo.jpg",
        skills: [],
        roles: [
            {
                id: 1,
                role_name: "Графический дизайнер",
            },
            {
                id: 2,
                role_name: "Проджект-менеджер",
            },
            {
                id: 4,
                role_name: "Фронтенд разработчик",
            },
        ],
        goals: [
            {
                id: 1,
                goal_name: "Получить опыт",
            },
            {
                id: 2,
                goal_name: "Найти единомышленников",
            },
        ],
    },
];
export default function AddHackPage() {
    const { hackId } = useParams();
    console.log(hackId);
    const [creator, setCreator] = useState<User | null>(null);
    const [teamMembers, setTeamMembers] = useState<User[]>(teamMembersMock);
    const [hack, setHack] = useState<Hackathon | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(API_HOST + "/api/v1/users/profile/me", config)
            .then((response) => {
                console.log(response.data);
                setCreator(response.data);
            });
        axios
            .get(API_HOST + `/api/v1/hackathons/${hackId}`, config)
            .then((response) => setHack(response.data))
            .catch((e) => console.error(e));
    }, []);

    const navigate = useNavigate();
    function handleBackButton() {
        navigate("/recommendations");
    }

    function toogleModal() {
        setIsModalOpen(!isModalOpen);
    }

    const cards = [<InviteMembers isModalOpen toogleModal={toogleModal} />];
    if (hack) {
        return (
            <>
                <RegisteredNavBar />
                <Box sx={{ px: 10, pt: 10 }}>
                    <Box sx={{ pb: 10 }}>
                        <Button
                            sx={{
                                mb: 10,
                                px: 5,
                                py: 2,
                                borderRadius: 2,
                                background: "#ffffff1f",
                            }}
                            onClick={handleBackButton}
                        >
                            <svg
                                width="9"
                                height="15"
                                viewBox="0 0 9 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.292893 6.79289C-0.097631 7.18342 -0.097631 7.81658 0.292893 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428933C7.68054 0.0384082 7.04738 0.0384082 6.65685 0.428933L0.292893 6.79289ZM1.1875 6.5H1L1 8.5H1.1875V6.5Z"
                                    fill="url(#paint0_linear_130_3323)"
                                    fill-opacity="0.6"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_130_3323"
                                        x1="1.1875"
                                        y1="7"
                                        x2="0.999472"
                                        y2="6.99973"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="1" stop-color="white" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p
                                style={{
                                    color: "#ffffffdb",
                                    fontSize: "14px",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    lineHeight: "normal",
                                    marginLeft: "5px",
                                }}
                            >
                                Вернуться назад
                            </p>
                        </Button>
                        <Stack direction={"row"}>
                            <p
                                style={{
                                    // background:
                                    //     "linear-gradient()",

                                    fontSize: "32px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    marginRight: "5px",
                                    background:
                                        "linear-gradient(89deg, #FF6D88 7.39%, #FFA572 54.22%, #C059FF 99.13%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Новая команда
                            </p>
                            <p
                                style={{
                                    color: "#fff",
                                    fontSize: "32px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                }}
                            >
                                на {hack.title}
                            </p>
                        </Stack>
                    </Box>
                    <Box>
                        <Grid container spacing={4}>
                            <Grid item md={6} lg={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        p: 2,
                                        height: 197,
                                    }}
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Название команды"
                                        variant="outlined"
                                        sx={{
                                            height: 51,
                                            background: "#fff",
                                            borderRadius: "8px",
                                            marginBottom: "20px",
                                        }}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Outlined"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        sx={{
                                            outerHeight: 400,
                                            background: "#fff",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={6} lg={2}>
                                <TeamMemberCard member={creator} />
                            </Grid>
                            <Grid item md={6} lg={2}>
                                <InviteMembers
                                    isModalOpen
                                    toogleModal={toogleModal}
                                />
                            </Grid>
                            <Grid item md={6} lg={2}>
                                <InviteMembers
                                    isModalOpen
                                    toogleModal={toogleModal}
                                />
                            </Grid>
                            {/* {cards.map((card) => (
                                <Grid item md={6} lg={4}>
                                    {" "}
                                    card
                                </Grid>
                            ))} */}
                        </Grid>
                    </Box>
                </Box>
            </>
        );
    } else {
        return (
            <>
                <h1>Loading</h1>
            </>
        );
    }
}
