import { createSlice } from "@reduxjs/toolkit";
import promocodeService from "../service/promocode.service";

const promocodeSlice = createSlice({
    name: "promocode",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        promocodeRequested: (state) => {
            state.isLoading = true;
        },
        promocodeRecived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        promocodeRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
}
);

const { reducer: promocodeReducer, actions } = promocodeSlice;
const { promocodeRequested, promocodeRecived, promocodeRequestFailed } = actions;

export const loadPromocodeList = () => async (dispatch) => {
    dispatch(promocodeRequested());
    try {
        const { content } = await promocodeService.get();
        dispatch(promocodeRecived(content));
    } catch (error) {
        dispatch(promocodeRequestFailed(error.message));
    }
};

export const getPromocode = () => (state) => state.promocode.entities;
export const getPromocodeLoadingStatus = () => (state) => state.promocode.isLoading;

export default promocodeReducer;
