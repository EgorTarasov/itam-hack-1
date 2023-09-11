import NewsCard from "../components/NewsCard";
import NewsBackground from "../assets/CubeBackground.svg";
import { Box, Grid } from "@mui/material";
import RegisteredNavBar from "../components/RegisteredNavBar";
import BackGround from "../assets/CubeBackground.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import API_HOST from "../app/api/api.ts";
// const news = [
//     {
//         id: 1,
//         coverUrl: "/images/news1.png",
//         content:
//             "А вот и детали хакатона:" +
//             "➡️ Оффлайн присутствие требуется только для тех, у кого нет команды, а также капитанов команд уже сформированных. Это поможет вместить всех, кто зарегистрировался на хакатон. Для всех остальных будет трансляция онлайн в тимс по ссылке в канале ниже." +
//             "➡️ Открытие завтра состоится в 16:30 в аудитории Б3. Приходить можно начинать после четвёртой пары",
//     },
//     {
//         id: 2,
//         coverUrl: "/images/news2.png",
//         content:
//             "А вот и детали хакатона:" +
//             "➡️ Оффлайн присутствие требуется только для тех, у кого нет команды, а также капитанов команд уже сформированных. Это поможет вместить всех, кто зарегистрировался на хакатон. Для всех остальных будет трансляция онлайн в тимс по ссылке в канале ниже." +
//             "➡️ Открытие завтра состоится в 16:30 в аудитории Б3. Приходить можно начинать после четвёртой пары",
//     },
//     {
//         id: 3,
//         coverUrl: "/images/news3.png",
//         content:
//             "А вот и детали хакатона:" +
//             "➡️ Оффлайн присутствие требуется только для тех, у кого нет команды, а также капитанов команд уже сформированных. Это поможет вместить всех, кто зарегистрировался на хакатон. Для всех остальных будет трансляция онлайн в тимс по ссылке в канале ниже." +
//             "➡️ Открытие завтра состоится в 16:30 в аудитории Б3. Приходить можно начинать после четвёртой пары",
//     },
//     {
//         id: 4,
//         coverUrl: "/images/news4.png",
//         content:
//             "А вот и детали хакатона:" +
//             "➡️ Оффлайн присутствие требуется только для тех, у кого нет команды, а также капитанов команд уже сформированных. Это поможет вместить всех, кто зарегистрировался на хакатон. Для всех остальных будет трансляция онлайн в тимс по ссылке в канале ниже." +
//             "➡️ Открытие завтра состоится в 16:30 в аудитории Б3. Приходить можно начинать после четвёртой пары",
//     },
//     {
//         id: 5,
//         coverUrl: "/images/news5.png",
//         content:
//             "А вот и детали хакатона:" +
//             "➡️ Оффлайн присутствие требуется только для тех, у кого нет команды, а также капитанов команд уже сформированных. Это поможет вместить всех, кто зарегистрировался на хакатон. Для всех остальных будет трансляция онлайн в тимс по ссылке в канале ниже." +
//             "➡️ Открытие завтра состоится в 16:30 в аудитории Б3. Приходить можно начинать после четвёртой пары",
//     },
//     {
//         id: 6,
//         coverUrl: "/images/news5.png",
//         content:
//             "А вот и детали хакатона:" +
//             "➡️ Оффлайн присутствие требуется только для тех, у кого нет команды, а также капитанов команд уже сформированных. Это поможет вместить всех, кто зарегистрировался на хакатон. Для всех остальных будет трансляция онлайн в тимс по ссылке в канале ниже." +
//             "➡️ Открытие завтра состоится в 16:30 в аудитории Б3. Приходить можно начинать после четвёртой пары",
//     },
// ];

export default function NewsPage() {
    const [news, setNews] = useState<any[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios
            .get(API_HOST + "/api/v1/news?offset=0&limit=10", config)
            .then((response) => {
                setNews(response.data);
            });
    }, []);

    useEffect(() => {}, []);

    return (
        <>
            <RegisteredNavBar />
            <Box
                sx={{
                    backgroundColor: "#1E1D1C",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        my: 20,
                        backgroundImage: BackGround,
                    }}
                >
                    <div className="rectangle-194"></div>
                    <div className="rectangle-193"></div>
                    <h1
                        style={{
                            background:
                                "linear-gradient(89deg, #FF6D88 7.39%, #FFA572 54.22%, #C059FF 99.13%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontSize: 40,
                            fontWeight: 1000,
                        }}
                    >
                        Наши новости и интересные статьи
                    </h1>
                    <div className="rectangle-192"></div>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Grid
                        container
                        spacing={2.5}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {news.map((item, index) => {
                            return (
                                <Grid item key={index}>
                                    <NewsCard
                                        coverUrl={item.image_url}
                                        content={item.content}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
