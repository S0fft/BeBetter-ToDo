import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

const selectAccessToken = createSelector(
  (state: RootState) => state.sessionReducer,
  (accessToken) => accessToken.accessToken,
);

export default selectAccessToken;
