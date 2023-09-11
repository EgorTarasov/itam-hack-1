import {
    Box,
    Button,
    Modal,
    Typography
} from "@mui/material";


interface TeamNameProps{ 
    teamName: string
}


export default function JoinInTeam(props: TeamNameProps){
    const { teamName }= props;

    return (
        <>
        <Button onClick={handleOpen}>
        </Button>
        
        </>
    );
}