import httpService from "./http.service";

const promocodeEndpoint = "promocode/";

const promocodeService = {
    get: async () => {
        const { data } = await httpService.get(promocodeEndpoint);
        return data;
    }
};
export default promocodeService;
