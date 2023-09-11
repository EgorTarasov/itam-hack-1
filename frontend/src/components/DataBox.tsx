import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DataBox(props: {
    text: string;
    fontSize: number;
    link_url: string | null | undefined;
}) {
    const navigate = useNavigate();

    function handleSubmit() {
        if (props.link_url) {
            navigate(props.link_url);
        }
    }
    return (
        <Button
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
            onClick={handleSubmit}
        >
            <p
                style={{
                    color: "#FFFFFF",
                    fontSize: `${props.fontSize}px`,
                }}
            >
                {props.text}
            </p>
        </Button>
    );
}

DataBox.defaultProps = {
    link_url: null,
};
