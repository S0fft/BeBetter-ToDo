import { MouseEvent, useRef } from 'react';

import { Corner, MdMenu } from '@material/web/all';

import trash from '@assets/trash.svg';
import {
  dotButtonStyles,
  menuItemStyles,
  menuStyles,
} from '@pages/Notes/lib/const';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import Menu from '@shared/ui/Menu';
import MenuItem from '@shared/ui/MenuItem';

const ContextMenu = () => {
  const menuRef = useRef<MdMenu>(null);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.show();
  };

  return (
    <div className="relative">
      <FilledIconButton
        id="menu-anchor"
        onClick={handleClick}
        style={dotButtonStyles}>
        <Icon>more_vert</Icon>
      </FilledIconButton>
      <Menu
        className="min-w-48 [&::part(.item-padding)]:pt-10"
        style={menuStyles}
        yOffset={10}
        menuCorner={Corner.START_END}
        anchor="menu-anchor"
        ref={menuRef}>
        <MenuItem
          style={menuItemStyles}
          className="[&::part(ripple)]:mx-2 [&::part(ripple)]:rounded-[6px]">
          Delete
          <Icon slot="end">
            <img src={trash} alt="" />
          </Icon>
        </MenuItem>
        <MenuItem
          style={menuItemStyles}
          className="[&::part(ripple)]:mx-2 [&::part(ripple)]:rounded-[6px]">
          Set label
          <Icon slot="end" className="text-on-surface">
            label
          </Icon>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ContextMenu;
