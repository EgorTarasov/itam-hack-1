import { Box, Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import DataBox from "../components/DataBox";
import ItSkillBlock from "../components/ItSkillBlock";
import BlockAchevements from "../components/BlockAchevements";
import { User } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";
import { AreaChart, Area, XAxis, Tooltip } from "recharts";
import ProfilePage from "./ProfilePage";

function AdminNavBar() {
    return <></>;
}

// function UserProfile() {
//     // const { user } = props;

//     const [user, setUser] = useState<User | null>(null);

//     useEffect(() => {
//         const token = localStorage.getItem("token");

//         let data = "";

//         const config = {
//             method: "get",
//             maxBodyLength: Infinity,
//             url: "http://localhost:9999/api/v1/users/profile/me",
//             headers: { Authorization: `Bearer ${token}` },
//             data: data,
//         };

//         axios
//             .request(config)
//             .then((response) => {
//                 console.log(JSON.stringify(response.data));
//                 const u: User = response.data;

//                 setUser(u);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);
//     if (user) {
//         return (
//             <Box
//                 sx={{
//                     p: 4,
//                     backgroundColor: "#ffffff14",
//                     width: "100%",
//                     height: "100%",
//                     borderRadius: 4,
//                 }}
//             >
//                 <p
//                     style={{
//                         borderBottom: "2px solid #C059FF",
//                         paddingBottom: "2px",
//                         fontWeight: "700",
//                         fontSize: "20px",
//                         color: "#FFF",
//                         textAlign: "center",
//                     }}
//                 >
//                     {user.first_name + " " + user.last_name}
//                 </p>
//                 {/*
//                 <Stack direction={"row"}>
//                     <img
//                         style={{
//                             width: "150px",
//                             height: "150px",
//                         }}
//                         src={user.image_url}
//                         alt=""
//                     />

//                     <Box>
//                         <p
//                             style={{
//                                 color: "#FFF",
//                                 fontWeight: "700",
//                                 fontSize: "20px",
//                             }}
//                         >
//                             Level: {user.level}
//                         </p>
//                         {user.roles.length > 0 && (
//                             <DataBox
//                                 text={user.roles[0].role_name}
//                                 fontSize={14}
//                             />
//                         )}

//                         {user.tg_username && (
//                             <DataBox text={user.tg_username} fontSize={14} />
//                         )}
//                         {<DataBox text={"2 курс"} fontSize={14} />}
//                     </Box>
//                 </Stack> */}
//                 {/* make grid with 2 columns in one of them place image in other */}
//                 <Grid
//                     container
//                     spacing={10}
//                     justifyContent="center"
//                     alignItems="center"
//                 >
//                     <Grid item>
//                         <img
//                             style={{
//                                 width: "150px",
//                                 height: "150px",
//                             }}
//                             src={user.image_url}
//                             alt=""
//                         />
//                     </Grid>
//                     <Grid item>
//                         <p
//                             style={{
//                                 color: "#FFF",
//                                 fontWeight: "700",
//                                 fontSize: "20px",
//                             }}
//                         >
//                             Level: {user.level}
//                         </p>
//                         {user.roles.length > 0 && (
//                             <DataBox
//                                 text={user.roles[0].role_name}
//                                 fontSize={14}
//                             />
//                         )}

//                         {user.tg_username && (
//                             <DataBox text={user.tg_username} fontSize={14} />
//                         )}
//                         {<DataBox text={"2 курс"} fontSize={14} />}
//                     </Grid>
//                 </Grid>
//             </Box>
//         );
//     } else {
//         <h1>loading</h1>;
//     }
// }

export function UserCard() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        let data = "";

        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "http://localhost:9999/api/v1/users/profile/me",
            headers: { Authorization: `Bearer ${token}` },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                const u: User = response.data;

                setUser(u);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (user) {
        return (
            <Grid container sx={{ mt: 3, ml: 3, mr: 4, width: "100%" }} gap={2}>
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
                            {user.first_name + " " + user.last_name}
                        </p>
                        <Grid container>
                            <Grid item xs={6} sx={{ p: 2 }}>
                                <img
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    src="/images/lisa.png"
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
                                        Level: {user.level}
                                    </p>
                                    {user.roles.length > 0 && (
                                        <DataBox
                                            text={user.roles[0].role_name}
                                            fontSize={14}
                                        />
                                    )}

                                    {user.tg_username != null && (
                                        <DataBox
                                            text={user.tg_username}
                                            fontSize={14}
                                        />
                                    )}
                                    {<DataBox text={"2 курс"} fontSize={14} />}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        );
    } else {
        return <div>loading</div>;
    }
}

interface StatsBlockProps {
    stat: number;
    name: string;
    statColor: string;
}

function StatsBlock(props: StatsBlockProps) {
    const { stat, name, statColor } = props;
    return (
        <Box
            sx={{
                background: "#ffffff14",
                borderRadius: "16px",
                textAlign: "center",
                gap: 16,
                px: 5,
                py: 4,
            }}
        >
            <p
                style={{
                    color: statColor,
                    fontSize: "32px",
                    fontFamily: "SF Pro Display",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                }}
            >
                {stat}
            </p>
            <p
                style={{
                    color: "#ffffff",
                    fontSize: "16px",
                    fontFamily: "SF Pro Display",
                    fontStyle: "normal",
                    fontWeight: "400",
                    textAlign: "center",
                }}
            >
                {name}
            </p>
        </Box>
    );
}

