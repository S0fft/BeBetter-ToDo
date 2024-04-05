import { RootState } from '@/store';

const selectActiveNote = (state: RootState) => state.notesReducer.activeNote;

export default selectActiveNote;
