import { Autocomplete, TextField, Button, Box, Grid } from "@mui/material";
import ComunityCard from "../components/BlockComunity.tsx";
import axios from "axios";
import { useEffect, useState } from "react";
import { UserRole } from "../features/user/authSlice.ts";
import RegisteredNavBar from "../components/RegisteredNavBar.tsx";
import API_HOST from "../app/api/api.ts";

export default function CommunityPage() {
    const [avaliableRoles, setAvaliableRoles] = useState<UserRole[]>([]);
    const [selectedRoles, setSelectedRoles] = useState<UserRole[]>([]);
    // const [fios, setFios] = useState<string[]>([]);

    useEffect(() => {
        axios.get(API_HOST + "/api/v1/tags/roles").then((response) => {
            setAvaliableRoles(response.data);
        });
    }, []);

    const fios = [
        "Тарасов Егор",
        "Цыканов Артем",
        "Тарасова Лиза",
        "Гуров Женя",
    ];

    if (avaliableRoles.length === 0) {
        return <></>;
    } else {
        return (
            <>
                <RegisteredNavBar />
                <Box sx={{ paddingLeft: "70px", paddingRight: "70px" }}>
                    <Box
                        sx={{
                            marginTop: "69px",
                            marginBottom: "36px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={fios}
                            sx={{
                                width: 640,
                                height: 51,
                                background: "#fff",
                                borderRadius: 3,
                            }}
                            renderInput={(params) => (
                                <TextField {...params} label="ФИО" />
                            )}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                background: "#C059FF",
                                width: 93,
                                height: 43,
                                borderRadius: 3,
                                marginLeft: -12,
                            }}
                        >
                            <p
                                style={{
                                    color: "#fff",
                                    fontSize: 16,
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "normal",
                                }}
                            >
                                Найти
                            </p>
                        </Button>
                    </Box>
                    {/* create dataBox for everu avaliableRole */}
                    <Grid container sx={{ marginBottom: "50px" }}>
                        {avaliableRoles.map((role) => (
                            <Grid item key={role.id}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        // FIXME: double click on button
                                        if (selectedRoles.includes(role)) {
                                            setSelectedRoles(
                                                selectedRoles.filter(
                                                    (r) => r !== role,
                                                ),
                                            );
                                        } else {
                                            setSelectedRoles([
                                                ...selectedRoles,
                                                role,
                                            ]);
                                        }
                                    }}
                                    sx={{
                                        backgroundColor: selectedRoles.includes(
                                            role,
                                        )
                                            ? "#C059FF"
                                            : "#c059ff1f",
                                        color: "#ffffff",
                                        minWidth: "0",
                                        border: "1px solid #C059FF",
                                        borderRadius: "4px",
                                        textTransform: "none",
                                        fontSize: "14px",
                                        marginBottom: "12px",
                                        marginRight: "12px",
                                    }}
                                >
                                    {role.role_name}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                    <ComunityCard></ComunityCard>
                </Box>
            </>
        );
    }
}
