const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    entities: [],
    quantity: null
  },
  reducers: {
    cartItemIncrement: (state, action) => {
      console.log("action", action.payload);
      const findItem = state.entities.findIndex(item => item._id === action.payload._id);
      console.log("find", findItem);
      if (findItem !== -1) {
        state.entities[findItem] = { ...action.payload, quantity: action.payload.quantity + 1 };
      } else { state.quantity += 1; }
    },
    cartItemDecrement: (state, action) => {
      const findItem = state.entities.findIndex(item => item._id === action.payload._id);
      if (findItem !== -1 && state.entities[findItem].quantity !== 0) {
        state.entities[findItem] = { ...action.payload, quantity: action.payload.quantity - 1 };
      } else {
        state.quantity = state.quantity ? (state.quantity -= 1) : 0;
      }
    },
    addToShoppingCart: (state, action) => {
      const newItem = { ...action.payload, quantity: state.quantity };
      if (state.quantity) {
        state.entities.push(newItem);
      }
      state.quantity = 0;
    },
    removeFromShoppingCart: (state, action) => {
      state.entities = state.entities.filter(item => item._id !== action.payload);
    }
    // ShoppingCartIncrement: (action) => {
    //   console.log(action.payload);
    //   action.payload.quantity += 1;
    // },
    // ShoppingCartDecrement: (action) => {
    //   action.payload.quantity = action.payload.quantity ? (action.payload.quantity -= 1) : 0;
    // }
  }
});

const { reducer: cartReducer, actions } = cartSlice;
const { cartItemIncrement, cartItemDecrement, addToShoppingCart, removeFromShoppingCart } = actions;

export const addToCartItem = (payload) => (dispatch) => {
  dispatch(cartItemIncrement(payload));
};
export const removeFromCartItem = (payload) => (dispatch) => {
  dispatch(cartItemDecrement(payload));
};
// export const addToShoppingCartItem = (payload) => (dispatch) => {
//   dispatch(ShoppingCartIncrement(payload));
// };
// export const removeFromShoppingCartItem = (payload) => (dispatch) => {
//   dispatch(ShoppingCartDecrement(payload));
// };
export const addToCartItemsBox = (payload) => (dispatch) => {
  dispatch(addToShoppingCart(payload));
};
export const removeFromCartItemsBox = (id) => (dispatch) => {
  dispatch(removeFromShoppingCart(id));
};
export const getQuantity = () => (state) => state.shoppingCart.quantity;
export const getCartItemsBox = () => (state) => state.shoppingCart.entities;
export default cartReducer;
