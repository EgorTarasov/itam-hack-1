import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCredentials, selectCurrentToken } from "../features/user/authSlice";
import { Outlet } from "react-router-dom";

export default function RequireAuth() {
    // get current path from router
    const location = useLocation();
    const currentToken = useSelector(selectCurrentToken);
    const dispatch = useDispatch();
    const [localToken, setLocalToken] = useState<string | null>(
        localStorage.getItem("token"),
    );

    useEffect(() => {
        // try to get token from local storage
        console.log(location.pathname);
        console.log(`token from local storage: ${localToken}`);
        console.log(`token from redux: ${currentToken}`);
        if (localToken != null) {
            dispatch(setCredentials({ accessToken: localToken, user: null }));
        }
    }, [currentToken]);

    return localToken != null ? (
        <Outlet />
    ) : (
        <Navigate to="/auth" />
    );
}
