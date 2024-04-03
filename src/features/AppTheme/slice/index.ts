import { createSlice } from '@reduxjs/toolkit';

import { localStorageKeys } from '@shared/lib/const';

type InitialState = {
  isDarkMode: boolean;
};

const isDarkMode =
  localStorage.getItem(localStorageKeys.isDarkMode) !== undefined;

const initialState: InitialState = {
  isDarkMode,
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const darkModeReducer = darkModeSlice.reducer;
