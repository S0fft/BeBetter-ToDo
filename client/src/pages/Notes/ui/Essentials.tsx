import { FC } from 'react';

import Username from '@shared/ui/Username';

type EssentialsProps = {
  createdAt: string;
};

const Essentials: FC<EssentialsProps> = ({ createdAt }) => {
  return (
    <div className="grid gap-1">
      <Username className="font-medium" />
      <span className="text-sm">{createdAt}</span>
    </div>
  );
};

export default Essentials;
