import { createSlice } from "@reduxjs/toolkit";
import managerService from "../service/manager.service";

const managerSlice = createSlice({
    name: "manager",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        managerRequested: (state) => {
            state.isLoading = true;
        },
        managerRecived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        managerRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        createManager(state, action) {
            state.entities.push(action.payload);
        }
    }
}
);

const { reducer: managerReducer, actions } = managerSlice;
const { managerRequested, managerRecived, managerRequestFailed, createManager } = actions;

export const loadManagerList = () => async (dispatch) => {
    dispatch(managerRequested());
    try {
        const { content } = await managerService.get();
        console.log("contentManager", content);
        dispatch(managerRecived(content));
    } catch (error) {
        dispatch(managerRequestFailed(error.message));
    }
};
export const addManager = (payload) => async (dispatch) => {
    dispatch(managerRequested());
    try {
        const { content } = await managerService.create(payload);
        dispatch(createManager(content));
    } catch (error) {
        dispatch(managerRequestFailed(error.message));
    }
};

export const getManagerList = () => (state) => state.manager.entities;
export const getManagerLoadingStatus = () => (state) => state.manager.isLoading;
export default managerReducer;
