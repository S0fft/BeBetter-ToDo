import { RootState } from '@/store';

const selectNotesNum = (state: RootState) => state.notesReducer.notesNum;

export default selectNotesNum;
