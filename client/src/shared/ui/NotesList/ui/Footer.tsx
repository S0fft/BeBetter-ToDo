import { FC } from 'react';

import cn from '@shared/lib/helpers/cn';

type FooterProps = {
  isContainerEnd: boolean;
};

const Footer: FC<FooterProps> = ({ isContainerEnd }) => {
  return (
    <span
      className={cn(
        '!mt-6 flex w-full items-center justify-center pb-6 text-sm text-on-surface-variant transition-opacity',
        {
          'opacity-0': !isContainerEnd,
        },
      )}>
      You reached the end 😎
    </span>
  );
};

export default Footer;
