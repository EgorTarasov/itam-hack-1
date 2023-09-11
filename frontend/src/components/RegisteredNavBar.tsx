import { Box, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function RegisteredNavBar() {
    const paths = [
        {
            path: "/add_hack",
            displayPath: "/me",
        },
    ];

    const navigate = useNavigate();
    const tabs = [
        {
            name: "Мой профиль",
            path: ["/me"],
        },
        {
            name: "Моя команда",
            path: ["/recommendations", "/add_hack", "/teams"],
        },

        {
            name: "Комьюнити",
            path: ["/community"],
        },
        {
            name: "Анонсы и новости",
            path: ["/news"],
        },
    ];
    return (
        <>
            {/* place navbar at the top of the page */}
            <Box
                sx={{
                    // position: "fixed",
                    width: "100%",
                    pt: 2,
                    pl: 10,
                    top: 0,
                    gap: 40,
                }}
            >
                <Grid container spacing={10} width={"100%"}>
                    {/* navbar */}
                    {tabs.map((tab) => (
                        <Grid key={tab.name} item>
                            <Box
                                onClick={() => {
                                    // navigate to selected tab
                                    navigate(tab.path[0]);
                                }}
                            >
                                <p
                                    style={{
                                        borderBottom: tab.path.includes(
                                            window.location.pathname,
                                        )
                                            ? "2px solid #C059FF"
                                            : "2px solid #1E1D1C",
                                        color: tab.path.includes(
                                            window.location.pathname,
                                        )
                                            ? "#FFF"
                                            : "#FFFFFF52",
                                        padding: "0 0 10px 0",
                                    }}
                                >
                                    {tab.name}
                                </p>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>

        // <Box>
        //     {/* navbar */}
        //     <Grid container>
        //         {/* navbar */}
        //         {tabs.map((tab) => (
        //             <Grid item xs={1.5}>
        //                 <Box
        //                     key={tab}
        //                     onClick={() => {
        //                         // FIXME: navigation
        //                     }}
        //                 >
        //                     <p
        //                         style={{
        //                             borderBottom:
        //                                 tab === props.selectedTab
        //                                     ? "2px solid #C059FF"
        //                                     : "2px solid #1E1D1C",
        //                             color:
        //                                 tab === props.selectedTab
        //                                     ? "#FFF"
        //                                     : "#FFFFFF52",
        //                             padding: "0 0 10px 0",
        //                         }}
        //                     >
        //                         {tab}
        //                     </p>
        //                 </Box>
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Box>
    );
}
