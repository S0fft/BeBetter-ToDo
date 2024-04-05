import { FC } from 'react';

import { Labels as TLabels } from '@shared/types';

type LabelsProps = {
  labels: TLabels[];
};

const Labels: FC<LabelsProps> = ({ labels }) => {
  return (
    <div className="z-10 ml-auto flex flex-shrink-0 gap-3 self-end pb-3.5">
      {labels.map(({ title, color }) => (
        <span
          className="rounded-full px-2 py-0.5 text-xs"
          style={{ backgroundColor: color }}
          key={title}>
          {title}
        </span>
      ))}
    </div>
  );
};

export default Labels;
