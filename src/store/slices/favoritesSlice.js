import { createSlice } from "@reduxjs/toolkit";

const getStorageKey = (userId) => `favorites_${userId}`;

const readFavorites = () => {
  try {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user?.id) return [];
    const stored = localStorage.getItem(getStorageKey(user.id));
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveFavorites = (items) => {
  try {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user?.id) return;
    localStorage.setItem(getStorageKey(user.id), JSON.stringify(items));
  } catch {
    // ignore storage errors
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: readFavorites(),
  },
  reducers: {
    toggleFavorite(state, action) {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);

      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(product);
      }

      saveFavorites(state.items);
    },
    loadFavorites(state) {
      state.items = readFavorites();
    },
    clearFavorites(state) {
      state.items = [];
    },
  },
});

export const { toggleFavorite, loadFavorites, clearFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.items;
export const selectIsFavorite = (state, productId) =>
  state.favorites.items.some((item) => item.id === productId);

export default favoritesSlice.reducer;
