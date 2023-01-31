import httpService from "./http.service";

const catalogEndpoint = "catalog/";

const catalogService = {
    get: async () => {
        const { data } = await httpService.get(catalogEndpoint);
        return data;
    }
};
export default catalogService;
