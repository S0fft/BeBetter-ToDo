import { FC, HTMLAttributes } from 'react';

import { useProfileQuery } from '@/entities/user/api/userApi';

type UsernameProps = HTMLAttributes<HTMLInputElement>;

const Username: FC<UsernameProps> = ({ className }) => {
  const { data: user } = useProfileQuery();

  return <h2 className={className}>{user?.username}</h2>;
};

export default Username;
