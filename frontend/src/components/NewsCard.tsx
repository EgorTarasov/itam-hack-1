import NewsImageTest from "../assets/newsImageTest.svg";
import { Box, Stack, Button } from "@mui/material";

interface NewsCardProps {
    coverUrl: string;
    content: string;
}

export default function NewsCard(props: NewsCardProps) {
    const { coverUrl, content } = props;
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff1f",
                padding: 2.5,
                width: 634,
                alignItems: "flex-start",
                alignContent: "flex-start",
                borderRadius: "16px",
            }}
        >
            <Stack direction="row" spacing={2.5}>
                <Box>
                    <img
                        style={{ width: 263, height: 255, borderRadius: 16 }}
                        src={coverUrl ? coverUrl : "/images/news-1.png"}
                    />
                </Box>
                <Box>
                    <Stack
                        height={"100%"}
                        direction={"column"}
                        justifyContent={"space-between"}
                    >
                        <p
                            style={{
                                color: "#FFF",
                                fontWeight: "400",
                                fontSize: "14px",
                                paddingBottom: "12px",
                                wordWrap: "break-word",
                            }}
                        >
                            {content}
                        </p>

                        <Button
                            variant="outlined"
                            sx={{
                                backgroundColor: "#ffffff29",
                                borderRadius: "8px",
                                display: "flex",
                                padding: "8px 20px",
                                alignItems: "center",
                            }}
                        >
                            <Stack direction="row" spacing={2.5}>
                                <p
                                    style={{
                                        color: "#FFF",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        textTransform: "none",
                                    }}
                                >
                                    Перейти к новости
                                </p>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <svg
                                        width="61"
                                        height="15"
                                        viewBox="0 0 61 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M60.7071 8.20711C61.0976 7.81658 61.0976 7.18342 60.7071 6.79289L54.3431 0.428933C53.9526 0.0384082 53.3195 0.0384082 52.9289 0.428933C52.5384 0.819457 52.5384 1.45262 52.9289 1.84315L58.5858 7.5L52.9289 13.1569C52.5384 13.5474 52.5384 14.1805 52.9289 14.5711C53.3195 14.9616 53.9526 14.9616 54.3431 14.5711L60.7071 8.20711ZM0 8.5H60V6.5H0V8.5Z"
                                            fill="url(#paint0_linear_29_889)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear_29_889"
                                                x1="-1.25077e-06"
                                                y1="8"
                                                x2="49.7913"
                                                y2="30.7315"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="#FF6D88" />
                                                <stop
                                                    offset="1"
                                                    stop-color="#C059FF"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </Box>
                            </Stack>
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
