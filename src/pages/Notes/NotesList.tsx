import Note from '@pages/Notes/ui/Note';
import { mockedNotes } from '@shared/lib/const';

const NotesList = () => {
  return (
    // 92px -> main container padding 16px + 12px gap + 64px header height
    <ul className="h-[calc(100dvh_-_92px)] space-y-3 overflow-y-scroll rounded-xl pb-4">
      {mockedNotes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          createdAt={note.createdAt}
          isPinned={note.isPinned}
          labels={note.labels}
        />
      ))}
    </ul>
  );
};

export default NotesList;
