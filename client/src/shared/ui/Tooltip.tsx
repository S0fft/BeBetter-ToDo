import { FC, ReactElement } from 'react';

import Tippy, { TippyProps } from '@tippyjs/react';

import cn from '@shared/lib/helpers/cn';
import { hideAll } from 'tippy.js';

type TooltipProps = TippyProps & {
  children: ReactElement;
};

const delay: [number, number] = [0, 1500];
const onShow = () => hideAll({ duration: 0 });
const animationDuration = 200;
const animationType = 'scale';
const arrow = false;

const Tooltip: FC<TooltipProps> = ({ children, className, ...props }) => {
  return (
    <Tippy
      duration={animationDuration}
      animation={animationType}
      onShow={onShow}
      arrow={arrow}
      delay={delay}
      inertia
      className={cn(
        'bg-inverse-surface font-light text-inverse-on-surface',
        className,
      )}
      {...props}>
      {children}
    </Tippy>
  );
};

export default Tooltip;
