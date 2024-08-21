import { forwardRef, ImgHTMLAttributes } from 'react';

import { useProfileQuery } from '@/entities/user/api/userApi';
import user from '@assets/user.png';
import cn from '@shared/lib/helpers/cn';

const UserAvatar = forwardRef<
  HTMLImageElement,
  ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  const { data } = useProfileQuery();
  const userName = data?.username;

  return (
    <img
      {...props}
      ref={ref}
      slot="trailing-icon"
      draggable={false}
      className={cn(
        'rounded-full transition-transform ease-[inherit]',
        className,
      )}
      src={user}
      alt={userName ? `${userName}'s avatar` : 'User avatar'}
    />
  );
});

UserAvatar.displayName = 'UserAvatar';

export default UserAvatar;
