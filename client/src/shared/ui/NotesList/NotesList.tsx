import { FC, ReactNode, useState } from 'react';

import Search from '@features/Search/Search';
import useHeaderScroll from '@layout/AppLayout/lib/hooks/useHeaderScroll';
import { urlParams } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';
import { Note as TNote } from '@shared/types';
import EmptyList from '@shared/ui/NotesList/ui/EmptyList';
import Footer from '@shared/ui/NotesList/ui/Footer';

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
  const { readUrl } = useUrl();
  const { searchRef, notesListRef } = useHeaderScroll();
  const [isContainerEnd, setIsContainerEnd] = useState(false);

  const listIsEmpty = notes.length === 0;
  const sortedNotes = [...notes].sort((note) => (note.is_pinned ? -1 : 1));
  const isNoteExpanded = readUrl(urlParams.NOTE_ID);

  const handleScroll = () => {
    const listContainer = notesListRef.current;

    if (!listContainer) return;

    const isEnd =
      listContainer.scrollHeight - listContainer.scrollTop ===
      listContainer.clientHeight;

    setIsContainerEnd(isEnd);
  };

  return (
    <article
      onScroll={handleScroll}
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
      <div
        className={cn(
          'grid h-[calc(100%-92px)] grid-rows-[1fr_0fr] pt-[92px]',
          {
            'grid-rows-[1fr_1fr]': isContainerEnd,
          },
        )}>
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
        <Footer isContainerEnd={isContainerEnd} />
      </div>
    </article>
  );
};

export default NotesList;
