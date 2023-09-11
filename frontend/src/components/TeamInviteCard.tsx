import { Box, Stack } from "@mui/material";

interface TeamMember {
    tg_username: string;
    role: string;
}

interface TeamInviteCardProps {
    hackathonName: string;
    teamName: string;
    members: TeamMember[];
}

export default function TeamInviteCard(props: TeamInviteCardProps) {
    const { hackathonName, teamName, members } = props;
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
                    {members.map((member) => {
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Box
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
                                </Box>
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
                                    {member.role}
                                </p>
                            </Box>
                        );
                    })}
                </Box>
            </Stack>
        </Box>
    );
}
