import { FC, MouseEvent } from 'react';

import {
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} from '@/entities/note/api/noteApi';
import { menuItemStyles } from '@pages/Notes/lib/const';
import { SNACKBAR_MESSAGE, urlParams } from '@shared/lib/const';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useActiveNote from '@shared/lib/hooks/useActiveNote';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import useUrl from '@shared/lib/hooks/useUrl';
import Icon from '@shared/ui/Icon';
import MenuItem from '@shared/ui/MenuItem';
import { OutletContext } from '@shared/ui/NotesList/model/types';
import { useOutletContext } from 'react-router-dom';

type MenuItemsProps = {
  noteId: number;
};

const MenuItems: FC<MenuItemsProps> = ({ noteId }) => {
  const [, setIsExpandNote] = useOutletContext<OutletContext>();
  const [deleteNote] = useDeleteNoteMutation();
  const [updateNote] = useUpdateNoteMutation();
  const { setUrl } = useUrl();
  const snackbar = useSnackbar();
  const isActiveNote = useActiveNote(noteId);

  const handleDeleteForeverNote = async (e: MouseEvent) => {
    e.stopPropagation();

    if (isActiveNote) {
      setUrl(urlParams.NOTE_ID);
      viewTransition(() => setIsExpandNote(false));
    }

    try {
      // 1.show modal

      // 2.delete note
      await deleteNote(noteId);

      // 3.show snackbar
      snackbar.msg(SNACKBAR_MESSAGE.DELETED);
    } catch (err) {
      snackbar.err(err);
    }
  };

  const handleRestoreNote = async (e: MouseEvent) => {
    e.stopPropagation();

    try {
      await updateNote({ id: noteId, body: { is_trashed: false } });
      snackbar.msg(SNACKBAR_MESSAGE.RESTORED);
    } catch (err) {
      snackbar.err(err);
    }
  };

  return (
    <>
      <MenuItem
        onClick={handleDeleteForeverNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        Delete forever
        <Icon slot="end" className="text-on-surface">
          delete_forever
        </Icon>
      </MenuItem>
      <MenuItem
        onClick={handleRestoreNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        Restore
        <Icon slot="end" className="text-on-surface">
          restore_from_trash
        </Icon>
      </MenuItem>
    </>
  );
};

export default MenuItems;
