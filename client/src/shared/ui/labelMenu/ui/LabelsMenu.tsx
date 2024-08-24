/* eslint-disable react/no-array-index-key */
import { forwardRef, useState } from 'react';

import { MdMenu } from '@material/web/all';

import { menuStyles } from '@pages/Notes/lib/const';
import cn from '@shared/lib/helpers/cn';
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
      return title.toLowerCase().includes(searchText.toLowerCase());
    };

    const handleRenderLabel = ({ title }: Label) => {
      const isChecked = activeLabels?.some(
        (activeLabel) => activeLabel.title === title,
      );

      const getHighlightedText = (text: string, highlight: string) => {
        if (!highlight.trim()) {
          return <span>{text}</span>;
        }

        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
          <span>
            {parts.map((part, i) => (
              <span
                key={i}
                className={cn('text-on-surface', {
                  'text-primary-fixed-dim':
                    part.toLowerCase() === highlight.toLowerCase(),
                })}>
                {part}
              </span>
            ))}
          </span>
        );
      };

      return (
        <LabelMenuItem
          typeaheadText=""
          key={title}
          title={getHighlightedText(title, searchText)}
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
