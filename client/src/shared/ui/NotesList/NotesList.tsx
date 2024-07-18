import { FC, ReactNode } from 'react';

import Search from '@features/Search/Search';
import useHeaderScroll from '@layout/AppLayout/lib/hooks/useHeaderScroll';
import cn from '@shared/lib/helpers/cn';
import { Note as TNote } from '@shared/types';
import { OutletContext } from '@shared/ui/NotesList/model/types';
import EmptyList from '@shared/ui/NotesList/ui/EmptyList';
import Footer from '@shared/ui/NotesList/ui/Footer';
import { useOutletContext } from 'react-router-dom';

type NotesListProps = {
  notes: TNote[];
  preList?: ReactNode;
  emptyListIcon: string;
  emptyListSubText: string;
  renderNote: (note: TNote, index: number) => ReactNode;
};

const NotesList: FC<NotesListProps> = ({
  notes,
  preList,
  emptyListIcon,
  emptyListSubText,
  renderNote,
}) => {
  const [isNoteExpanded] = useOutletContext<OutletContext>();
  const { searchRef, notesListRef } = useHeaderScroll();

  const listIsEmpty = notes.length === 0;
  const sortedNotes = [...notes].sort((note) => (note.is_pinned ? -1 : 1));

  return (
    <article
      ref={notesListRef}
      className={cn(
        'relative h-dvh overflow-y-scroll px-2 pb-4 ease-emphasized-decelerate',
      )}>
      <header
        key="header"
        style={{
          viewTransitionName: 'header',
        }}
        className="absolute left-0 top-0 z-50 flex w-full justify-center px-2 pt-4">
        <Search ref={searchRef} />
      </header>
      <div className="grid h-[calc(100%-92px)] pt-[92px]">
        {preList}
        <ul
          className={cn(
            'grid animate-fade-in-section grid-cols-1 content-start gap-3 transition-all',
            {
              'grid-cols-2 justify-center': !isNoteExpanded,
              'align-items content-center': listIsEmpty,
              'mt-24': preList,
            },
          )}>
          {listIsEmpty && (
            <EmptyList icon={emptyListIcon} subText={emptyListSubText} />
          )}
          {sortedNotes.map(renderNote)}
        </ul>
      </div>
      <Footer containerRef={notesListRef} />
    </article>
  );
};

export default NotesList;
