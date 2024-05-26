import { FC, ImgHTMLAttributes } from 'react';

import user from '@assets/user.png';
import cn from '@shared/lib/helpers/cn';

const UserAvatar: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  ...props
}) => {
  return (
    <img
      {...props}
      slot="trailing-icon"
      className={cn(
        'rounded-full transition-transform ease-[inherit]',
        className,
      )}
      src={user}
      alt=""
    />
  );
};

export default UserAvatar;
