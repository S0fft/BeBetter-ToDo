import { FC, ImgHTMLAttributes } from 'react';

import { useProfileQuery } from '@/entities/user/api/userApi';
import user from '@assets/user.png';
import cn from '@shared/lib/helpers/cn';

const UserAvatar: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  ...props
}) => {
  const { data } = useProfileQuery();
  const userName = data?.username;

  return (
    <img
      {...props}
      slot="trailing-icon"
      className={cn(
        'rounded-full transition-transform ease-[inherit]',
        className,
      )}
      src={user}
      alt={userName ? `${userName}'s avatar` : 'User avatar'}
    />
  );
};

export default UserAvatar;
