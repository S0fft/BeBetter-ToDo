import { FC, ReactNode } from 'react';

import { filledIconStyles } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import Icon from '@shared/ui/Icon';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

type NavButtonProps = NavLinkProps & {
  to: string;
  children: ReactNode;
  icon?: string;
  isExpand?: boolean;
};

const NavItem: FC<NavButtonProps> = ({
  to,
  style,
  isExpand,
  children,
  icon,
  ...props
}) => {
  const { search } = useLocation();

  return (
    <NavLink
      end
      style={style}
      className={cn('flex justify-center lg:inline', {
        'max-w-[60px]': !isExpand,
      })}
      {...props}
      to={to + search}>
      {({ isActive }) => (
        <span
          className={cn(
            'group relative flex w-full items-center justify-center gap-3 rounded-full bg-surface-container-highest font-medium text-on-surface-variant ease-linear before:absolute before:-top-1 before:left-0.5 before:h-[32px] before:w-[56px] before:rounded-full hover:duration-0 before:hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_10%,_transparent)] lg:justify-start lg:py-4 lg:pl-4 lg:pr-6 lg:before:hidden lg:hover:brightness-95 lg:active:brightness-90',
            {
              'text-on-secondary-container': isActive,
              'origin-left justify-start py-4 pl-4 pr-6 duration-[inherit] ease-[inherit] before:hidden hover:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_8%,_transparent)] active:bg-[color-mix(in_srgb,_var(--md-sys-color-inverse-surface)_10%,_transparent)]':
                isExpand,
            },
          )}>
          <span
            className={cn(
              'absolute -top-1 left-0.5 h-[32px] w-[56px] scale-x-[.32] rounded-full py-4 pl-4 pr-6 opacity-0 transition-all duration-200 ease-linear lg:left-0 lg:top-0 lg:h-full lg:w-full',
              {
                'scale-x-100 bg-primary-container opacity-100 group-active:bg-[color-mix(in_srgb,_var(--md-sys-color-secondary)_20%,_transparent)] lg:group-hover:brightness-95':
                  isActive,
                'left-0 top-0 h-full w-full': isExpand,
              },
            )}
          />
          <span className="relative z-10 flex items-center gap-3">
            {isActive ? (
              <Icon style={filledIconStyles}>{icon}</Icon>
            ) : (
              <Icon>{icon}</Icon>
            )}
            {children}
          </span>
        </span>
      )}
    </NavLink>
  );
};

export default NavItem;
