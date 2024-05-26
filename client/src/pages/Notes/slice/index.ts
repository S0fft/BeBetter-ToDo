import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Note } from '@shared/types';

import { mockedNotes } from '../../../../dev-data';

type InitialState = {
  notes: Note[];
  notesNum: number;
};

const initialState: InitialState = {
  notes: mockedNotes,
  notesNum: mockedNotes.length,
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded(state: InitialState, action: PayloadAction<Omit<Note, 'id'>>) {
      state.notes.push({ ...action.payload, id: state.notes.length });
      state.notesNum = state.notes.length;
    },
  },
});

export const {
  actions: { noteAdded },
  reducer: notesReducer,
} = noteSlice;
