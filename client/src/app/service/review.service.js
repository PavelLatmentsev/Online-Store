import httpService from "./http.service";

const reviewEndpoint = "review/";

const reviewService = {
    get: async () => {
        const { data } = await httpService.get(reviewEndpoint);
        console.log("data", data);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(reviewEndpoint, payload);
        return data;
    }
};
export default reviewService;
