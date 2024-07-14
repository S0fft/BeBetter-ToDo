import { useNotesQuery } from '@/entities/note/api/noteApi';
import Note from '@pages/Notes/ui/Note';
import MenuItems from '@pages/Trash/ui/MenuItems';
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
      renderNote={(note, index) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.time_created}
          isPinned={note.is_pinned}
          labels={note.labels}
          index={index}>
          <MenuItems noteId={note.id} />
        </Note>
      )}
    />
  );
};

export default Trash;
