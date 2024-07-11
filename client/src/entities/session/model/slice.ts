import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  accessToken: '',
  refreshToken: '',
  isLogged: false,
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
