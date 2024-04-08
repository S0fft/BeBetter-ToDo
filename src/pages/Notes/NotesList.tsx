import { Dispatch, SetStateAction } from 'react';

import Note from '@pages/Notes/ui/Note';
import { mockedNotes } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import { useOutletContext } from 'react-router-dom';

const NotesList = () => {
  const [isNoteExpanded] =
    useOutletContext<[boolean, Dispatch<SetStateAction<boolean>>]>();

  return (
    // 92px -> main container padding 16px + 12px gap + 64px header height
    <ul
      style={{
        viewTransitionName: 'note-list',
      }}
      className="h-[calc(100dvh_-_92px)] overflow-y-scroll rounded-xl pb-4">
      <div
        className={cn('grid grid-cols-1 gap-3 transition-all', {
          'grid-cols-2 items-center justify-center': !isNoteExpanded,
        })}>
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
      </div>
      <span className="!mt-6 flex w-full items-center justify-center text-sm text-on-surface-variant">
        You reached the end 🙂
      </span>
    </ul>
  );
};

export default NotesList;
