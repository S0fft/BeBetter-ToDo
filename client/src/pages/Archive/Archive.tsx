import { useNotesQuery } from '@/entities/note/api/noteApi';
import MenuItems from '@pages/Archive/ui/MenuItems';
import Note from '@pages/Notes/ui/Note';
import NotesList from '@shared/ui/NotesList';

const Archive = () => {
  const { data: notes = [] } = useNotesQuery();
  const archivedNotes = notes.filter(({ is_done }) => is_done);

  return (
    <NotesList
      notes={archivedNotes}
      emptyListIcon="archive"
      emptyListSubText="Your archived notes appear here"
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

export default Archive;
