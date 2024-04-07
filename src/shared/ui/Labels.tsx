import { FC, HTMLAttributes } from 'react';

import { LABEL_COLOR_DECREASE } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import { Label as TLabels } from '@shared/types';
import tinycolor from 'tinycolor2';

type LabelsProps = HTMLAttributes<HTMLDivElement> & {
  labels: TLabels[];
};

const Labels: FC<LabelsProps> = ({ labels, className }) => {
  return (
    <div className={cn('flex flex-shrink-0 gap-3.5', className)}>
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
