import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import cartReducer from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});