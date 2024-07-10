import { createSelector } from '@reduxjs/toolkit';

const selectIsLogged = createSelector(
  (state) => state.sessionReducer.isLogged,
  (isLogged) => isLogged,
);

export default selectIsLogged;
