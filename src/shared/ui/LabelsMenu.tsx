import { forwardRef } from 'react';

import { MdMenu } from '@material/web/all';

import { menuItemStyles, menuStyles } from '@pages/Notes/lib/const';
import { Label } from '@shared/types';
import Checkbox from '@shared/ui/Checkbox';
import Icon from '@shared/ui/Icon';
import Menu from '@shared/ui/Menu';
import MenuItem from '@shared/ui/MenuItem';
import OutlinedTextField from '@shared/ui/OutlinedTextField';

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

const textFieldStyles = {
  '--md-sys-color-primary': 'var(--md-sys-color-primary-fixed-dim)',
};

// TODO: fix text field focus issue

const LabelsMenu = forwardRef<MdMenu, LabelsMenuProps>(
  ({ activeLabels, ...props }, ref) => {
    return (
      <Menu
        {...props}
        ref={ref}
        className="min-w-48"
        style={menuStyles}
        slot="menu">
        <OutlinedTextField
          style={textFieldStyles}
          label="label note"
          className="mx-2">
          <Icon slot="leading-icon">search</Icon>
          <Icon slot="trailing-icon">cancel</Icon>
        </OutlinedTextField>
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
