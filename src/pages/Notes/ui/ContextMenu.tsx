import { FC, MouseEvent, useRef } from 'react';

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
import LabelsMenu from '@shared/ui/LabelsMenu';
import Menu from '@shared/ui/Menu';
import MenuItem from '@shared/ui/MenuItem';
import SubMenu from '@shared/ui/SubMenu';

type ContextMenuProps = {
  activeLabels: Label[];
  anchorId: string;
};

const ContextMenu: FC<ContextMenuProps> = ({ activeLabels, anchorId }) => {
  const menuRef = useRef<MdMenu>(null);

  const handleMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.show();
  };

  return (
    <div className="relative">
      <FilledIconButton
        id={anchorId}
        onClick={handleMenuOpen}
        style={dotButtonStyles}>
        <Icon>more_vert</Icon>
      </FilledIconButton>
      <Menu
        positioning="popover"
        has-overflow
        className="min-w-48"
        style={menuStyles}
        yOffset={12}
        menuCorner={Corner.START_END}
        anchor-corner={Corner.END_END}
        anchor={anchorId}
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
          </MenuItem>
          <LabelsMenu positioning="popover" activeLabels={activeLabels} />
        </SubMenu>
      </Menu>
    </div>
  );
};

export default ContextMenu;
