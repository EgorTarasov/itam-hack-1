import { Box } from "@mui/material";

export default function DataBox(props: { text: string; fontSize: number }) {
    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#C059FF1F",
                border: "1px solid #C059FF",
                borderRadius: 4,
                py: 1,
                px: 3,
                maxWidth: "250px",
                minWidth: "250px",
            }}
        >
            <p
                style={{
                    color: "#FFFFFF",
                    fontSize: `${props.fontSize}px`,
                }}
            >
                {props.text}
            </p>
        </Box>
    );
}
