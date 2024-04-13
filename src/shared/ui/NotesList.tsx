import { Dispatch, FC, ReactNode, RefObject, SetStateAction } from 'react';

import Note from '@pages/Notes/ui/Note';
import cn from '@shared/lib/helpers/cn';
import { Note as TNote } from '@shared/types';
import { useOutletContext } from 'react-router-dom';

type OutletContext = [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  ReactNode,
  RefObject<HTMLUListElement>,
];

type NotesListProps = {
  notes: TNote[];
  preList?: ReactNode;
};

const NotesList: FC<NotesListProps> = ({ notes, preList }) => {
  const [isNoteExpanded, , children, notesListRef] =
    useOutletContext<OutletContext>();

  return (
    <ul
      ref={notesListRef}
      className={cn('relative h-dvh overflow-y-scroll px-2 pb-4')}>
      {children}
      <div className="grid pt-[92px]">
        {preList}
        <ul
          className={cn('grid grid-cols-1 gap-3 transition-all', {
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
        </ul>
      </div>
      <span className="!mt-6 flex w-full items-center justify-center text-sm text-on-surface-variant">
        You reached the end 🙂
      </span>
    </ul>
  );
};

export default NotesList;
