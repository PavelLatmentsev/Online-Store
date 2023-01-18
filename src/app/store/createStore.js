import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favouriteReducer from "./favourite";
import searchReducer from "./search";
import { logger } from "./middleware/logger";
import usersReducer from "./users";
const rootReducer = combineReducers({ shoppingCart: cartReducer, like: favouriteReducer, search: searchReducer, users: usersReducer });

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  });
}
