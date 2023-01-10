const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    entities: [],
    quantity: null,
    promoSale: null
  },
  reducers: {
    cartItemIncrement: (state, action) => {
      const findItem = state.entities.findIndex(
        (item) => item._id === action.payload._id
      );
      if (findItem !== -1) {
        state.entities[findItem] = {
          ...action.payload,
          quantity: action.payload.quantity + 1
        };
      } else {
        state.quantity += 1;
      }
    },
    cartItemDecrement: (state, action) => {
      const findItem = state.entities.findIndex(
        (item) => item._id === action.payload._id
      );
      if (findItem !== -1 && state.entities[findItem].quantity !== 0) {
        state.entities[findItem] = {
          ...action.payload,
          quantity: action.payload.quantity - 1
        };
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
      state.entities = state.entities.filter(
        (item) => item._id !== action.payload
      );
    },
    findPromoSale: (state, action) => {
      console.log(action.payload);
      if (action.payload.promocodeData === "driksell1000" && action.payload.totalSum > 10000) {
        state.promoSale = 1000;
       } else if (action.payload.promocodeData === "driksell3000" && action.payload.totalSum > 30000) {
        state.promoSale = 3000;
       } else if (action.payload.promocodeData === "driksell500" && action.payload.totalSum > 5000) {
        state.promoSale = 500;
       } else if (action.payload.promocodeData === "driksell5000" && action.payload.totalSum > 50000) {
        state.promoSale = 5000;
       } else if (action.payload.promocodeData === "driksell10000" && action.payload.totalSum > 100000) {
        state.promoSale = 10000;
       } else if (action.payload.promocodeData === "driksell15000" && action.payload.totalSum > 150000) {
        state.promoSale = 15000;
       } else {
        state.promoSale = 0;
       }
    },
    cleanCart: (state) => {
      state.entities = [];
      state.promoSale = null;
    }
  }
});

const { reducer: cartReducer, actions } = cartSlice;
const {
  cartItemIncrement,
  cartItemDecrement,
  addToShoppingCart,
  removeFromShoppingCart,
  findPromoSale,
  cleanCart
} = actions;

export const cleanAllCart = () => (dispatch) => {
  dispatch(cleanCart());
};
export const findPromoSaleCart = (payload) => (dispatch) => {
  dispatch(findPromoSale(payload));
};
export const addToCartItem = (payload) => (dispatch) => {
  dispatch(cartItemIncrement(payload));
};
export const removeFromCartItem = (payload) => (dispatch) => {
  dispatch(cartItemDecrement(payload));
};
export const addToCartItemsBox = (payload) => (dispatch) => {
  dispatch(addToShoppingCart(payload));
};
export const removeFromCartItemsBox = (id, redirect) => (dispatch) => {
  dispatch(removeFromShoppingCart(id));
};

export const getQuantity = () => (state) => state.shoppingCart.quantity;
export const getCartItemsBox = () => (state) => state.shoppingCart.entities;
export const getTotalSale = () => (state) => {
  return state.shoppingCart.entities.reduce((total, current) => {
    const amountOfDiscount = current.sales
      ? current.sales * current.price
      : null;
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
    const amountOfDiscount = current.sales
      ? current.sales * current.price
      : null;
    const totalPrice = (current.price - amountOfDiscount) * current.quantity;
    total += totalPrice;
    return total;
  }, 0);
};
export const getPromosale = () => (state) => state.shoppingCart.promoSale;
export default cartReducer;
