import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        entities: []
    },
    reducers: {
        searchResult: (state, action) => {
          state.entities = action.payload;
        }
    }
});
const { reducer: searchReducer, actions } = searchSlice;
const {
    searchResult

} = actions;

export const searchResultBox = (payload) => (dispatch) => {
    dispatch(searchResult(payload));
};

export const getSearchResultBox = () => (state) => state.search.entities;
export default searchReducer;
