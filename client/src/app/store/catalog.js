import { createSlice } from "@reduxjs/toolkit";
import catalogService from "../service/catalog.Service";

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        catalogRequested: (state) => {
            state.isLoading = true;
        },
        catalogRecived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        catalogRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
}
);

const { reducer: catalogReducer, actions } = catalogSlice;
const { catalogRequested, catalogRecived, catalogRequestFailed } = actions;

export const loadCatalogList = () => async (dispatch) => {
    dispatch(catalogRequested());
    try {
        const { content } = await catalogService.get();
        dispatch(catalogRecived(content));
    } catch (error) {
        dispatch(catalogRequestFailed(error.message));
    }
};

export const getCatalog = () => (state) => state.catalog.entities;
export const getCatalogLoadingStatus = () => (state) => state.catalog.isLoading;

export default catalogReducer;
