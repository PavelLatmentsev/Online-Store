const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    entities: [],
    quantity: null,
    promocode: "5"
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
    },
    promocodeData: (state, action) => {
      state.promocode = action.payload;
    }
  }
});

const { reducer: cartReducer, actions } = cartSlice;
const { cartItemIncrement, cartItemDecrement, addToShoppingCart, removeFromShoppingCart, promocodeData } = actions;

export const addToCartItem = (payload) => (dispatch) => {
  dispatch(cartItemIncrement(payload));
};
export const removeFromCartItem = (payload) => (dispatch) => {
  dispatch(cartItemDecrement(payload));
};
export const addToCartItemsBox = (payload) => (dispatch) => {
  dispatch(addToShoppingCart(payload));
};
export const removeFromCartItemsBox = (id) => (dispatch) => {
  dispatch(removeFromShoppingCart(id));
};
export const activatedPromocode = (payload) => (dispatch) => {
  dispatch(promocodeData(payload));
};

export const getQuantity = () => (state) => state.shoppingCart.quantity;
export const getCartItemsBox = () => (state) => state.shoppingCart.entities;
export const getTotalSale = () => (state) => {
  return state.shoppingCart.entities.reduce((total, current) => {
    const amountOfDiscount = current.sales ? current.sales * current.price : null;
    const totalSale = amountOfDiscount * current.quantity;
    total += totalSale;
    return total;
  }, 0);
};
export const getQuantityGoods = () => (state) => {
  return state.shoppingCart.entities.reduce((total, current) => {
    total += current.quantity;
    return total;
  }, 0);
};
export const getTotalSum = () => (state) => {
  return state.shoppingCart.entities.reduce((total, current) => {
    const amountOfDiscount = current.sales ? current.sales * current.price : null;
    const totalPrice = ((current.price - (amountOfDiscount)) * current.quantity);
    total += totalPrice;
    return total;
  }, 0);
};
export const getPromocode = () => (state) => state.shoppingCart.promocode;
export default cartReducer;
