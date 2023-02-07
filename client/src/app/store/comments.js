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
        },
        removeFromShoppingCart: (state, action) => {
            state.entities = state.entities.filter(
                (item) => item._id !== action.payload
            );
        },
        updateComment: (state, action) => {
            state.entities[
                state.entities.findIndex((item) => item._id === action.payload._id)
            ] = action.payload;
        }
    }
});
const { reducer: commentsReducer, actions } = commentsSlice;
const {
    createComment,
    commentRequested,
    commentRecived,
    commentRequestFailed,
    removeFromShoppingCart,
    updateComment
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
export const removeComment = (id) => async (dispatch) => {
    dispatch(commentRequested());
    try {
        const { content } = await commentsService.remove(id);
        if (!content) {
            dispatch(removeFromShoppingCart(id));
        }
    } catch (error) {
        dispatch(commentRequestFailed(error.message));
    }
};
export const updateCommentData = (payload) => async (dispatch) => {
    dispatch(commentRequested());
    try {
        const { content } = await commentsService.update(payload);
        dispatch(updateComment(content));
    } catch (error) {
        dispatch(commentRequestFailed(error.message));
    }
};
export const getComments = () => (state) => state.comments.entities;
export const getCommentsByPageId = (pageId) => (state) => state.comments.entities.filter(item => item.pageId === pageId);
export default commentsReducer;
