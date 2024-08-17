import { FC, PropsWithChildren } from 'react';

import cn from '@shared/lib/helpers/cn';

type SettingsItemProps = PropsWithChildren & {
  title: string;
  subTitle: string;
  border?: boolean;
};

const SettingsItem: FC<SettingsItemProps> = ({
  title,
  subTitle,
  border = true,
  children,
}) => {
  return (
    <div
      className={cn('flex items-center justify-between pb-6', {
        'border-b border-outline-variant': border,
      })}>
      <div className="space-y-4">
        <h3 className="text-2xl text-on-surface">{title}</h3>
        <p className="text-on-surface-variant">{subTitle}</p>
      </div>
      {children}
    </div>
  );
};

export default SettingsItem;
