import { useState } from 'react';

import Search from '@/features/Search/Search';
import ExpandedNote from '@features/ExpendedNote/ExpandedNote';
import useHeaderScroll from '@layout/AppLayout/lib/hooks/useHeaderScroll';
import { urlParams } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import useUrl from '@shared/lib/hooks/useUrl';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const { readUrl } = useUrl();
  const isNoteSelected = Number(readUrl(urlParams.NOTE_ID)) !== 0;

  const [isNoteExpanded, setIsNoteExpanded] = useState(isNoteSelected);
  const { searchRef, notesListRef } = useHeaderScroll();

  return (
    <main
      className={cn(
        'grid h-dvh grid-cols-[300px_1fr_1fr] grid-rows-1 gap-6 px-4 pb-4 text-on-surface transition-all duration-400 ease-emphasized-decelerate',
        {
          'grid-cols-[300px_1fr_0fr] ease-emphasized-accelerate':
            !isNoteExpanded,
        },
      )}>
      <aside className="w-full pt-4">sidebar</aside>
      <section className="relative h-full w-full gap-3">
        <Outlet
          context={[
            isNoteExpanded,
            setIsNoteExpanded,
            <header
              key="header"
              style={{
                viewTransitionName: 'header',
              }}
              className="absolute left-0 top-0 z-50 flex w-full justify-center px-2 pt-4">
              <Search ref={searchRef} />
            </header>,
            notesListRef,
          ]}
        />
      </section>
      <section
        className={cn(
          'grid scale-95 grid-rows-[max-content_1fr] overflow-hidden rounded-xl pt-4 opacity-0 transition-all delay-[50ms] duration-200',
          {
            'scale-100 opacity-100 delay-0': isNoteExpanded,
          },
        )}>
        <ExpandedNote onExpand={setIsNoteExpanded} />
      </section>
    </main>
  );
};

export default AppLayout;
