import { FC } from 'react';

type EssentialsProps = {
  createdAt: string;
};

const Essentials: FC<EssentialsProps> = ({ createdAt }) => {
  return (
    <div className="grid gap-1">
      <span className="font-medium">Caroline</span>
      <span className="text-sm">{createdAt}</span>
    </div>
  );
};

export default Essentials;
