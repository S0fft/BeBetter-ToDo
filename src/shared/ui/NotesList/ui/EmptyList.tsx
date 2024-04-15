import { FC } from 'react';

import Icon from '@shared/ui/Icon';

type EmptyListProps = {
  icon: string;
  subText: string;
};

const EmptyList: FC<EmptyListProps> = ({ icon, subText }) => {
  return (
    <article className="col-span-full grid h-full w-full content-center justify-center justify-items-center gap-5">
      <Icon className="size-32 text-9xl text-outline-variant">{icon}</Icon>
      <span className="text-2xl text-outline">{subText}</span>
    </article>
  );
};

export default EmptyList;
