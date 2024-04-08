import { FC, PropsWithChildren } from 'react';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="flex items-center gap-4 bg-surface-container pb-5 pl-7 pr-1 pt-6">
      {children}
    </header>
  );
};

export default Header;
