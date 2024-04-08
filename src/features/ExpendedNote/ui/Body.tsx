import { FC, PropsWithChildren } from 'react';

import Content from '@features/ExpendedNote/ui/Content';
import Title from '@features/ExpendedNote/ui/Title';
import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import useAppSelector from '@shared/lib/hooks/useAppSelector';

const Body: FC<PropsWithChildren> = ({ children }) => {
  const selectedNoteId = useAppSelector(selectActiveNote);

  return (
    <article className="relative grid h-full w-full grid-rows-[max-content_1fr] gap-5 bg-surface p-6 transition-all before:absolute before:left-8 before:top-1 before:flex before:size-fit before:items-center before:justify-center before:bg-surface before:px-2 before:text-sm before:text-on-surface-variant before:opacity-0 before:transition-all before:content-['Title'] has-[input:focus]:before:opacity-100">
      <Title key={`title-${selectedNoteId}`} />
      <Content key={`content-${selectedNoteId}`} />
      {children}
    </article>
  );
};

export default Body;
