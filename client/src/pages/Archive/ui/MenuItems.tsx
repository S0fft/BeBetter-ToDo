import { FC, MouseEvent } from 'react';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import trash from '@assets/trash.svg';
import { menuItemStyles } from '@pages/Notes/lib/const';
import { UNKNOWN_ERROR_MESSAGE } from '@shared/lib/const';
import isApiError from '@shared/lib/helpers/isApiError';
import useMoveTrashNote from '@shared/lib/hooks/useMoveTrashNote';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import Icon from '@shared/ui/Icon';
import MenuItem from '@shared/ui/MenuItem';

type MenuItemsProps = {
  noteId: number;
};

const MenuItems: FC<MenuItemsProps> = ({ noteId }) => {
  const [updateNote] = useUpdateNoteMutation();
  const snackbar = useSnackbar();
  const handleMoveTrashNote = useMoveTrashNote(noteId);

  const handleUnarchiveNote = async (e: MouseEvent) => {
    e.stopPropagation();

    try {
      await updateNote({ id: noteId, body: { is_done: false } });
      snackbar('Note unarchived');
    } catch (err) {
      const errorMessage = isApiError(err)
        ? err.data.detail
        : UNKNOWN_ERROR_MESSAGE;
      snackbar(errorMessage);
    }
  };

  return (
    <>
      <MenuItem
        onClick={handleUnarchiveNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        Unarchive
        <Icon slot="end" className="text-on-surface">
          collections_bookmark
        </Icon>
      </MenuItem>
      <MenuItem
        onClick={handleMoveTrashNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        <span slot="headline">Delete</span>
        <Icon slot="end" className="text-on-surface">
          <img src={trash} alt="" />
        </Icon>
      </MenuItem>
    </>
  );
};

export default MenuItems;
