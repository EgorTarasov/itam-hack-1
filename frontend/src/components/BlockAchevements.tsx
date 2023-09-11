import { Box, Button, Stack } from "@mui/material";
import DataBox from "./DataBox";

type Achevement = {
    place: number;
    name: string;
};

function DiplomaCard(props: { place: number; name: string }) {
    return (
        <Stack direction={"row"} spacing={4}>
            <DataBox text={`${props.place}место`} fontSize={14} />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <p
                    style={{
                        color: "#FFF",
                        fontSize: "14px",
                        fontFamily: "SF Pro Display",
                        fontWeight: "700",
                    }}
                >
                    {props.name}
                </p>
            </Box>
        </Stack>
    );
}

export default function BlockAchevements(props: {
    admin: boolean;
    achevements: Achevement[];
}) {
    // #TODO: server request to get diplomas
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff14",
                borderRadius: 4,
                padding: 2,
                minWidth: 300,
                p: 2,
                height: "100%",
            }}
        >
            {/* block achevements */}
            {/* make button align in ceter by y axis */}

            <Stack
                direction={"row"}
                spacing={4}
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2
                    style={{
                        color: "#FFF",
                        fontSize: "20px",
                    }}
                >
                    Достижения
                </h2>

                {!props.admin && (
                    <Button
                        variant="contained"
                        sx={{
                            minWidth: 0,
                            width: 20,
                            height: 20,
                            padding: 0,
                            backgroundColor: "#ffffff14",
                        }}
                    >
                        +
                    </Button>
                )}
            </Stack>
            <Stack direction={"column"}>
                {props.achevements.map((item) => (
                    <DiplomaCard place={item.place} name={item.name} />
                ))}
            </Stack>
        </Box>
    );
}

BlockAchevements.defaultProps = {
    admin: false,
    achevements: [
        {
            place: 1,
            name: "ЛЦТ-2023",
        },
        {
            place: 1,
            name: "ITAM.HACK 2023",
        },
    ],
};
