import httpService from "./http.service";

const managerEndpoint = "manager/";

const managerService = {
    get: async () => {
        const { data } = await httpService.get(managerEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(managerEndpoint, payload);
        return data;
    }
};
export default managerService;
