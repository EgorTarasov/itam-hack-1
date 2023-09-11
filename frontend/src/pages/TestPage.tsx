import {
    Autocomplete,
    TextField,
    Button,
    Box,
    Grid,
    Modal,
    Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    color: "#fff",
    bgcolor: "#4B4A49",
    border: "2px solid #000",
    boxShadow: 24,
    gap: 2,
    p: 4,
};

interface SearchUserProps {
    fio: string;
    tg_username: string;
    role: string;
}

function SearchUser(props: SearchUserProps) {
    const { fio, tg_username, role } = props;
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff1f",
                padding: 2.5,
                borderRadius: 4,
                alignContent: "center",
                alignItems: "center",
            }}
        >
            <Stack direction={"row"} spacing={11.25}>
                <Box
                    sx={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Stack>
                        <p
                            style={{
                                color: "#fff",
                                fontSize: "16px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "normal",
                                paddingBottom: "12px",
                            }}
                        >
                            {fio}
                        </p>
                        <Stack direction={"row"}>
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
                                    @{tg_username}
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
                                {role}
                            </p>
                        </Stack>
                    </Stack>
                </Box>
                <Button
                    variant={"contained"}
                    sx={{
                        textTransform: "none",
                        borderRadius: 3,
                        border: "1px solid #C059FF",
                        background: "#C059FF",
                        padding: "12px 32px",
                    }}
                >
                    <p
                        style={{
                            color: "#fff",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "normal",
                        }}
                    >
                        Пригласить в команду
                    </p>
                </Button>
            </Stack>
        </Box>
    );
}

function ModalBody() {
    const [fio, setFio] = useState<string>("");
    const [fios, setFios] = useState<string[]>([]);
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    useEffect(() => {}, []);
    function inviteUser() {}

    return (
        <Box sx={style}>
            <p
                style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "normal",
                    paddingBottom: "24px",
                }}
            >
                Поиск среди зарегистрированных участников
            </p>
            <Autocomplete
                disablePortal
                options={[fios]}
                sx={{
                    width: 400,
                    height: 51,
                    background: "#fff",
                    borderRadius: 3,
                }}
                renderInput={(params) => <TextField {...params} label="ФИО" />}
            />
            <Box>
                <p
                    style={{
                        paddingTop: "24px",
                        paddingBottom: "12px",
                        color: "#ffffffa3",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                    }}
                >
                    Результаты поиска
                </p>
                <SearchUser
                    fio="Тарасова Елизавета"
                    tg_username="dvij_designer"
                    role="Продуктовый дизайнер"
                />
            </Box>
        </Box>
    );
}

export default function BasicModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalBody />
            </Modal>
        </div>
    );
}
