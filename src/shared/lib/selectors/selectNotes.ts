import { RootState } from '@/store';

const selectNotes = (state: RootState) => state.notesReducer.notes;

export default selectNotes;
