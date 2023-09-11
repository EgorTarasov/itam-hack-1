import { Box, Grid } from "@mui/material";
import DataBox from "../components/DataBox";
import ItSkillBlock from "../components/ItSkillBlock";
import BlockAchevements from "../components/BlockAchevements";
import { useEffect, useState } from "react";
import { User } from "../features/user/authSlice";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import RegisteredNavBar from "../components/RegisteredNavBar";
import API_HOST from "../app/api/api.ts";

type ExternalUserCardProps = {
    userId: number;
};

function ExternalUserCard(props: ExternalUserCardProps) {
    const { userId } = props;
    const navigate = useNavigate();
    const [pageUser, setPageUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios
            .get(API_HOST + `/api/v1/users/profile/${userId}`, config)
            .then((response) => {
                console.log(response.data);
                setPageUser(response.data);
            })
            .catch((err) => {
                if (err.response.status) {
                    navigate("/");
                }
            });
    }, []);

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
                        <p
                            style={{
                                borderBottom: "2px solid #C059FF",
                                paddingBottom: "2px",
                                fontWeight: "700",

                                color: "#FFF",
                            }}
                        >
                            {pageUser.first_name + " " + pageUser.last_name}
                        </p>
                        <Grid container>
                            <Grid item xs={6} sx={{ p: 2 }}>
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
                            <Grid item xs={6} sx={{ minWidth: "150" }}>
                                <Box>
                                    <p
                                        style={{
                                            color: "#FFF",
                                            fontWeight: "700",
                                            fontSize: "20px",
                                        }}
                                    >
                                        Level: {pageUser.level}
                                    </p>
                                    {pageUser.roles &&
                                        pageUser.roles.length > 0 && (
                                            <DataBox
                                                text={
                                                    pageUser.roles[0].role_name
                                                }
                                                fontSize={14}
                                            />
                                        )}

                                    {pageUser.tg_username != null && (
                                        <DataBox
                                            text={pageUser.tg_username}
                                            fontSize={14}
                                        />
                                    )}
                                    {<DataBox text={"2 курс"} fontSize={14} />}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box></Box>
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

export default function DetailUserPage() {
    const { userId } = useParams();

    return (
        <>
            <RegisteredNavBar />
            <ExternalUserCard userId={Number(userId)} />
        </>
    );
}
