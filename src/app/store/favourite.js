import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "like",
    initialState: {
        entities: []
    },
    reducers: {
        likeItem: (state, action) => {
            if (!action.payload.likeStatus || action.payload.likeStatus === "undefined") {
                const likedItem = { ...action.payload, likeStatus: true };
                state.entities.push(likedItem);
            } else {
                action.payload.likeStatus = false;
                state.entities = state.entities.filter(item => item._id !== action.payload._id);
            }
        }
    }
});
const { reducer: favouriteReducer, actions } = favouriteSlice;
const {
    likeItem

} = actions;
export const addLike = (payload) => (dispatch) => {
    dispatch(likeItem(payload));
};

export const getLikeStatus = (id) => (state) => state.like.entities.find(item => {
    if (item._id === id) {
        return item.likeStatus;
    }
    return item;
});
export const getLikeBox = () => (state) => state.like.entities;
export default favouriteReducer;
