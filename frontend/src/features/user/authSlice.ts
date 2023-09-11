import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

type AuthState = {
    token: string | null;
    user: User | null;
};

type AuthData = {
    accessToken: string | null;
    user: any;
};

type UserData = {
    user: User;
};

const authSlice = createSlice({
    name: "auth",
    initialState: <AuthState>{
        token: null,
        user: null,
    },
    reducers: {
        setCredentials: (state: AuthState, action: PayloadAction<AuthData>) => {
            // if (action.payload.accessToken === null) {
            //     return;
            // }
            // log state.token with description message
            console.log("state.token: ", state.token);
            if (action.payload.accessToken) {
                state.token = action.payload.accessToken;
                localStorage.setItem("token", state.token!);
            }
            state.user = action.payload.user;
        },
        setUser: (state: AuthState, action: PayloadAction<any>) => {
            state.user = action.payload.user;
        },
        logoutUser: (state: AuthState) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
        },
    },
});

export default authSlice.reducer;
export const { setCredentials, logoutUser, setUser } = authSlice.actions;

export const selectCurrentUser = (state: any) => state.auth.user;
export const selectCurrentToken = (state: any) => state.auth.token;
