import { createSlice } from "@reduxjs/toolkit";
import commentsService from "../service/comments.service";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: []
    },
    reducers: {
        createComment(state, action) {
            state.entities.push(action.payload);
        },
        commentRequested: (state) => {
            state.isLoading = true;
        },
        commentRecived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        commentRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});
const { reducer: commentsReducer, actions } = commentsSlice;
const {
    createComment,
    commentRequested,
    commentRecived,
    commentRequestFailed
} = actions;

export const addComment = (payload) => async (dispatch) => {
    dispatch(commentRequested());
    try {
        const { content } = await commentsService.create(payload);
        dispatch(createComment(content));
    } catch (error) {
        dispatch(commentRequestFailed(error.message));
    }
};
export const getCommentsList = () => async (dispatch) => {
    dispatch(commentRequested());
    try {
        const { content } = await commentsService.get();
        dispatch(commentRecived(content));
    } catch (error) {
        dispatch(commentRequestFailed(error.message));
    }
};
export const getComments = () => (state) => state.comments.entities;
export default commentsReducer;
