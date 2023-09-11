import { Box, Button } from "@mui/material";
import { useRef } from "react";

import LandingData from "../assets/LandingData.svg";

export default function LandingPage() {
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [
            {
                src: "https://assets.codepen.io/6093409/river.mp4",
                type: "video/mp4",
            },
        ],
    };

    return (
        <Box sx={{ width: 632, height: 532, m: 5 }}>
            {/* <video
                autoPlay
                loop
                muted
                poster="https://assets.codepen.io/6093409/river.jpg"
                height={532}
                width={632}
            >
                <source
                    src="https://assets.codepen.io/6093409/river.mp4"
                    type="video/mp4"
                />
            </video> */}

            {/* <img
                src={LandingData}
                alt="landing_page"
                width="632"
                height="503"
                style={{ margin: 16 }}
            ></img> */}
        </Box>
    );
}
