import { FC } from 'react';

import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import cn from '@shared/lib/helpers/cn';
import { MdProps } from '@shared/types';
import OutlinedTextField from '@shared/ui/OutlinedTextField';

type InputBlockProps = MdProps<MdOutlinedTextField> & {
  name: string;
  value?: string;
  className?: string;
};

const InputBlock: FC<InputBlockProps> = ({
  name,
  value = '',
  className,
  ...props
}) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="text-on-surface">{name}</div>
      <OutlinedTextField {...props} className="w-80" value={value} />
    </div>
  );
};

export default InputBlock;
