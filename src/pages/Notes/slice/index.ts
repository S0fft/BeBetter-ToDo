import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  activeNote: number;
};

const initialState: InitialState = {
  activeNote: 0,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteSelected(state, action: PayloadAction<number>) {
      state.activeNote = action.payload;
    },
  },
});

export const {
  actions: { noteSelected },
  reducer: notesReducer,
} = notesSlice;
