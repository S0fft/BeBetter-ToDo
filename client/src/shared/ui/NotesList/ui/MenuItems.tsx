import { FC, MouseEvent } from 'react';

import { Corner } from '@material/web/all';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import trash from '@assets/trash.svg';
import { menuItemStyles, subMenuItemStyles } from '@pages/Notes/lib/const';
import { UNKNOWN_ERROR_MESSAGE, urlParams } from '@shared/lib/const';
import isApiError from '@shared/lib/helpers/isApiError';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import useUrl from '@shared/lib/hooks/useUrl';
import { Label } from '@shared/types';
import Icon from '@shared/ui/Icon';
import LabelsMenu from '@shared/ui/labelMenu';
import MenuItem from '@shared/ui/MenuItem';
import { OutletContext } from '@shared/ui/NotesList/model/types';
import SubMenu from '@shared/ui/SubMenu';
import { useOutletContext } from 'react-router-dom';

type MenuItemsProps = {
  noteId: number;
  activeLabels: Label[];
};

const MenuItems: FC<MenuItemsProps> = ({ noteId, activeLabels }) => {
  const [, setIsExpandNote] = useOutletContext<OutletContext>();
  const [updateNote] = useUpdateNoteMutation();
  const { setUrl, readUrl } = useUrl();
  const snackbar = useSnackbar();

  // TODO: useActiveNote??
  const isActiveNote =
    noteId === Number.parseInt(readUrl(urlParams.NOTE_ID), 10);

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

  const handleArchiveNote = async () => {
    try {
      await updateNote({ id: noteId, body: { is_done: true } });
      snackbar('Archived');
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
        onClick={handleDeleteNote}
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
