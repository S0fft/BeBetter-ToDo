import { createSelector } from '@reduxjs/toolkit';

const selectAccessToken = createSelector(
  (state) => state.sessionReducer.accessToken,
  (accessToken) => accessToken,
);

export default selectAccessToken;
