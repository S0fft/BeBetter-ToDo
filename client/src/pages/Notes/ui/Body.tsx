import { FC, PropsWithChildren } from 'react';

const Body: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="row-start-2 row-end-3 flex h-full gap-3 overflow-hidden">
      {children}
    </div>
  );
};

export default Body;
