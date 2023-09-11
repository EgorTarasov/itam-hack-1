import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import API_HOST from "../app/api/api";
import { User } from "../types";
import DataBox from "./DataBox";

// interface TeamMember {
//     tg_username: string;
//     role: string;
// }

interface TeamInviteCardProps {
    hackathonName: string;
    teamName: string;
    members: User[];
}

export default function TeamInviteCard(props: TeamInviteCardProps) {
    const { hackathonName, teamName, members } = props;
    console.log(members);
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff1f",
                borderRadius: 4,
                display: "flex",
                width: "414px",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
            }}
        >
            <Stack spacing={2.5}>
                <Box>
                    <p
                        style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                        }}
                    >
                        Хакатон:{" "}
                        <span
                            style={{
                                color: "#fff",
                                fontSize: "20px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "normal",
                            }}
                        >
                            {hackathonName}
                        </span>
                    </p>
                    <p
                        style={{
                            color: "#fff",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                        }}
                    >
                        Команда:{" "}
                        <span
                            style={{
                                color: "#fff",
                                fontSize: "20px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "normal",
                            }}
                        >
                            {teamName}
                        </span>
                    </p>
                </Box>
                <Box>
                    {members.map((member: User) => {
                        return (
                            <Box
                                key={member.id}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                {/* <Box
                                    sx={{
                                        backgroundColor: "#c059ff29",
                                        borderRadius: 2,
                                        display: "flex",
                                        padding: "4px 8px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "#fff",
                                            fontSize: "12px",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "normal",
                                        }}
                                    >
                                        @{member.tg_username}
                                    </p>
                                </Box> */}
                                <DataBox
                                    text={`@${member.tg_username}`}
                                    link_url={`/users/${member.id}`}
                                />
                                {member.roles.length > 0 && (
                                    <p
                                        style={{
                                            color: "#fff",
                                            textAlign: "center",
                                            fontSize: "12px",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "normal",
                                        }}
                                    >
                                        {member.roles[0].role_name}
                                    </p>
                                )}
                            </Box>
                        );
                    })}
                </Box>
            </Stack>
        </Box>
    );
}
