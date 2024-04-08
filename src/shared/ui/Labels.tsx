import { FC, HTMLAttributes } from 'react';

import { LABEL_COLOR_DECREASE } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import { Label as TLabels } from '@shared/types';
import tinycolor from 'tinycolor2';

type LabelsProps = HTMLAttributes<HTMLDivElement> & {
  labels: TLabels[];
};

const ANIMATION_OFFSET = 0.12;

const Labels: FC<LabelsProps> = ({ labels, className }) => {
  return (
    <div className={cn('flex flex-shrink-0 gap-3.5', className)}>
      {labels.map(({ title, color }, i) => {
        const darkenColor = tinycolor(color)
          .darken(LABEL_COLOR_DECREASE)
          .toHexString();
        const animationDelay = `${i * ANIMATION_OFFSET}s`;

        return (
          <span
            className="animate-fade-in-standard rounded-full px-2 py-0.5 text-xs font-medium"
            style={{
              backgroundColor: color,
              color: darkenColor,
              animationDelay,
            }}
            key={title}>
            {title}
          </span>
        );
      })}
    </div>
  );
};

export default Labels;
