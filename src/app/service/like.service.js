import httpService from "./http.service";

const likeEndpoint = "like/";

const likeService = {
    get: async () => {
        const { data } = await httpService.get(likeEndpoint);
        return data;
    },
    create: async (payload) => {
        const { data } = await httpService.put(likeEndpoint + payload._id, payload);
        return data;
    },
    remove: async (id) => {
        const { data } = await httpService.delete(likeEndpoint + id);
        return data;
    }

};
export default likeService;
