import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { cookie } from '@shared/lib/const';
import Cookies from 'js-cookie';

const accessToken = Cookies.get(cookie.ACCESS_TOKEN);
const refreshToken = Cookies.get(cookie.REFRESH_TOKEN);

type LoggedInPayload = {
  access: string;
  refresh: string;
};

type InitialState = {
  accessToken: string;
  refreshToken: string;
  isLogged: boolean;
};

const initialState: InitialState = {
  accessToken: accessToken ?? '',
  refreshToken: refreshToken ?? '',
  isLogged: Boolean(accessToken),
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    loggedIn(state, action: PayloadAction<LoggedInPayload>) {
      const { access, refresh } = action.payload;
      state.accessToken = access;
      state.refreshToken = refresh;
      state.isLogged = true;
    },
  },
});

export const {
  reducer: sessionReducer,
  actions: { loggedIn },
} = sessionSlice;
