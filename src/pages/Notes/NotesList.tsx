import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import Search from '@features/Search/Search';
import Note from '@pages/Notes/ui/Note';
import { mockedNotes } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import { useOutletContext } from 'react-router-dom';

// TODO: fix menu scroll
// TODO: fix search focus width
// TODO: animate end text

const SEARCH_BOTTOM_OFFSET = 20;

const NotesList = () => {
  const [isNoteExpanded] =
    useOutletContext<[boolean, Dispatch<SetStateAction<boolean>>]>();

  const searchRef = useRef<MdOutlinedTextField>(null);
  const notesListRef = useRef<HTMLUListElement>(null);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const noteList = notesListRef.current;
    const search = searchRef.current;

    if (search === null || noteList === null) return undefined;

    const handleScroll = () => {
      const scrolled = noteList.scrollTop;
      const isInitialPosition = scrolled === 0;

      if (isInitialPosition) {
        search.classList.remove('drop-shadow-lg');
      } else {
        search.classList.add('drop-shadow-lg');
      }

      const searchBottom = search.offsetTop + search.offsetHeight;

      if (scrolled > searchBottom) {
        search.classList.add('absolute');
        search.style.translate = '0 -130%';
      }

      if (scrolled > searchBottom + SEARCH_BOTTOM_OFFSET) {
        noteList.classList.remove('relative');
      }

      if (scrolled === 0) {
        noteList.classList.add('relative');
      }

      const isScrollingUp = prevScrollPos.current - scrolled > 0;
      if (isScrollingUp) {
        search.classList.remove('absolute');
        search.style.translate = '0';
      }

      prevScrollPos.current = scrolled;
    };

    noteList.addEventListener('scroll', handleScroll);
    return () => noteList.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ul
      ref={notesListRef}
      className={cn('relative h-dvh overflow-y-scroll pb-4')}>
      <header
        style={{
          viewTransitionName: 'header',
        }}
        className="absolute z-50 flex w-full justify-center pt-4">
        <Search ref={searchRef} />
      </header>
      <div
        className={cn('grid grid-cols-1 gap-3 pt-[92px] transition-all', {
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
