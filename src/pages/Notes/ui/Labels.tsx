import { FC } from 'react';

import { LABEL_COLOR_DECREASE } from '@shared/lib/const';
import { Label as TLabels } from '@shared/types';
import tinycolor from 'tinycolor2';

type LabelsProps = {
  labels: TLabels[];
};

const Labels: FC<LabelsProps> = ({ labels }) => {
  return (
    <div className="z-10 ml-auto flex flex-shrink-0 gap-3 self-end pb-3.5">
      {labels.map(({ title, color }) => {
        const darkenColor = tinycolor(color)
          .darken(LABEL_COLOR_DECREASE)
          .toHexString();

        return (
          <span
            className="rounded-full px-2 py-0.5 text-xs font-medium"
            style={{ backgroundColor: color, color: darkenColor }}
            key={title}>
            {title}
          </span>
        );
      })}
    </div>
  );
};

export default Labels;
