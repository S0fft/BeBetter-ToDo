import { FC, PropsWithChildren } from 'react';

import cn from '@shared/lib/helpers/cn';

type InputBlockProps = PropsWithChildren & {
  name: string;
  className?: string;
};

const InputBlock: FC<InputBlockProps> = ({ name, className, children }) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="text-on-surface">{name}</div>
      {children}
    </div>
  );
};

export default InputBlock;
