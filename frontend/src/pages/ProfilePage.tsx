import {
    Box,
    Button,
    Grid,
    Stack,
    TextField,
    Autocomplete,
} from "@mui/material";
import RegisteredNavBar from "../components/RegisteredNavBar";
import DataBox from "../components/DataBox";
import ItSkillBlock from "../components/ItSkillBlock";
import BlockAchevements from "../components/BlockAchevements";

import { useEffect, useState } from "react";

import axios from "axios";
import API_HOST from "../app/api/api";
import { User, UserRole } from "../types";

function BlockDataList(props: { title: string; projects: string[] }) {
    return (
        <Box
            sx={{
                textAlign: "left",
                minHeight: "150px",
                backgroundColor: "#ffffff14",
                borderRadius: 4,
                p: 4,
                m: 2,
            }}
        >
            <p
                style={{
                    paddingBottom: "2px",
                    fontWeight: "700",
                    margin: "8px",
                    marginBottom: "16px",
                    color: "#FFF",
                }}
            >
                {props.title}
            </p>
            <Stack spacing={2} direction={"column"}>
                {props.projects.map((project) => (
                    <DataBox text={project} fontSize={14} />
                ))}
            </Stack>
        </Box>
    );
}

export function UserCard() {
    // const dispatch = useDispatch();
    // const reduxUser = useSelector(selectCurrentUser);
    // const [postUser, { isLoading: isPostLoading }] =
    //     usePostCurrentUserMutation();
    // const [getAvaliableRoles] = useGetAvaliableRolesMutation();
    // const [getUser, { isLoading }] = useGetCurrentUserMutation();

    const [pageUser, setPageUser] = useState<User | null>(null);
    const [editing, setEditing] = useState(false);
    const [telegramText, setTelegramText] = useState<string>("");
    const [roleText, setRoleText] = useState<string>("");

    const [avaliableRoles, setAvaliableRoles] = useState<UserRole[]>([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        axios
            .get(API_HOST + "/api/v1/users/profile/me", config)
            .then((response) => {
                console.log(response.data);
                setPageUser(response.data);
            });
    }, []);

    useEffect(() => {
        setTelegramText(pageUser?.tg_username!);
        if (pageUser) {
            if (pageUser!.roles.length > 0) {
                setRoleText(pageUser?.roles[0].role_name);
            }
        }
    }, [pageUser]);

    // use useEffect to update user
    //FIXME
    useEffect(() => {
        if (pageUser) {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            };
            axios
                .post(API_HOST + "/api/v1/users/update", config)
                .then((response) => {
                    console.log(response);
                });
        }
    }, [pageUser]);

    if (pageUser) {
        return (
            <Grid
                container
                item
                sx={{ mt: 3, ml: 3, mr: 4, width: "90%" }}
                gap={2}
                spacing={2}
                justifyContent="space-between"
            >
                <Grid item xs={12} lg={4}>
                    {/* block profile  */}
                    <Box
                        sx={{
                            padding: 2,
                            backgroundColor: "#ffffff14",
                            textAlign: "center",
                            width: "100%",
                            borderRadius: 4,
                        }}
                    >
                        <Stack
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <p
                                style={{
                                    color: "#FFF",
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    width: "100%",
                                }}
                            >
                                {pageUser.last_name + " " + pageUser.first_name}
                            </p>
                            <div
                                style={{
                                    borderBottom: "2px solid #C059FF",
                                    paddingBottom: "2px",
                                    width: "60%",
                                }}
                            ></div>
                        </Stack>

                        <Grid container justifyContent={"center"}>
                            <Grid item xs={6} sm={4} lg={6} sx={{ p: 2 }}>
                                <img
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    src={
                                        pageUser.image_url
                                            ? pageUser.image_url
                                            : "/images/lisa.png"
                                    }
                                    alt=""
                                />
                            </Grid>
                            <Grid
                                item
                                sx={{ minWidth: "150" }}
                                justifyContent={"center"}
                            >
                                <Stack
                                    direction={"column"}
                                    justifyContent={"center"}
                                    alignItems={"center"}
                                    spacing={3}
                                >
                                    <p
                                        style={{
                                            color: "#FFF",
                                            fontWeight: "700",
                                            fontSize: "20px",
                                            textAlign: "center",
                                        }}
                                    >
                                        Level: {pageUser.level}
                                    </p>
                                    {pageUser.roles &&
                                        pageUser.roles.length > 0 &&
                                        !editing && (
                                            <DataBox
                                                text={
                                                    pageUser.roles[0].role_name
                                                }
                                                fontSize={14}
                                            />
                                        )}
                                    {editing && (
                                        <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            getOptionLabel={(
                                                option: UserRole,
                                            ) => option.role_name}
                                            //@ts-ignore
                                            options={avaliableRoles}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Основная роль"
                                                />
                                            )}
                                        />
                                    )}
                                    {editing && (
                                        <TextField
                                            sx={{ gap: 2 }}
                                            id="telegramUsername"
                                            label="Telegram username"
                                            variant="standard"
                                            value={telegramText}
                                            onChange={(e) => {
                                                if (
                                                    e.target.value.length == 0
                                                ) {
                                                    //@ts-ignore
                                                    setTelegramText(null);
                                                } else {
                                                    setTelegramText(
                                                        e.target.value,
                                                    );
                                                }
                                            }}
                                        />
                                    )}
                                    {pageUser.tg_username != null &&
                                        !editing && (
                                            <DataBox
                                                text={pageUser.tg_username}
                                                fontSize={14}
                                            />
                                        )}
                                    {<DataBox text={"2 курс"} fontSize={14} />}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Button
                            onClick={() => {
                                console.log("updating user");
                                if (editing) {
                                    // props.handleUserUpdate();
                                    setPageUser({
                                        ...pageUser,
                                        tg_username: telegramText!,
                                    });
                                    setEditing(false);
                                } else {
                                    setEditing(true);
                                }
                            }}
                            sx={{
                                mt: 2,
                                padding: 2,
                                backgroundColor: "#ffffff14",
                                border: "1px solid #C059FF",
                                color: "#FFF",
                                width: "100%",
                                fontSize: "14px",
                                borderRadius: 4,

                                "&:hover": {
                                    backgroundColor: "#C059FF",
                                },
                            }}
                        >
                            Отредактировать данные
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4}>
                    {/* block it */}
                    {/* It skills */}
                    <ItSkillBlock />
                    {/* It skills */}
                </Grid>
                <Grid item xs={12} lg={2}>
                    <BlockAchevements />
                </Grid>
            </Grid>
        );
    } else {
        return <div>loading</div>;
    }
}

export default function ProfilePage() {
    return (
        <>
            <RegisteredNavBar />
            <Box className="profile" sx={{ pt: 5 }}>
                <UserCard />
                <BlockDataList
                    title="Мои проекты:"
                    projects={["Сервис для поиска работы", "Шиза от банка"]}
                />
                <BlockDataList
                    title="Пройденные хакатоны:"
                    projects={["RLT-2023", "ЛЦТ-2023", "Код города 2023"]}
                />
            </Box>
        </>
    );
}
