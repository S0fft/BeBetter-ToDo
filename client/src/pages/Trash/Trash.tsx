import { useNotesQuery } from '@/entities/note/api/noteApi';
import NotesList from '@shared/ui/NotesList';
import TextButton from '@shared/ui/TextButton';

const Trash = () => {
  const { data: notes = [] } = useNotesQuery();

  const trashedNotes = notes.filter(({ is_trashed }) => is_trashed);
  const isTrashNotEmpty = trashedNotes.length !== 0;

  return (
    <NotesList
      preList={
        <article className="absolute left-1/2 flex h-fit w-full -translate-x-1/2 items-center justify-center gap-3 py-6 font-medium">
          <h4>Notes in Trash are deleted after 7 days.</h4>
          {isTrashNotEmpty && <TextButton>Empty Trash</TextButton>}
        </article>
      }
      notes={trashedNotes}
      emptyListIcon="delete"
      emptyListSubText="No notes in Trash"
    />
  );
};

export default Trash;
