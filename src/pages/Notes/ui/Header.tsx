import { FC, PropsWithChildren } from 'react';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return <header className="flex items-center gap-4">{children}</header>;
};

export default Header;
