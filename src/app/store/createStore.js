import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favouriteReducer from "./favourite";
const rootReducer = combineReducers({ shoppingCart: cartReducer, like: favouriteReducer });

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
