import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectNotes from '@shared/lib/selectors/selectNotes';
import NotesList from '@shared/ui/NotesList';

const Archive = () => {
  const notes = useAppSelector(selectNotes);
  const archivedNotes = notes.filter(({ isArchived }) => isArchived);
  return (
    <NotesList
      notes={archivedNotes}
      emptyListIcon="archive"
      emptyListSubText="Your archived notes appear here"
    />
  );
};

export default Archive;
