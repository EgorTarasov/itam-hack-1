import NavBar from "../components/NavBar";
import Carousel from "../components/carousel";
import { Link } from "react-router-dom";
import IndexHackCard from "../components/IndexHackCard";
import { selectCurrentToken, setCredentials } from "../features/user/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import API_HOST from "../app/api/api";
import axios from "axios";
import { Hackathon } from "../types";

export default function IndexPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [hacks, setHacks] = useState<Hackathon[]>([]);

    useEffect(() => {
        const token: string | null = localStorage.getItem("token");
        console.log(`token from local storage: ${token}`);
        if (token != null) {
            dispatch(setCredentials({ accessToken: token, user: null }));
            navigate("/me");
        }
    }, []);

    // const hacks = [
    //     {
    //         title: "Кокос Hackathon 2023",
    //         registration_start: "2023-09-09T13:29:37.176980",
    //         registration_finish: "2023-09-10T13:29:37.176999",
    //         team_minimum_size: 1,
    //         team_maximum_size: 5,
    //         prize_type: 0,
    //         money_prize: 1000000,
    //         start_date: "2023-09-11T13:29:37.177062",
    //         end_date: "2023-09-12T13:29:37.177074",
    //         description: "Описание хакатона",
    //         is_offline: true,
    //         place: "Москва",
    //         image: "http://localhost:9999/static/image.png",
    //         tags: [
    //             {
    //                 tag: "Веб-разработка",
    //             },
    //             {
    //                 tag: "Мобильная разработка",
    //             },
    //         ],
    //     },
    // ];

    return (
        <>
            <div className="index-body">
                <NavBar />
            </div>
            <div className="index-hero"></div>
            <h1 className="index-hero-text">
                Стань частью Хакатон-клуба Университета МИСИС
            </h1>
            <div className="index-auth-buttons">
                <Link to={"/auth"}>
                    <div className="index-auth-button">Вход</div>{" "}
                </Link>
                <Link to={"/auth"}>
                    <div className="index-auth-button register">
                        Регистрация
                    </div>
                </Link>
            </div>
            <div className="index-hope">
                <p className="index-hope-class">классно!</p>
                <p className="index-hope-text">
                    Участвовать в хакатонах{" "}
                    <span className="scare">страшно </span>
                </p>
            </div>
            <Carousel />
            <div className="hero-title">
                <h2 className="hero-title-first">Уже сейчас</h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="44"
                    viewBox="0 0 49 44"
                    fill="#C059FF"
                    style={{ paddingLeft: "20rem" }}
                >
                    <path
                        d="M48 1C48.0613 28 1 19 1 44"
                        stroke="#C059FF"
                        stroke-width="2"
                    />
                </svg>
                <h2 className="hero-title-second">
                    ты можешь собрать свою команду
                </h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="36"
                    viewBox="0 0 43 36"
                    fill="#C059FF"
                    style={{ paddingLeft: "43rem" }}
                >
                    <path
                        d="M41.5 0.5C41.5659 28 1.5 8 1.5 35.5"
                        stroke="url(#paint0_linear_29_557)"
                        stroke-width="2"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_29_557"
                            x1="4.28652"
                            y1="24.5458"
                            x2="41.6204"
                            y2="23.7873"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="1" stop-color="#C059FF" />
                        </linearGradient>
                    </defs>
                </svg>
                <h2 className="hero-title-third">
                    и отправиться на один из этих{" "}
                    <span style={{ color: "C059FF" }}>хакатонов!</span>
                </h2>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="487"
                    height="110"
                    viewBox="0 0 487 110"
                    fill="#C059FF"
                    style={{ paddingLeft: "43rem" }}
                >
                    <path
                        d="M7.29379 109.707C7.68431 110.098 8.31747 110.098 8.70801 109.707L15.072 103.343C15.4625 102.953 15.4625 102.319 15.072 101.929C14.6814 101.538 14.0483 101.538 13.6578 101.929L8.0009 107.586L2.34403 101.929C1.9535 101.538 1.32034 101.538 0.929833 101.929C0.539292 102.319 0.5393 102.953 0.92982 103.343L7.29379 109.707ZM28.0009 0.999856L28.0009 -0.000154204L28.0009 0.999856ZM8.0009 20.9998L7.0009 20.9998L8.0009 20.9998ZM487 0.000150543L28.0009 -0.000154204L28.0009 1.99985L487 2.00014L487 0.000150543ZM7.0009 20.9998L7.0009 109L9.00089 109L9.00089 20.9998L7.0009 20.9998ZM28.0009 -0.000154204C16.4029 -0.000161903 7.00088 9.40187 7.0009 20.9998L9.00089 20.9998C9.00089 10.5064 17.5075 1.99985 28.0009 1.99985L28.0009 -0.000154204Z"
                        fill="#C059FF"
                    />
                </svg>
            </div>
            <div className="index-hacks">
                {hacks.map((hack) => (
                    <IndexHackCard
                        imageUrl={hack.image}
                        hackName={hack.title}
                        hackEndRegistrationDate={hack.registration_finish}
                        hackTeamMinimumSize={hack.team_minimum_size}
                        hackTeamMaximumSize={hack.team_maximum_size}
                        hackPrize={hack.money_prize}
                        hackTags={hack.tags}
                    ></IndexHackCard>
                ))}
            </div>
        </>
    );
}
