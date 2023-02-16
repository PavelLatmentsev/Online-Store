import orderService from "../service/order.service";
import history from "../utils/history";
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    entities: [],
    orders: [],
    quantity: null,
    promoSale: null,
    dataLoaded: false,
    isLoading: false,
    error: null
  },
  reducers: {
    updateShoppingCart: (state, action) => {
      const findItem = state.entities.findIndex(
        (item) => item._id === action.payload._id
      );
      if (findItem !== -1 && state.entities[findItem].quantity !== 0) {
        state.entities[findItem] = action.payload;
      }
    },
    addToShoppingCart: (state, action) => {
      const findItem = state.entities.findIndex(
        (item) => item._id === action.payload._id
      );
      if (findItem !== -1 && state.entities[findItem].quantity !== 0) {
        state.entities[findItem].quantity += action.payload.quantity;
      } else {
        state.entities.push(action.payload);
      }
    },
    removeFromShoppingCart: (state, action) => {
      state.entities = state.entities.filter(
        (item) => item._id !== action.payload
      );
    },
    findPromoSale: (state, action) => {
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
    },
    createOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    orderRequested: (state) => {
      state.isLoading = true;
    },
    orderRecived: (state, action) => {
      state.orders = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    orderRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
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
  cleanCart,
  createOrder,
  orderRequestFailed,
  orderRecived,
  orderRequested,
  updateShoppingCart
} = actions;

export const addOrderToOrders = (payload) => async (dispatch) => {
  const numberofOrder = Date.now();
  const OrderData = { ...payload, numData: numberofOrder };
  dispatch(orderRequested());
  try {
    const { content } = await orderService.create(OrderData);
    dispatch(createOrder(content));
    history.push(`/order/${content._id}`);
    dispatch(cleanCart());
  } catch (error) {
    dispatch(orderRequestFailed(error.message));
  }
};
export const getOrdersList = () => async (dispatch) => {
  dispatch(orderRequested());
  try {
    const { content } = await orderService.get();
    dispatch(orderRecived(content));
  } catch (error) {
    dispatch(orderRequestFailed(error.message));
  }
};
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
export const updateCartItemBox = (payload) => (dispatch) => {
  dispatch(updateShoppingCart(payload));
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
export const getOrders = () => (state) => state.shoppingCart.orders;
export const getCurrentOrder = (id) => (state) => state.shoppingCart.orders ? state.shoppingCart.orders.filter(o => o._id === id) : null;
export const getCurrentOrders = (id) => (state) => state.shoppingCart.orders ? state.shoppingCart.orders.filter(o => o.userId === id) : null;
export default cartReducer;
