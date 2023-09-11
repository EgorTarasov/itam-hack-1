import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {
    usePostSurveyMutation,
    useGetCurrentUserMutation,
    useGetAvaliableRolesMutation,
} from "../features/user/authApiSlice";
import { UserGoal, UserRole, setUser } from "../features/user/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import API_HOST from "../app/api/api.ts";

export default function SignUpSurveyPage() {
    // const avaliableRoles = [
    //     "Графический дизайнер",
    //     "Проджект-менеджер",
    //     "Бэкенд разработчик",
    //     "Фронтенд разработчик",
    //     "Fullstack разработчик",
    //     "ML-разработчик",
    //     "Мобильный разработчик",
    //     "Бизнес-аналитик",
    // ];
    // const avaliableMotivations = [
    //     "Встретить единомышленников",
    //     "Научиться новому",
    //     "Пополнить портфолио",
    //     "Обрести полезные связи",
    //     "Стать увереннее в себе",
    //     "Развить мягкие навыки",
    //     "Развлечься",
    // ];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [avaliableRoles, setAvaliableRoles] = useState<UserRole[]>([]);
    const [avaliableMotivations, setAvaliableMotivations] = useState<
        UserGoal[]
    >([]);
    const [getAvaliableRoles] = useGetAvaliableRolesMutation();
    const [postSurvey] = usePostSurveyMutation();
    const [getUser] = useGetCurrentUserMutation();
    const [selectedMotivations, setSelectedMotivations] = useState<UserGoal[]>(
        [],
    );
    const [selectedRoles, setSelectedRoles] = useState<UserRole[]>([]);
    const [telegram, setTelegram] = useState("");

    useEffect(() => {
        async function getRoles() {
            const data = await getAvaliableRoles({}).unwrap();
            console.log(data);
            setAvaliableRoles(data);
        }
        async function getGoals() {
            axios.get(API_HOST + "/api/v1/tags/goals").then((response) => {
                // @ts-ignore
                const data: UserGoal = response;
                console.log(data);
                setAvaliableMotivations(response.data);
            });
        }
        getGoals();
        getRoles();
        console.log(avaliableRoles);
    }, []);

    function handleSurveySubmit() {
        console.log(selectedMotivations);
        console.log(selectedRoles);
        // const roles = selectedRoles.map((role) => {
        //     return { role_name: role };
        // });
        // const goals = selectedMotivations.map((goal) => {
        //     return { goal_name: goal };
        // });
        console.log({
            roles: selectedRoles,
            goals: selectedMotivations,
            tg_username: telegram,
        });
        const data = postSurvey({
            roles: selectedRoles,
            goals: selectedMotivations,
            tg_username: telegram,
        }).unwrap();
        console.log(data);

        const userData = getUser({}).unwrap();
        console.log(userData);
        dispatch(setUser({ user: userData }));
        navigate("/me");
    }

    if (avaliableRoles.length === 0) {
        return <div>Loading...</div>;
    } else {
        return (
            // create box in center of a screen with minWidht 800px and minHeight 475px and backgroundColor #ffffff14
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    backgroundColor: "#ffffff14",
                    height: "100vh",
                    m: "auto",
                }}
            >
                <Box
                    sx={{
                        minWidth: "400px",
                        maxWidth: "700px",
                        minHeight: "475px",
                        backgroundColor: "#ffffff14",
                        borderRadius: 4,
                        padding: 4,
                    }}
                >
                    <Stack direction={"column"} spacing={2}>
                        <p
                            style={{
                                color: "#FFFFFF",
                                fontSize: "20px",
                                textAlign: "left",
                                marginTop: "1rem",
                            }}
                        >
                            Укажите свою основную роль в команде
                        </p>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "left",
                            }}
                        >
                            {avaliableRoles.map((role: UserRole) => (
                                <Grid item key={role.id}>
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            // FIXME: double click on button
                                            if (selectedRoles.includes(role)) {
                                                setSelectedRoles(
                                                    selectedRoles.filter(
                                                        (r) => r !== role,
                                                    ),
                                                );
                                            } else {
                                                setSelectedRoles([
                                                    ...selectedRoles,
                                                    role,
                                                ]);
                                            }
                                        }}
                                        sx={{
                                            backgroundColor:
                                                selectedRoles.includes(role)
                                                    ? "#C059FF"
                                                    : "#c059ff1f",
                                            color: "#ffffff",
                                            minWidth: "0",
                                            border: "1px solid #C059FF",
                                            borderRadius: "4px",
                                            textTransform: "none",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {role.role_name}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                    <Stack direction={"column"} spacing={2}>
                        <p
                            style={{
                                color: "#FFFFFF",
                                fontSize: "20px",
                                textAlign: "left",
                                marginTop: "1rem",
                            }}
                        >
                            Чего ты хочешь добиться посредством участия в
                            хакатонах?
                        </p>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "left",
                            }}
                        >
                            {avaliableMotivations.map((motivation) => (
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            // FIXME: double click on button
                                            if (
                                                selectedMotivations.includes(
                                                    motivation,
                                                )
                                            ) {
                                                setSelectedMotivations(
                                                    selectedMotivations.filter(
                                                        (r) => r !== motivation,
                                                    ),
                                                );
                                            } else {
                                                setSelectedMotivations([
                                                    ...selectedMotivations,
                                                    motivation,
                                                ]);
                                            }
                                        }}
                                        sx={{
                                            backgroundColor:
                                                selectedMotivations.includes(
                                                    motivation,
                                                )
                                                    ? "#C059FF"
                                                    : "#c059ff1f",
                                            color: "#ffffff",
                                            minWidth: "0",
                                            border: "1px solid #C059FF",
                                            borderRadius: "4px",
                                            textTransform: "none",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {motivation.goal_name}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                    <p
                        style={{
                            paddingTop: "2rem",
                            color: "#FFFFFF",
                            fontSize: "20px",
                            textAlign: "left",
                        }}
                    >
                        Укажи свой ник в Telegram, чтобы мы могли связаться с
                        тобой
                    </p>
                    <Stack
                        direction={"row"}
                        spacing={2}
                        sx={{
                            pt: 4,
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Ник в Telegram"
                            value={telegram}
                            onChange={(e) => setTelegram(e.target.value)}
                            sx={{
                                backgroundColor: "#ffffff",
                                color: "#ffffff",
                                width: "50%",
                                borderRadius: "16",
                            }}
                            placeholder="@hilbert_space"
                        />

                        <Button
                            variant="contained"
                            sx={{
                                width: "50%",
                                borderRadius: "16",
                            }}
                            onClick={handleSurveySubmit}
                        >
                            Сохранить
                        </Button>
                    </Stack>
                </Box>
            </Box>
        );
    }
}
