import axios from "axios";
import { toast } from "react-toastify";
import configFile from "../utils/config.json";
import authService from "./auth.service";
import localStorageService from "./localStorage.service";

const http = axios.create({ baseURL: configFile.apiEndpoint });
http.interceptors.request.use(
    async function (config) {
        const expireseDate = localStorageService.getTokenExpriceDate();
        const refreshToken = localStorageService.getRefreshToken();
        const isExpired = refreshToken && expireseDate > Date.now();
        if (configFile.isFireBase) {
            const containSlash = /\/$/gi.test(config.url);
            config.url =
                (containSlash ? config.url.slice(0, -1) : config.url) + ".json";

            if (isExpired) {
                const data = await authService.refresh();
                localStorageService.setTokens({
                    refreshToken: data.refresh_token,
                    idToken: data.id_token,
                    localId: data.user_id,
                    expiresIn: data.expires_in
                });
            }
            const accessToken = localStorageService.getAccesToken();
            if (accessToken) {
                config.params = { ...config.params, auth: accessToken };
            }
        } else {
            if (isExpired) {
                const data = await authService.refresh();
                localStorageService.setTokens(data);
            }
            const accessToken = localStorageService.getAccesToken();
            if (accessToken) {
                config.headers = {
                    ...config.headers,
                     Authorization: `Bearer ${accessToken}`
                    };
            }
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
function transformData(data) {
    return data && !data._id
        ? Object.keys(data).map((key) => ({
            ...data[key]
        }))
        : data;
}
http.interceptors.response.use(
    (res) => {
        if (configFile.isFireBase) {
            res.data = { content: transformData(res.data) };
        }
        res.data = { content: res.data };
        return res;
    },

    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            toast.error(error);
            toast.info("Thomthing was wrong!!! Try it later ");
        }
        return Promise.reject(error);
    }
);
const httpService = {
    get: http.get,
    put: http.put,
    post: http.post,
    delete: http.delete,
    patch: http.patch
};
export default httpService;
