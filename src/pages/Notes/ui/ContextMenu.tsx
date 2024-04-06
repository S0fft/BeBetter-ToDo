import { MouseEvent, useRef } from 'react';

import { Corner, MdMenu } from '@material/web/all';

import trash from '@assets/trash.svg';
import {
  dotButtonStyles,
  menuItemStyles,
  menuStyles,
  subMenuItemStyles,
} from '@pages/Notes/lib/const';
import { Label } from '@shared/types';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import Menu from '@shared/ui/Menu';
import MenuItem from '@shared/ui/MenuItem';
import SubMenu from '@shared/ui/SubMenu';

const mockLabels: Label[] = [
  {
    title: 'Home',
    color: '#DAEB99',
  },
  {
    title: 'Study',
    color: '#E3F383',
  },
  {
    title: 'Important',
    color: '#BDECE0',
  },
  {
    title: 'Work',
    color: '#EBD999',
  },
];

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
        has-overflow
        className="min-w-48"
        style={menuStyles}
        yOffset={12}
        menuCorner={Corner.START_END}
        anchor-corner={Corner.END_END}
        anchor="menu-anchor"
        ref={menuRef}>
        <MenuItem style={menuItemStyles} className="mx-2 rounded-md">
          <span slot="headline"> Delete </span>
          <Icon slot="end">
            <img src={trash} alt="" />
          </Icon>
        </MenuItem>
        <SubMenu menuCorner={Corner.END_END} anchor-corner={Corner.END_START}>
          <MenuItem
            slot="item"
            style={subMenuItemStyles}
            className="mx-2 rounded-md">
            Set label
            <Icon slot="end" className="text-on-surface">
              label
            </Icon>
            <Icon slot="start" className="text-on-surface">
              arrow_left
            </Icon>
          </MenuItem>
          <Menu className="min-w-48" style={menuStyles} slot="menu">
            {mockLabels.map((label) => (
              <MenuItem
                key={label.title}
                style={menuItemStyles}
                className="mx-2 rounded-md">
                <span slot="headline">{label.title}</span>
              </MenuItem>
            ))}
          </Menu>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default ContextMenu;
