import { forwardRef, useState } from 'react';

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

const LabelsMenu = forwardRef<MdMenu, LabelsMenuProps>(
  ({ activeLabels, ...props }, ref) => {
    const [searchText, setSearchText] = useState('');

    const handleInput = (e: Event) => {
      e.stopPropagation();

      const { value } = e.target as HTMLInputElement;
      setSearchText(value.trim());
    };

    const handleFilterSearchText = ({ title }: Label) => {
      if (searchText.length > 0) {
        return title.toLowerCase().match(searchText.toLowerCase())?.[0] ?? '';
      }

      return true;
    };

    const handleRenderLabel = ({ title }: Label) => {
      const isChecked = activeLabels?.some(
        (activeLabel) => activeLabel.title === title,
      );

      return (
        <LabelMenuItem
          typeaheadText=""
          key={title}
          title={title}
          isChecked={isChecked}
        />
      );
    };

    return (
      <Menu
        {...props}
        ref={ref}
        className="min-w-48"
        style={menuStyles}
        slot="menu">
        <OutlinedTextField
          onInput={handleInput}
          style={textFieldStyles}
          label="label note"
          className="mx-2">
          <Icon slot="leading-icon">search</Icon>
          <Icon slot="trailing-icon">cancel</Icon>
        </OutlinedTextField>
        {mockLabels.filter(handleFilterSearchText).map(handleRenderLabel)}
      </Menu>
    );
  },
);

LabelsMenu.displayName = 'LabelsMenu';

export default LabelsMenu;
