import { Button, Box } from "@mui/material";
import RegisteredNavBar from "../components/RegisteredNavBar";
import TeamCard from "../components/TeamCard.tsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TeamsPage() {
    const { teamId } = useParams();
    {
        /* /api/v1/hackathons/teams?hackathon_id=1 */
    }
    const navigate = useNavigate();
    function handleBackButton() {
        navigate("/recommendations");
    }

    function handleTeamCreate() {
        navigate(`/hacks/${teamId}/add`);
    }

    return (
        <>
            <RegisteredNavBar />
            <Box sx={{ pt: 10, px: "70px" }}>
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
                <Box sx={{ paddingBottom: "36px" }}>
                    <p
                        style={{
                            color: "#fff",
                            fontSize: "32px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                        }}
                    >
                        На этот хакатон собираются идти эти команды.
                    </p>
                    <p
                        style={{
                            backgroundImage:
                                "linear-gradient(89deg, #FF6D88 7.39%, #FFA572 54.22%, #C059FF 99.13%)",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontSize: "32px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                        }}
                    >
                        Ты можешь к ним присоединиться!
                    </p>
                </Box>
                <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    <Box
                        sx={{
                            background: "#ffffff1f",
                            width: 310,
                            height: 374,
                            borderRadius: "16px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "#ffffff0a",
                                width: 160,
                                heigth: 160,
                                borderRadius: "90px",
                            }}
                            onClick={handleTeamCreate}
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    marginBottom: "60px",
                                    marginTop: "60px",
                                }}
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M20 0C19.1716 0 18.5 0.671574 18.5 1.5V18.5H1.5C0.671573 18.5 0 19.1716 0 20C0 20.8284 0.671574 21.5 1.5 21.5H18.5V38.5C18.5 39.3284 19.1716 40 20 40C20.8284 40 21.5 39.3284 21.5 38.5V21.5H38.5C39.3284 21.5 40 20.8284 40 20C40 19.1716 39.3284 18.5 38.5 18.5H21.5V1.5C21.5 0.671573 20.8284 0 20 0Z"
                                    fill="#C059FF"
                                />
                            </svg>
                        </Button>
                    </Box>
                    <TeamCard />
                </Box>
            </Box>
        </>
    );
}
