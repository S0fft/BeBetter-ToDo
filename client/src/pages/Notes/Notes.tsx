import { useNotesQuery } from '@/entities/note/api/noteApi';
import Loader from '@shared/ui/Loader';
import NotesList from '@shared/ui/NotesList';

const Notes = () => {
  const { data: notes = [], isLoading } = useNotesQuery();

  if (isLoading) return <Loader />;

  return (
    <NotesList
      notes={notes}
      emptyListIcon="lightbulb"
      emptyListSubText="Your notes appear here"
    />
  );
};

export default Notes;
