import { createSlice } from "@reduxjs/toolkit";
import subscribeService from "../service/subscribe.service";

const subscribeSlice = createSlice({
    name: "subscribe",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        subscribeRequested: (state) => {
            state.isLoading = true;
        },
        subscribeRecived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        subscribeRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        createSubscribe(state, action) {
            state.entities.push(action.payload);
        }
    }
}
);

const { reducer: subscribeReducer, actions } = subscribeSlice;
const { subscribeRequested, subscribeRecived, subscribeRequestFailed, createSubscribe } = actions;

export const loadSubscribeList = () => async (dispatch) => {
    dispatch(subscribeRequested());
    try {
        const { content } = await subscribeService.get();
        dispatch(subscribeRecived(content));
    } catch (error) {
        dispatch(subscribeRequestFailed(error.message));
    }
};
export const addSubscribe = (payload) => async (dispatch) => {
    dispatch(subscribeRequested());
    try {
        const { content } = await subscribeService.create(payload);
        dispatch(createSubscribe(content));
    } catch (error) {
        dispatch(subscribeRequestFailed(error.message));
    }
};

export const getSubscribeList = () => (state) => state.catalog.entities;
export const getCatalogLoadingStatus = () => (state) => state.catalog.isLoading;
export default subscribeReducer;
