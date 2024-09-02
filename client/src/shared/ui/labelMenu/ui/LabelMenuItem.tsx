import { FC, ReactNode, useState } from 'react';

import { MdMenuItem } from '@material/web/all';

import { menuItemStyles } from '@pages/Notes/lib/const';
import { MdProps } from '@shared/types';
import Checkbox from '@shared/ui/Checkbox';
import MenuItem from '@shared/ui/MenuItem';

type LabelMenuItemProps = MdProps<MdMenuItem> & {
  title: string | ReactNode;
  isChecked?: boolean;
};

const LabelMenuItem: FC<LabelMenuItemProps> = ({
  title,
  isChecked,
  ...props
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handleClick = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <MenuItem
      {...props}
      onClick={handleClick}
      keepOpen
      style={menuItemStyles}
      className="mx-2 rounded-md">
      <p className="first:capitalize" slot="headline">
        {title}
      </p>
      <Checkbox checked={checked} slot="end" />
    </MenuItem>
  );
};

export default LabelMenuItem;
