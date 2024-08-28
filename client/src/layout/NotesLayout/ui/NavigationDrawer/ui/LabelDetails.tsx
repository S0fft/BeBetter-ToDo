import { FC, MouseEvent, useRef, useState } from 'react';

import { MdMenu } from '@material/web/all';

import { menuItemStyles } from '@pages/Notes/lib/const';
import cn from '@shared/lib/helpers/cn';
import ConfirmDialog from '@shared/ui/ConfirmDialog';
import ContextMenu from '@shared/ui/ContextMenu';
import FilledTonalIconButton from '@shared/ui/FilledTonalIconButton';
import Icon from '@shared/ui/Icon';
import InputDialog from '@shared/ui/InputDialog';
import MenuItem from '@shared/ui/MenuItem';
import { useTranslation } from 'react-i18next';

type DetailsProps = {
  id: number;
};

const Details: FC<DetailsProps> = ({ id }) => {
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isDialogRenameOpen, setIsDialogRenameOpen] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const { t } = useTranslation();
  const menuRef = useRef<MdMenu>(null);

  function handleMenuToggle(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    if (menuRef.current) {
      menuRef.current.open = !menuRef.current.open;

      setIsContextMenuOpen(menuRef.current.open);
    }
  }

  const handleToggleConfirmDialog = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('confirm');

    setIsConfirmDialogOpen((prev) => !prev);
  };

  const handleDeleteLabel = async (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleToggleDialogRename = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    console.log('rename');
    setIsDialogRenameOpen((prev) => !prev);
  };

  const handleRenameLabel = async (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <ConfirmDialog
        setIsOpen={setIsConfirmDialogOpen}
        open={isConfirmDialogOpen}
        title={t('deleteDialog.title')}
        subtitle={t('deleteDialog.content')}
        confirmText={t('deleteDialog.delete')}
        cancelText={t('deleteDialog.cancel')}
        onCancel={handleToggleConfirmDialog}
        onConfirm={handleDeleteLabel}
      />
      <InputDialog
        open={isDialogRenameOpen}
        setIsOpen={setIsDialogRenameOpen}
        title={t('renameDialog.title')}
        initialValue="label title"
        onCancel={handleToggleDialogRename}
        onConfirm={handleRenameLabel}
      />
      <ContextMenu
        id={`details-menu-${id}`}
        className="relative ml-auto flex items-center brightness-125"
        button={
          <FilledTonalIconButton
            className={cn('invisible absolute -right-4 group-hover:visible', {
              visible:
                isDialogRenameOpen || isConfirmDialogOpen || isContextMenuOpen,
            })}
            onClick={(e) => handleMenuToggle(e)}>
            <Icon>more_vert</Icon>
          </FilledTonalIconButton>
        }>
        <MenuItem
          style={menuItemStyles}
          className="mx-2 rounded-md"
          onClick={handleToggleDialogRename}>
          Rename
          <Icon className="text-on-surface" slot="end">
            edit
          </Icon>
        </MenuItem>
        <MenuItem
          style={menuItemStyles}
          className="mx-2 rounded-md"
          onClick={handleToggleConfirmDialog}>
          Delete
          <Icon className="text-on-surface" slot="end">
            delete
          </Icon>
        </MenuItem>
      </ContextMenu>
    </>
  );
};

export default Details;
