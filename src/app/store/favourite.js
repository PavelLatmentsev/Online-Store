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
            } else if (action.payload.likeStatus) {
                console.log(action.payload);
                const findItem = state.entities.findIndex(item => item._id === action.payload._id);
                console.log(findItem);
                state.entities[findItem].likeStatus = false;
                console.log(state.entities[findItem].likeStatus);
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
    return dispatch(likeItem(payload));
};

export const getLikeStatus = (id) => (state) => state.like.entities.find(item => item._id === id);
export const getLikeBox = () => (state) => state.like.entities;
export default favouriteReducer;
