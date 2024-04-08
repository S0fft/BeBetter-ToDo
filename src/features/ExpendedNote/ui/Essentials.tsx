import { FC, PropsWithChildren } from 'react';

const Essentials: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="grid gap-1">
      <h2 className="text-xl font-medium">Caroline</h2>
      <h3>Created at 20.03.24</h3>
      {children}
    </article>
  );
};

export default Essentials;
