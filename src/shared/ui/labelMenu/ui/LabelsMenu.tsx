import { forwardRef } from 'react';

import { MdMenu } from '@material/web/all';

import { menuStyles } from '@pages/Notes/lib/const';
import { Label, MdProps } from '@shared/types';
import Icon from '@shared/ui/Icon';
import LabelMenuItem from '@shared/ui/labelMenu/ui/LabelMenuItem';
import Menu from '@shared/ui/Menu';
import OutlinedTextField from '@shared/ui/OutlinedTextField';

import { mockLabels } from '../../../../../dev-data';

type LabelsMenuProps = MdProps<MdMenu> & {
  activeLabels: Label[];
};

const textFieldStyles = {
  '--md-sys-color-primary': 'var(--md-sys-color-primary-fixed-dim)',
};

// FIXME: text field focus issue

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
            <LabelMenuItem
              key={label.title}
              title={label.title}
              isChecked={isChecked}
            />
          );
        })}
      </Menu>
    );
  },
);

LabelsMenu.displayName = 'LabelsMenu';

export default LabelsMenu;
