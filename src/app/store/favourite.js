import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "like",
    initialState: {
        entities: []
    },
    reducers: {
        likeItem: (state, action) => {
            if (action.payload.likeStatus) {
                const findItem = state.entities.findIndex(item => item._id === action.payload._id);
                state.entities[findItem].likeStatus = false;
                state.entities = state.entities.filter(item => item._id !== action.payload._id);
            } else if (!action.payload.likeStatus || action.payload.likeStatus === "undefined") {
                const findItem = state.entities.findIndex(item => item._id === action.payload._id);
                if (findItem === -1) {
                    const likedItem = { ...action.payload, likeStatus: true };
                    state.entities.push(likedItem);
                } else {
                    state.entities[findItem].likeStatus = false;
                    state.entities = state.entities.filter(item => item._id !== action.payload._id);
                }
            }
        }
    }
});
const { reducer: favouriteReducer, actions } = favouriteSlice;
const {
    likeItem

} = actions;
export const addLike = (payload) => (dispatch) => {
    return dispatch(likeItem(payload));
};

export const getLikeStatus = (id) => (state) => state.like.entities.find(item => item._id === id);
export const getLikeBox = () => (state) => state.like.entities;
export default favouriteReducer;
