import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { darkModeReducer } from '@features/AppTheme/slice';

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type PreloadState = Partial<RootState>;

const rootReducer = combineReducers({
  darkModeReducer,
});

export const setupStore = (preloadedState?: PreloadState) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
  });
