const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    entities: [],
    totalNumber: 0
  },
  reducers: {
    cartItemIncrement: (state) => {
      state.totalNumber += 1;
    },
    cartItemDecrement: (state) => {
      state.totalNumber = state.totalNumber ? (state.totalNumber -= 1) : 0;
    },
    addToShoppingCart: (state, action) => {
      const newItem = { ...action.payload, totalNumber: state.totalNumber };
      state.entities.push(newItem);
    }
  }
});

const { reducer: cartReducer, actions } = cartSlice;
const { cartItemIncrement, cartItemDecrement, addToShoppingCart } = actions;

export const addToCartItem = () => (dispatch) => {
  dispatch(cartItemIncrement());
};
export const removeFromCartItem = () => (dispatch) => {
  dispatch(cartItemDecrement());
};
export const addToCartItemsBox = (payload) => (dispatch) => {
  dispatch(addToShoppingCart(payload));
};
export const getNumber = () => (state) => state.shoppingCart.totalNumber;
export const getCartItemsBox = () => (state) => state.shoppingCart.entities;
export default cartReducer;
