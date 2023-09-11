import { apiSlice } from "../../app/api/apiSlice";
import { User } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: "/auth/login",
                method: "POST",
                body: {
                    email: username,
                    password: password,
                },
            }),
        }),

        register: builder.mutation({
            query: ({ first_name, last_name, password, email }) => ({
                url: "/auth/signup",
                method: "POST",
                body: {
                    first_name: first_name,
                    last_name: last_name,
                    password: password,
                    email: email,
                },
            }),
        }),
        postSurvey: builder.mutation({
            query: ({ roles, goals, tg_username }) => ({
                url: "/api/v1/users/survey",
                method: "POST",
                body: {
                    roles: roles,
                    goals: goals,
                    tg_username: tg_username,
                },
            }),
        }),
        getCurrentUser: builder.mutation({
            query: () => ({
                url: "/api/v1/users/profile/me",
                method: "GET",
            }),
        }),
        postCurrentUser: builder.mutation({
            query: (user: User) => ({
                url: "/api/v1/users/update",
                method: "POST",
                body: user,
            }),
        }),
        getAvaliableRoles: builder.mutation({
            query: () => ({
                url: "/api/v1/tags/roles",
                method: "GET",
            }),
        }),
    }),
});
// /api/v1/tags/roles

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetCurrentUserMutation,
    usePostSurveyMutation,
    usePostCurrentUserMutation,
    useGetAvaliableRolesMutation,
} = authApiSlice;
