import { createSlice } from "@reduxjs/toolkit";
import reviewService from "../service/review.service";

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        reviewRequested: (state) => {
            state.isLoading = true;
        },
        reviewRecived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        reviewRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        createReview(state, action) {
            state.entities.push(action.payload);
        }
    }
}
);

const { reducer: reviewReducer, actions } = reviewSlice;
const { reviewRequested, reviewRecived, reviewRequestFailed, createReview } = actions;

export const loadReviewList = () => async (dispatch) => {
    dispatch(reviewRequested());
    try {
        const { content } = await reviewService.get();
        dispatch(reviewRecived(content));
    } catch (error) {
        dispatch(reviewRequestFailed(error.message));
    }
};
export const addReview = (payload) => async (dispatch) => {
    dispatch(reviewRequested());
    try {
        const { content } = await reviewService.create(payload);
        dispatch(createReview(content));
    } catch (error) {
        dispatch(reviewRequestFailed(error.message));
    }
};

export const getReviewList = () => (state) => state.review.entities;
export const getReviewLoadingStatus = () => (state) => state.review.isLoading;
export default reviewReducer;
