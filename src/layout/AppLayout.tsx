import { useState } from 'react';

import ExpandedNote from '@features/ExpendedNote/ExpandedNote';
import Search from '@features/Search/Search';
import cn from '@shared/lib/helpers/cn';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const [isNoteExpanded, setIsNoteExpanded] = useState(true);

  return (
    <main
      className={cn(
        'grid h-dvh grid-cols-[300px_1fr_1fr] grid-rows-1 gap-6 px-4 pb-4 text-on-surface transition-all duration-400 ease-emphasized-decelerate',
        {
          'grid-cols-[300px_1fr_0fr] ease-emphasized-accelerate':
            !isNoteExpanded,
        },
      )}>
      <aside className="w-[300px] pt-4 ">sidebar</aside>
      <div className="relative h-full gap-3">
        <header
          style={{
            viewTransitionName: 'header',
          }}
          className="absolute z-50 w-full pt-4">
          <Search />
        </header>
        <section>
          <Outlet context={[isNoteExpanded, setIsNoteExpanded]} />
        </section>
      </div>
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
