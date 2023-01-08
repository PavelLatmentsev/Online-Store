const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    entities: [],
    totalNumber: 0
  },
  reducers: {
    cartItemIncrement: (state) => {
      state.totalNumber = state.totalNumber + 1;
    },
    cartItemDecrement: (state) => {
      state.totalNumber = state.totalNumber - 1;
    }
  }
});

const { reducer: cartReducer, actions } = cartSlice;
const { cartItemIncrement, cartItemDecrement } = actions;

export const addToCartItem = () => (dispatch) => {
 dispatch(cartItemIncrement());
};
export const removeFromCartItem = () => (dispatch) => {
    dispatch(cartItemDecrement());
   };
export const getNumber = () => (state) => state.shoppingCart.totalNumber;
export default cartReducer;
