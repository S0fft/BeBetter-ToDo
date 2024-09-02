import { FC, MouseEvent } from 'react';

import { Corner } from '@material/web/all';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import { menuItemStyles, subMenuItemStyles } from '@pages/Notes/lib/const';
import runAsync from '@shared/lib/helpers/runAsync';
import useMoveTrashNote from '@shared/lib/hooks/useMoveTrashNote';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import { Label } from '@shared/types';
import Icon from '@shared/ui/Icon';
import LabelsMenu from '@shared/ui/labelMenu';
import MenuItem from '@shared/ui/MenuItem';
import SubMenu from '@shared/ui/SubMenu';
import TrashIcon from '@shared/ui/TrashIcon';
import { useTranslation } from 'react-i18next';

type MenuItemsProps = {
  noteId: number;
  activeLabels: Label[];
};

const MenuItems: FC<MenuItemsProps> = ({ noteId, activeLabels }) => {
  const [updateNote] = useUpdateNoteMutation();
  const snackbar = useSnackbar();
  const handleMoveTrashNote = useMoveTrashNote(noteId);
  const { t } = useTranslation();

  const handleArchiveNote = async (e: MouseEvent) => {
    e.stopPropagation();

    const [error] = await runAsync(
      updateNote({ id: noteId, body: { is_done: true } }).unwrap,
    );

    if (error !== null) {
      snackbar.err(error);
      return;
    }

    snackbar.msg(t('snackbar.archived'));
  };

  return (
    <>
      <MenuItem
        onClick={handleMoveTrashNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        <span slot="headline">{t('noteActions.delete')}</span>
        <Icon slot="end">
          <TrashIcon />
        </Icon>
      </MenuItem>
      <MenuItem
        onClick={handleArchiveNote}
        style={menuItemStyles}
        className="mx-2 rounded-md">
        <span slot="headline">{t('noteActions.archive')}</span>
        <Icon slot="end" className="text-on-surface">
          collections_bookmark
        </Icon>
      </MenuItem>
      <SubMenu menuCorner={Corner.END_END} anchor-corner={Corner.END_START}>
        <MenuItem
          slot="item"
          style={subMenuItemStyles}
          className="mx-2 rounded-md">
          {t('noteActions.setLabel')}
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
