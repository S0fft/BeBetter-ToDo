import { FC, MouseEvent } from 'react';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import trash from '@assets/trash.svg';
import { menuItemStyles } from '@pages/Notes/lib/const';
import { UNKNOWN_ERROR_MESSAGE, urlParams } from '@shared/lib/const';
import isApiError from '@shared/lib/helpers/isApiError';
import viewTransition from '@shared/lib/helpers/viewTransition';
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
  const [updateNote] = useUpdateNoteMutation();
  const { setUrl, readUrl } = useUrl();
  const snackbar = useSnackbar();

  // TODO: useActiveNote??
  const isActiveNote =
    noteId === Number.parseInt(readUrl(urlParams.NOTE_ID), 10);

  // TODO: abstract in separate hook
  const handleDeleteNote = async (e: MouseEvent) => {
    e.stopPropagation();

    if (isActiveNote) {
      setUrl(urlParams.NOTE_ID);
      viewTransition(() => setIsExpandNote(false));
    }

    try {
      await updateNote({ id: noteId, body: { is_trashed: true } });
      snackbar('Moved to trash');
    } catch (err) {
      const errorMessage = isApiError(err)
        ? err.data.detail
        : UNKNOWN_ERROR_MESSAGE;
      snackbar(errorMessage);
    }
  };

  return (
    <>
      <MenuItem style={menuItemStyles} className="mx-2 rounded-md">
        Unarchive
        <Icon slot="end" className="text-on-surface">
          collections_bookmark
        </Icon>
      </MenuItem>
      <MenuItem
        onClick={handleDeleteNote}
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
