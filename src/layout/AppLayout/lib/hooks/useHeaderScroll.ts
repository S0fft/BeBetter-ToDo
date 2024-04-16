import { useEffect, useRef } from 'react';

import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import { SEARCH_BOTTOM_OFFSET } from '@shared/lib/const';

const useHeaderScroll = () => {
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
      }

      const searchBottom = search.offsetTop + search.offsetHeight;

      if (scrolled > searchBottom) {
        search.style.translate = '0 -130%';
        search.classList.add('drop-shadow-lg');
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

  return { searchRef, notesListRef };
};

export default useHeaderScroll;
