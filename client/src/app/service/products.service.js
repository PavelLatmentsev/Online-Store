import httpService from "./http.service";

const productsEndpoint = "product/";

const productsService = {
    get: async () => {
        const { data } = await httpService.get(productsEndpoint);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            productsEndpoint + payload._id,
            payload
        );
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.post(productsEndpoint, payload);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(productsEndpoint + id);
        return data;
    }

};
export default productsService;