StatsBlock.defaultProps = {
    stat: 5,
    name: "Дней в Хак-клубе",
    statColor: "#C059FF",
};

// interface ChartBlockProps {
//     data: any;
//     name: string;
// }

type GraphPoint = {
    name: string;
    uv: number;
    pv: number;
    amt: number;
};

interface ChartBlockProps {
    name: string;
    data: GraphPoint[];
}

function ChartBlock(props: ChartBlockProps) {
    return (
        <>
            <Box
                width={640}
                sx={{
                    p: 2,
                    background: "#ffffff14",
                    borderRadius: 4,
                }}
            >
                <p
                    style={{
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: 600,
                        width: 600,
                        textAlign: "center",
                    }}
                >
                    {props.name}
                </p>
                <hr></hr>
                <AreaChart
                    width={600}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#C059FF"
                        fill="#C059FF"
                    />
                </AreaChart>
            </Box>
        </>
    );
}

ChartBlock.defaultProps = {
    name: "Средняя оценка уровня ответственности от времени участия в Хак-клубе",
    data: [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ],
};
export default function AdminUserProfile() {
    const [stats, setStats] = useState<any | null>(null);
    const mockup = {
        user: {
            id: 3,
            email: "test99@test.com",
            first_name: "Тарасова",
            last_name: "Елизавета Юрьевна",
            internal_role: "student",
            level: 101,
            tg_username: "@dvij_designer",
            graduation_year: "2025",
            image_url: "/images/lisa.png",
            skills: [
                {
                    id: 1,
                    skill_name: "Figma",
                },
                {
                    id: 2,
                    skill_name: "Разработка UI/UX",
                },
                {
                    id: 3,
                    skill_name: "Проектирование и дизайн мобильных интерфейсов",
                },
                {
                    id: 4,
                    skill_name: "Проектирование и дизайн веб-интерфейсов",
                },
                {
                    id: 5,
                    skill_name: "Инфографика",
                },
                {
                    id: 6,
                    skill_name: "Product Management",
                },
            ],
            roles: [
                {
                    id: 1,
                    role_name: "Продуктовый дизайнер",
                },
            ],
            goals: [],
        },
        stats: {
            days_in_Club: 150,
            hack_wins: 2,
            hack_participated: 5,
            messanges_in_chats: 1240,
            avg_responsibility: 5.0,
            avg_communications: 5.0,
            avg_competitence: 4.99,
            avg_interest: 5.0,
            avg_leadership: 4.05,
        },
        suggestion: "Потенциальный тимлид",
        stats_graphs: {
            interests_graph: [
                {
                    x: 0,
                    y: 4.33,
                },
                {
                    x: 1,
                    y: 5,
                },
                {
                    x: 2,
                    y: 4.5,
                },
                {
                    x: 3,
                    y: 5.5,
                },
            ],
        },
    };

    const items = [
        <StatsBlock
            name="Хакатонов пройдено"
            stat={mockup.stats.hack_participated}
        />,
        <StatsBlock name="Дней в Хак-клубе" stat={mockup.stats.days_in_Club} />,
        <StatsBlock
            name="Сообщений в за последний месяц"
            stat={mockup.stats.days_in_Club}
        />,
        <StatsBlock
            name="Средняя оценка ответственности"
            stat={mockup.stats.hack_wins}
        />,

        <StatsBlock
            name="Средняя оценка коммуникабельности"
            stat={mockup.stats.hack_participated}
        />,

        <StatsBlock
            name="Сообщений в за последний месяц"
            stat={mockup.stats.days_in_Club}
        />,
    ];

    return (
        <>
            <Grid container spacing={4} width={"100%"}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <UserCard />
                </Grid>
                {/* stats days to communication */}
                <Grid item xs={12} sm={6} md={6} lg={8}>
                    <Box>
                        <Grid
                            justifyContent="flex-start"
                            alignItems="center"
                            container
                            // gap={1}
                            spacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
                            columns={{ xs: 12, sm: 4, md: 4, lg: 6 }}
                        >
                            {items.map((item, index) => (
                                <Grid item key={index}>
                                    {" "}
                                    {item}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                {/* predict & interest & competence */}
            </Grid>

            <Grid
                pt={2}
                justifyContent="flex-start"
                alignItems="center"
                container
                gap={2}
                spacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
                // columns={{ xs: 6, sm: 12, md: 18, lg: 24 }}
            >
                <Grid item>
                    <StatsBlock
                        name="Средняя оценка лидерских качеств"
                        stat={mockup.stats.avg_leadership}
                    />
                </Grid>
                <Grid item>
                    <StatsBlock
                        name="Средняя оценка вовлечённости"
                        stat={mockup.stats.avg_interest}
                    />
                </Grid>
                <Grid item>
                    <StatsBlock
                        name="Средняя оценка лидерских качеств"
                        stat={mockup.stats.avg_leadership}
                    />
                </Grid>
            </Grid>
        </>
    );
}
