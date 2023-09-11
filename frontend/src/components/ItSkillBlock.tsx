import {
    Box,
    Grid,
    Autocomplete,
    TextField,
    Button,
    Stack,
} from "@mui/material";
import { useState } from "react";

export default function ItSkillBlock() {
    // get tags from endpoint
    // add function to add tags on "enter press"

    const [tags, setTags] = useState([]);

    const avaliableTags = [
        "Figma",
        "Adobe XD",
        "Adobe Photoshop",
        "Python",
        "Java/Kotlin",
        "Product Management",
        "backend",
        "frontend",
        "fullstack",
        "IOS",
        "Android",
        "Flutter",
        "React",
        "TypeScript",
        "Svelte",
        "Vue",
        "Angular",
    ];
    return (
        <Box
            sx={{
                padding: 2,
                backgroundColor: "#ffffff14",
                textAlign: "left",
                borderRadius: 4,
                height: "100%",
            }}
        >
            {/* add bottom border to h2 */}
            <p
                style={{
                    paddingBottom: "5px",
                    fontWeight: "700",
                    color: "#FFF",
                }}
            >
                ИТ-Компетенции
            </p>
            <Grid container sx={{}}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={avaliableTags}
                    sx={{ width: 200, color: "#FFF", height: "30px" }}
                    renderInput={(params) => (
                        <Stack direction="row">
                            <TextField
                                sx={{
                                    backgroundColor: "#ffffff14",
                                    color: "#FFF",
                                    borderRadius: 4,
                                }}
                                {...params}
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        // add tag to tags
                                        // check if tag is already in tags
                                        // limit amount of tags to 8

                                        if (
                                            tags.includes(
                                                // @ts-ignore
                                                params.inputProps.value,
                                            )
                                        ) {
                                            console.log("already in tags");
                                            return;
                                        }

                                        setTags([
                                            // @ts-ignore
                                            ...tags,
                                            // @ts-ignore
                                            params.inputProps.value,
                                        ]);
                                        console.log(tags);
                                        // clear input
                                        params.inputProps.value = "";
                                    }
                                }}
                                label="Выберите компетенции"
                            />
                        </Stack>
                    )}
                />
                {/* split tags in groups by 4 and display as rows in this grid */}
                <Grid item xs={12} sx={{ mt: 3 }}>
                    <Grid container>
                        {tags.map((tag) => (
                            <Grid item xs={3}>
                                <Box
                                    sx={{
                                        textAlign: "center",
                                        backgroundColor: "#C059FF1F",
                                        border: "1px solid #C059FF",
                                        borderRadius: 4,
                                        padding: 1,
                                        my: 1,
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        alignContent={"center"}
                                        justifyContent={"center"}
                                    >
                                        {/* make even spacing inside stack */}
                                        <p
                                            style={{
                                                color: "#FFFFFF",
                                                fontSize: `14px`,
                                            }}
                                        >
                                            {tag}
                                        </p>
                                        {/* add button to delete tag */}
                                        <Button
                                            sx={{
                                                color: "#FFFFFFA3",
                                                fontSize: `10px`,
                                                fontFamily: "Roboto",
                                                padding: 0,
                                                ml: 2,
                                                minWidth: 0,
                                            }}
                                            onClick={() => {
                                                setTags(
                                                    tags.filter(
                                                        (item) => item !== tag,
                                                    ),
                                                );
                                            }}
                                        >
                                            x
                                        </Button>
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
