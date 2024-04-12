import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

import selectNotes from '@pages/Notes/lib/selectors/selectNotes';
import Note from '@pages/Notes/ui/Note';
import cn from '@shared/lib/helpers/cn';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import { useOutletContext } from 'react-router-dom';

type OutletContext = [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  ReactNode,
  RefObject<HTMLUListElement>,
];

const NotesList = () => {
  const [isNoteExpanded, , children, notesListRef] =
    useOutletContext<OutletContext>();

  const notes = useAppSelector(selectNotes);

  return (
    <ul
      ref={notesListRef}
      className={cn('relative h-dvh overflow-y-scroll px-2 pb-4')}>
      {children}
      <div
        className={cn('grid grid-cols-1 gap-3 pt-[92px] transition-all', {
          'grid-cols-2 items-center justify-center': !isNoteExpanded,
        })}>
        {notes.map((note) => (
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
