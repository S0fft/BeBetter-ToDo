import { FC, PropsWithChildren } from 'react';

import { filledIconStyles } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import Icon from '@shared/ui/Icon';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

type TabItemProps = PropsWithChildren<{
  id: number;
  to: string;
}>;

const animations = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: 'spring', stiffness: 550, damping: 40 },
};

const LabelItem: FC<TabItemProps> = ({ children, to }) => {
  return (
    <motion.div {...animations} layout>
      <NavLink
        to={to}
        className="group relative inline-block w-full animate-fade-in-screen rounded-full">
        {({ isActive }) => (
          <>
            <span
              className={cn(
                'absolute left-0 top-0 h-full w-full scale-x-[.32] rounded-full bg-surface-container-highest py-4 pl-4 pr-6 opacity-0 transition-transform duration-200 ease-linear active:brightness-90',
                {
                  'scale-x-100 bg-primary-container opacity-100 group-hover:brightness-95 group-active:brightness-95':
                    isActive,
                },
              )}
            />
            <span
              className={cn(
                'relative z-10 flex origin-left items-center gap-3 rounded-full py-4 pl-4 pr-6 text-on-surface-variant group-hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)] group-active:brightness-95',
                {
                  'text-on-secondary-container-text font-medium': isActive,
                },
              )}>
              <span className="animation-delay-200 flex animate-fade-in-standard items-center">
                <Icon style={isActive ? filledIconStyles : undefined}>
                  label
                </Icon>
              </span>
              {children}
            </span>
          </>
        )}
      </NavLink>
      {/* <div className="group relative inline-block w-full animate-fade-in-screen rounded-full"> */}
      {/*  <span */}
      {/*    className={cn( */}
      {/*      'absolute left-0 top-0 h-full w-full scale-x-[.32] rounded-full bg-surface-container-highest py-4 pl-4 pr-6 opacity-0 transition-transform duration-200 ease-linear active:brightness-90', */}
      {/*      { */}
      {/*        'scale-x-100 bg-primary-container opacity-100 group-hover:brightness-95 group-active:brightness-95': */}
      {/*          isActive, */}
      {/*      }, */}
      {/*    )} */}
      {/*  /> */}
      {/*  <span */}
      {/*    className={cn( */}
      {/*      'relative z-10 flex origin-left items-center gap-3 rounded-full py-4 pl-4 pr-6 group-hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)] group-active:brightness-95', */}
      {/*      { */}
      {/*        'text-on-secondary-container-text font-medium': isActive, */}
      {/*      }, */}
      {/*    )}> */}
      {/*    <span className="animation-delay-200 flex animate-fade-in-standard items-center"> */}
      {/*      <Icon style={isActive ? filledIconStyles : undefined}>label</Icon> */}
      {/*    </span> */}
      {/*    {children} */}
      {/*  </span> */}
      {/* </div> */}
    </motion.div>
  );
};

export default LabelItem;
