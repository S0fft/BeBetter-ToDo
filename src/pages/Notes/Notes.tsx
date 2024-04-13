import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectNotes from '@shared/lib/selectors/selectNotes';
import NotesList from '@shared/ui/NotesList';

const Notes = () => {
  const notes = useAppSelector(selectNotes);
  const activeNotes = notes.filter(({ isTrashed }) => !isTrashed);
  return <NotesList notes={activeNotes} />;
};

export default Notes;
