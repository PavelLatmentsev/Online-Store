import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favouriteReducer from "./favourite";
import searchReducer from "./search";
import { logger } from "./middleware/logger";
const rootReducer = combineReducers({ shoppingCart: cartReducer, like: favouriteReducer, search: searchReducer });

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  });
}
