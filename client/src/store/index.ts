import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { sessionReducer } from '@/entities/session/model/slice';
import { darkModeReducer } from '@features/AppTheme/slice';
import { notesReducer } from '@pages/Notes/slice';
import rootApi from '@shared/api/rootApi';

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type PreloadState = Partial<RootState>;

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  darkModeReducer,
  notesReducer,
  sessionReducer,
});

export const setupStore = (preloadedState?: PreloadState) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rootApi.middleware),
  });
