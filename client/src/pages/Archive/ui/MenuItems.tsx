import { FC, MouseEvent } from 'react';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import { menuItemStyles } from '@pages/Notes/lib/const';
import runAsync from '@shared/lib/helpers/runAsync';
import useMoveTrashNote from '@shared/lib/hooks/useMoveTrashNote';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import Icon from '@shared/ui/Icon';
import MenuItem from '@shared/ui/MenuItem';
import TrashIcon from '@shared/ui/TrashIcon';
import { useTranslation } from 'react-i18next';

type MenuItemsProps = {
  noteId: number;
};

const MenuItems: FC<MenuItemsProps> = ({ noteId }) => {
  const [updateNote] = useUpdateNoteMutation();
  const snackbar = useSnackbar();
  const handleMoveTrashNote = useMoveTrashNote(noteId);
  const { t } = useTranslation();

  const handleUnarchiveNote = async (e: MouseEvent) => {
    e.stopPropagation();

    const [error] = await runAsync(
      updateNote({ id: noteId, body: { is_done: false } }).unwrap,
    );

    if (error !== null) {
      snackbar.err(error);
      return;
    }

    snackbar.msg(t('snackbar.unarchived'));
  };

  const handleMoveToTrashNote = (e: MouseEvent) => {
    void handleMoveTrashNote(e, handleUnarchiveNote);
  };

  return (
    <>
      <MenuItem
        onClick={handleUnarchiveNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        {t('noteActions.unarchive')}
        <Icon slot="end" className="text-on-surface">
          collections_bookmark
        </Icon>
      </MenuItem>
      <MenuItem
        onClick={handleMoveToTrashNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        <span slot="headline">{t('noteActions.delete')}</span>
        <Icon slot="end" className="text-on-surface">
          <TrashIcon />
        </Icon>
      </MenuItem>
    </>
  );
};

export default MenuItems;
