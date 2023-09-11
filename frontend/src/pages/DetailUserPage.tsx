import { Box, Grid, Button } from "@mui/material";
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
                                                link_url={null}
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
    const navigate = useNavigate();
    const { userId } = useParams();

    return (
        <>
            <RegisteredNavBar />

            <Button
                sx={{
                    background: "#ffffff29",
                    borderRadius: 1,
                    width: 210,
                    height: 33,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingBottom: "8px",
                    paddingTop: "8px",
                    marginBottom: "32px",
                    mx: 10,
                }}
                onClick={() => navigate(-1)}
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
            <ExternalUserCard userId={Number(userId)} />
        </>
    );
}
