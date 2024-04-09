import { forwardRef } from 'react';

import { MdMenu } from '@material/web/all';

import { menuItemStyles, menuStyles } from '@pages/Notes/lib/const';
import { Label } from '@shared/types';
import Checkbox from '@shared/ui/Checkbox';
import Menu from '@shared/ui/Menu';
import MenuItem from '@shared/ui/MenuItem';

type LabelsMenuProps = Partial<Omit<MdMenu, keyof HTMLElement>> & {
  activeLabels: Label[];
};

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

const LabelsMenu = forwardRef<MdMenu, LabelsMenuProps>(
  ({ activeLabels, ...props }, ref) => {
    return (
      <Menu
        {...props}
        ref={ref}
        className="min-w-48"
        style={menuStyles}
        slot="menu">
        {mockLabels.map((label) => {
          const isChecked = activeLabels?.some(
            (activeLabel) => activeLabel.title === label.title,
          );

          return (
            <MenuItem
              keepOpen
              key={label.title}
              style={menuItemStyles}
              className="mx-2 rounded-md">
              <span slot="headline">{label.title}</span>
              <Checkbox checked={isChecked} slot="end" />
            </MenuItem>
          );
        })}
      </Menu>
    );
  },
);

LabelsMenu.displayName = 'LabelsMenu';

export default LabelsMenu;
