import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

const selectIsLogged = createSelector(
  (state: RootState) => state.sessionReducer.isLogged,
  (isLogged) => isLogged,
);

export default selectIsLogged;
