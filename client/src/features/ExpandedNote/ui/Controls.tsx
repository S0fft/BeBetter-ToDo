import { MouseEvent, useRef } from 'react';

import { Corner, MdMenu } from '@material/web/all';

import {
  useNoteQuery,
  useUpdateNoteMutation,
} from '@/entities/note/api/noteApi';
import { menuItemStyles } from '@pages/Notes/lib/const';
import EditedTime from '@pages/Notes/ui/EditedTime';
import { filledIconStyles, urlParams } from '@shared/lib/const';
import runAsync from '@shared/lib/helpers/runAsync';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import useUrl from '@shared/lib/hooks/useUrl';
import ContextMenu from '@shared/ui/ContextMenu';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import LabelsMenu from '@shared/ui/labelMenu';
import MenuItem from '@shared/ui/MenuItem';
import Tooltip from '@shared/ui/Tooltip';
import TrashIcon from '@shared/ui/TrashIcon';
import { useTranslation } from 'react-i18next';

import { mockedNotes } from '../../../../dev-data';

const menuAnchorId = 'extendedNoteLabelsMenu';

const Controls = () => {
  const { readUrl, setUrl } = useUrl();
  const menuRef = useRef<MdMenu>(null);
  const { t } = useTranslation();
  const [updateNote] = useUpdateNoteMutation();
  const snackbar = useSnackbar();

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);
  const labels = mockedNotes?.[activeNote]?.labels;
  const labelsMenuKey = `extendedNoteLabels-${activeNote}`;

  const { data: note } = useNoteQuery(activeNote, {
    skip: Number.isNaN(activeNote),
  });

  const handleLabelMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.show();
  };

  const handleTogglePinNote = (e: MouseEvent) => {
    e.stopPropagation();
    updateNote({ id: activeNote, body: { is_pinned: !note?.is_pinned } });
  };

  const handleArchiveNote = async (e: MouseEvent, isArchive = true) => {
    e.stopPropagation();

    const [error] = await runAsync(
      updateNote({ id: activeNote, body: { is_done: isArchive } }).unwrap,
    );

    if (error !== null) {
      snackbar.err(error);
      return;
    }

    if (isArchive) {
      snackbar.msg(t('snackbar.archived'));
    } else {
      snackbar.msg(t('snackbar.unarchived'));
    }
  };

  const handleMoveTrashNote = async (e: MouseEvent) => {
    e.stopPropagation();

    const [error] = await runAsync(
      updateNote({ id: activeNote, body: { is_trashed: true } }).unwrap,
    );

    if (error !== null) {
      snackbar.err(error);
      return;
    }

    snackbar.msg(t('snackbar.trashed'));
    setUrl(urlParams.NOTE_ID);
  };

  return (
    <article
      className="flex items-center"
      style={{
        '--md-sys-color-primary': 'var(--md-sys-color-on-surface)',
        '--md-sys-color-on-primary': 'var(--md-sys-color-on-surface-variant)',
      }}>
      <Tooltip
        content={note?.is_pinned ? t('tooltips.unpin') : t('tooltips.pin')}>
        <IconButton
          onClick={handleTogglePinNote}
          toggle
          selected={note?.is_pinned}>
          <Icon>keep</Icon>
          <Icon style={filledIconStyles} slot="selected">
            keep
          </Icon>
        </IconButton>
      </Tooltip>
      <Tooltip
        content={
          note?.is_done ? t('tooltips.unarchive') : t('tooltips.archive')
        }>
        <IconButton
          onClick={
            note?.is_done
              ? (e) => handleArchiveNote(e, false)
              : handleArchiveNote
          }
          toggle
          selected={note?.is_done}>
          <Icon>collections_bookmark</Icon>
          <Icon style={filledIconStyles} slot="selected">
            collections_bookmark
          </Icon>
        </IconButton>
      </Tooltip>
      <div className="relative inline-block">
        <Tooltip content={t('tooltips.addLabel')}>
          <IconButton id={menuAnchorId} onClick={handleLabelMenuOpen}>
            <Icon>label</Icon>
          </IconButton>
        </Tooltip>
        <LabelsMenu
          key={labelsMenuKey}
          anchorCorner="end-start"
          anchor={menuAnchorId}
          ref={menuRef}
          activeLabels={labels}
        />
      </div>
      <ContextMenu
        tooltipContent={t('tooltips.options')}
        id={`${activeNote}-expanded`}
        button={
          <IconButton>
            <Icon>more_vert</Icon>
          </IconButton>
        }
        anchorCorner={Corner.START_START}
        menuCorner={Corner.END_START}>
        <MenuItem
          onClick={handleMoveTrashNote}
          style={menuItemStyles}
          className="mx-2 rounded-md">
          <span slot="headline">{t('noteActions.delete')}</span>
          <Icon slot="end" className="text-on-surface">
            <TrashIcon />
          </Icon>
        </MenuItem>
      </ContextMenu>
      <Tooltip content={t('tooltips.undo')}>
        <IconButton>
          <Icon>undo</Icon>
        </IconButton>
      </Tooltip>
      <Tooltip content={t('tooltips.redo')}>
        <IconButton>
          <Icon>redo</Icon>
        </IconButton>
      </Tooltip>
      <EditedTime />
    </article>
  );
};

export default Controls;
