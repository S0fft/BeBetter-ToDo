import { useEffect } from 'react';

import { useLazyNotesQuery } from '@/entities/note/api/noteApi';
import Note from '@pages/Notes/ui/Note';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import NotesList from '@shared/ui/NotesList';
import MenuItems from '@shared/ui/NotesList/ui/MenuItems';

const Notes = () => {
  const { readUrl } = useUrl();
  const searchQuery = readUrl(urlParams.SEARCH);

  const [getNotes, { data: notes = [] }] = useLazyNotesQuery();
  const filteredNotes = notes
    .filter(({ is_trashed }) => !is_trashed)
    .filter(({ is_done }) => !is_done);

  useEffect(() => {
    const request = getNotes(searchQuery);

    return () => {
      if (searchQuery) {
        request.abort();
      }
    };
  }, [getNotes, searchQuery]);

  return (
    <NotesList
      notes={filteredNotes}
      emptyListIcon="lightbulb"
      emptyListSubText="Your notes appear here"
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
          <MenuItems noteId={note.id} activeLabels={note.labels} />
        </Note>
      )}
    />
  );
};

export default Notes;
