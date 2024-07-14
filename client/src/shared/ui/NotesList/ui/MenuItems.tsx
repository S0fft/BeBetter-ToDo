import { FC } from 'react';

import { Corner } from '@material/web/all';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import trash from '@assets/trash.svg';
import { menuItemStyles, subMenuItemStyles } from '@pages/Notes/lib/const';
import useMoveTrashNote from '@shared/lib/hooks/useMoveTrashNote';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import { Label } from '@shared/types';
import Icon from '@shared/ui/Icon';
import LabelsMenu from '@shared/ui/labelMenu';
import MenuItem from '@shared/ui/MenuItem';
import SubMenu from '@shared/ui/SubMenu';

type MenuItemsProps = {
  noteId: number;
  activeLabels: Label[];
};

const MenuItems: FC<MenuItemsProps> = ({ noteId, activeLabels }) => {
  const [updateNote] = useUpdateNoteMutation();
  const snackbar = useSnackbar();
  const handleMoveTrashNote = useMoveTrashNote(noteId);

  const handleArchiveNote = async () => {
    try {
      await updateNote({ id: noteId, body: { is_done: true } });
      snackbar.msg('Note archived');
    } catch (err) {
      snackbar.err(err);
    }
  };

  return (
    <>
      <MenuItem
        onClick={handleMoveTrashNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        <span slot="headline">Delete</span>
        <Icon slot="end" className="text-on-surface">
          <img src={trash} alt="" />
        </Icon>
      </MenuItem>
      <MenuItem
        onClick={handleArchiveNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        <span slot="headline">Archive</span>
        <Icon slot="end" className="text-on-surface">
          collections_bookmark
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
    </>
  );
};

export default MenuItems;
