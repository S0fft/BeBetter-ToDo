import { FC, PropsWithChildren } from 'react';

const Body: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="relative grid h-full w-full grid-rows-[max-content_1fr] gap-5 bg-surface p-6 transition-all before:absolute before:left-8 before:top-1 before:flex before:size-fit before:items-center before:justify-center before:bg-surface before:px-2 before:text-sm before:text-on-surface-variant before:opacity-0 before:transition-all before:content-['Title'] has-[input:focus]:before:opacity-100">
      {children}
    </article>
  );
};

export default Body;
