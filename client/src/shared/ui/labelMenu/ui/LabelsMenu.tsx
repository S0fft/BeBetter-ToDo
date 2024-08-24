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

function findMatch(str: string, searchValue: string): string {
  return str.toLowerCase().match(searchValue.toLowerCase())?.[0] ?? '';
}

function replaceMatch(str: string, searchValue: string): string {
  return str.toLowerCase().replace(searchValue.toLowerCase(), '');
}

const LabelsMenu = forwardRef<MdMenu, LabelsMenuProps>(
  ({ activeLabels, ...props }, ref) => {
    const [searchText, setSearchText] = useState('');

    const handleInput = (e: Event) => {
      e.stopPropagation();

      const { value } = e.target as HTMLInputElement;
      setSearchText(value.trim());
    };

    const handleFilterSearchText = ({ title }: Label) => {
      return title.toLowerCase().includes(searchText.toLowerCase());
    };

    const handleRenderLabel = ({ title }: Label) => {
      const isChecked = activeLabels?.some(
        (activeLabel) => activeLabel.title === title,
      );

      return (
        <LabelMenuItem
          typeaheadText=""
          key={title}
          title={
            <>
              <span className="text-primary-fixed-dim">
                {findMatch(title, searchText)}
              </span>
              <span className="text-on-surface">
                {replaceMatch(title, searchText)}
              </span>
            </>
          }
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
