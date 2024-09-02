import { FC, MouseEvent, useState } from 'react';

import {
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} from '@/entities/note/api/noteApi';
import { menuItemStyles } from '@pages/Notes/lib/const';
import { urlParams } from '@shared/lib/const';
import runAsync from '@shared/lib/helpers/runAsync';
import useActiveNote from '@shared/lib/hooks/useActiveNote';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import useUrl from '@shared/lib/hooks/useUrl';
import ConfirmDialog from '@shared/ui/ConfirmDialog';
import Icon from '@shared/ui/Icon';
import MenuItem from '@shared/ui/MenuItem';
import { useTranslation } from 'react-i18next';

type MenuItemsProps = {
  noteId: number;
};

const MenuItems: FC<MenuItemsProps> = ({ noteId }) => {
  const [deleteNote] = useDeleteNoteMutation();
  const [updateNote] = useUpdateNoteMutation();
  const { setUrl } = useUrl();
  const snackbar = useSnackbar();
  const isActiveNote = useActiveNote(noteId);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();

  const handleToggleDialog = (e: MouseEvent) => {
    e.stopPropagation();
    setIsDialogOpen((prev) => !prev);
  };

  const handleDeleteForeverNote = async (e: MouseEvent) => {
    e.stopPropagation();

    if (isActiveNote) {
      setUrl(urlParams.NOTE_ID);
    }

    const [error] = await runAsync(deleteNote(noteId).unwrap);

    if (error !== null) {
      snackbar.err(error);
      return;
    }

    snackbar.msg(t('snackbar.deleted'));
  };

  const handleRestoreNote = async (e: MouseEvent) => {
    e.stopPropagation();

    const [error] = await runAsync(
      updateNote({ id: noteId, body: { is_trashed: false } }).unwrap,
    );

    if (error !== null) {
      snackbar.err(error);
      return;
    }

    snackbar.msg(t('snackbar.restored'));
  };

  return (
    <>
      <ConfirmDialog
        setIsOpen={setIsDialogOpen}
        open={isDialogOpen}
        title={t('permanentDelete.title')}
        subtitle={t('permanentDelete.subtitle')}
        confirmText={t('permanentDelete.confirmText')}
        cancelText={t('permanentDelete.cancelText')}
        onCancel={handleToggleDialog}
        onConfirm={handleDeleteForeverNote}
      />
      <MenuItem
        onClick={handleToggleDialog}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        {t('noteActions.deleteForever')}
        <Icon slot="end" className="text-on-surface">
          delete_forever
        </Icon>
      </MenuItem>
      <MenuItem
        onClick={handleRestoreNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        {t('noteActions.restore')}
        <Icon slot="end" className="text-on-surface">
          restore_from_trash
        </Icon>
      </MenuItem>
    </>
  );
};

export default MenuItems;
