import { createSlice } from "@reduxjs/toolkit";
import likeService from "../service/like.service";
const favouriteSlice = createSlice({
    name: "like",
    initialState: {
        entities: [],
        dataLoaded: false,
        isLoading: false

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
        },
        likeRequested: (state) => {
            state.isLoading = true;
        },
        likeRecived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        likeRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});
const { reducer: favouriteReducer, actions } = favouriteSlice;
const {
    likeItem,
    likeRequested,
    likeRecived,
    likeRequestFailed

} = actions;
export const loadLikeList = () => async (dispatch) => {
    dispatch(likeRequested());
    try {
        const { content } = await likeService.get();
        dispatch(likeRecived(content));
    } catch (error) {
        dispatch(likeRequestFailed(error.message));
    }
};
export const addLike = (payload) => async (dispatch, getState) => {
    dispatch(likeRequested());
    if (payload.likeStatus) {
        try {
            const { content } = await likeService.remove(payload._id);
            console.log(content);
            dispatch(likeItem(payload));
        } catch (error) {
            dispatch(likeRequestFailed(error.message));
        }
    } else if (!payload.likeStatus || payload.likeStatus === "undefined") {
        dispatch(likeItem(payload));
        const { entities } = getState().like;
        console.log(entities);
        const newData = entities.find(item => item._id === payload._id);
        console.log(newData);
        try {
            const { content } = await likeService.create(newData);
            console.log(content);
        } catch (error) {
            dispatch(likeRequestFailed(error.message));
        }
    }
};

export const getLikeStatus = (id) => (state) => state.like.entities.find(item => item._id === id);
export const getLikeBox = () => (state) => state.like.entities;
export const getCurrentLikeBox = (userId) => (state) => state.like.entities.filter(item => userId === item.userId);
export default favouriteReducer;
