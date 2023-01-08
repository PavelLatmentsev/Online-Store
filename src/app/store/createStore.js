import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
const rootReducer = combineReducers({ shoppingCart: cartReducer });

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
