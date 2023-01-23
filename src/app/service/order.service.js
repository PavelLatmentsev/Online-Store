import httpService from "./http.service";

const orderEndpoint = "order/";

const orderService = {
    get: async () => {
        const { data } = await httpService.get(orderEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(orderEndpoint + payload.orderId, payload);
        return data;
    }

};
export default orderService;
