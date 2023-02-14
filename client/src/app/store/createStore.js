import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import favouriteReducer from "./favourite";
import searchReducer from "./search";
import promocodeReducer from "./promocode";
import { logger } from "./middleware/logger";
import usersReducer from "./users";
import catalogReducer from "./catalog";
import commentsReducer from "./comments";
import subscribeReducer from "./subscribe";
import reviewReducer from "./review";
import managerReducer from "./manager";

const rootReducer = combineReducers({
  shoppingCart: cartReducer,
  like: favouriteReducer,
  search: searchReducer,
  users: usersReducer,
  promocode: promocodeReducer,
  catalog: catalogReducer,
  comments: commentsReducer,
  subscribe: subscribeReducer,
  review: reviewReducer,
  manager: managerReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  });
}
