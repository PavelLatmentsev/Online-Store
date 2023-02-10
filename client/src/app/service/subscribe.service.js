import httpService from "./http.service";

const subscribeEndpoint = "subscribe/";

const subscribeService = {
    get: async () => {
        const { data } = await httpService.get(subscribeEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(subscribeEndpoint, payload);
        return data;
    }
};
export default subscribeService;
