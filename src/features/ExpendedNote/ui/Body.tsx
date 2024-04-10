import { FC, PropsWithChildren } from 'react';

import Content from '@features/ExpendedNote/ui/Content';
import Title from '@features/ExpendedNote/ui/Title';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';

const Body: FC<PropsWithChildren> = ({ children }) => {
  const { readUrl } = useUrl();
  const activeNote = Number(readUrl(urlParams.NOTE_ID));

  return (
    <article className="relative grid h-full w-full grid-rows-[max-content_1fr] gap-5 bg-surface p-6 transition-all before:absolute before:left-8 before:top-1 before:flex before:size-fit before:items-center before:justify-center before:bg-surface before:px-2 before:text-sm before:text-on-surface-variant before:opacity-0 before:transition-all before:content-['Title'] has-[input:focus]:before:opacity-100">
      <Title key={`title-${activeNote}`} />
      <Content key={`content-${activeNote}`} />
      {children}
    </article>
  );
};

export default Body;
