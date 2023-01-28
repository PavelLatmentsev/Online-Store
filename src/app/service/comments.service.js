import httpService from "./http.service";

const commentsEndpoint = "comment/";

const commentsService = {
    get: async () => {
        const { data } = await httpService.get(commentsEndpoint);
        return data;
    },
    update: async (payload) => {
        const { data } = await httpService.patch(
            commentsEndpoint + payload._id,
            payload
        );
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(commentsEndpoint + payload._id, payload);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(commentsEndpoint + id);
        return data;
    }

};
export default commentsService;
