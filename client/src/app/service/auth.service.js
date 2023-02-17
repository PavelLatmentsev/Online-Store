import axios from "axios";
import config from "../utils/config.json";
import localStorageService from "./localStorage.service";
const httpAuth = axios.create({
    baseURL: config.apiEndpoint + "/auth/",
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
});
const authService = {
    register: async (payload) => {
        const { data } = await httpAuth.post(`signUp`, payload);
        return data;
    },
    login: async ({ email, password }) => {
        const { data } = await httpAuth.post(`signInWithPassword`, { email, password, returnSecureToken: true });
        return data;
    },
    refresh: async () => {
        const { data } = await httpAuth.post("token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        console.log("data", data);
        return data;
    }

};
export default authService;
