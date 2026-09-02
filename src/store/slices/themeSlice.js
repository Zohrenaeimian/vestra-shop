import { createSlice } from "@reduxjs/toolkit";
import { getInitialDarkMode } from "../../utils/theme";

const initialState = {
  darkMode: getInitialDarkMode(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleTheme, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
