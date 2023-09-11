import { Box } from "@mui/material";

interface ComunityCardProps {
    name: string;
    level: number;
    role: string;
    tgUsername: string;
    yearOfEducation: number;
}

export default function ComunityCard(props: ComunityCardProps) {
    const { name, level, tgUsername, role, yearOfEducation } = props;

    return (
        <>
            <Box
                sx={{
                    width: 310,
                    height: 221,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 2,
                    pd: 2,
                    pl: 3.5,
                    pr: 3.5,
                    background:"#ffffff14",
                    borderRadius: 4
                }}
            >
                <p
                    style={{
                        color: "#fff",
                        fontSize: 20,
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        paddingBottom: 8
                    }}
                >
                    {name}
                </p>
                <svg
                    width="240"
                    height="2"
                    viewBox="0 0 240 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 1H240"
                        stroke="#C059FF"
                        stroke-linejoin="round"
                    />
                </svg>
                <p
                    style={{
                        color: "#fff",
                        textAlign: "center",
                        fontSize: 16,
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        paddingTop: 16,
                    }}
                >
                    Level: {level}
                </p>
                <Box
                    sx={{
                        width: 180,
                        height: 30,
                        background: "#C059ff1f",
                        borderRadius: 2,
                        border: 1,
                        borderColor: "#C059FF",
                        mt:1
                    }}
                >
                    <p
                        style={{
                            color: "#FFF",
                            textAlign: "center",
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 12,
                            paddingRight: 12,
                            fontSize: 12,
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                        }}
                    >
                        {role}
                    </p>
                </Box>
                <Box
                    sx={{
                        width: 180,
                        height: 30,
                        background: "#C059ff1f",
                        borderRadius: 2,
                        border: 1,
                        borderColor: "#C059FF",
                        mt:1
                    }}
                >
                    <p
                        style={{
                            color: "#FFF",
                            textAlign: "center",
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 12,
                            paddingRight: 12,
                            fontSize: 12,
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                        }}
                    >
                        @{tgUsername}
                    </p>
                </Box>
                <Box
                    sx={{
                        width: 180,
                        height: 30,
                        background: "#C059ff1f",
                        borderRadius: 2,
                        border: 1,
                        borderColor: "#C059FF",
                        mt:1
                    }}
                >
                    <p
                        style={{
                            color: "#FFF",
                            textAlign: "center",
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 12,
                            paddingRight: 12,
                            fontSize: 12,
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                        }}
                    >
                        {yearOfEducation} курс
                    </p>
                </Box>
            </Box>
        </>
    );
}

ComunityCard.defaultProps = {
    name: "Артём Цыканов",
    level: 101,
    tgUsername: "artem2203",
    role: "Frontend",
    yearOfEducation: 3,
};
