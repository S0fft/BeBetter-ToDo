import { MouseEvent, useRef } from 'react';

import { MdMenu } from '@material/web/all';

import {
  useNoteQuery,
  useUpdateNoteMutation,
} from '@/entities/note/api/noteApi';
import EditedTime from '@pages/Notes/ui/EditedTime';
import { filledIconStyles, urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import LabelsMenu from '@shared/ui/labelMenu';
import Tooltip from '@shared/ui/Tooltip';
import { useTranslation } from 'react-i18next';

import { mockedNotes } from '../../../../dev-data';

const menuAnchorId = 'extendedNoteLabelsMenu';

const Controls = () => {
  const { readUrl } = useUrl();
  const menuRef = useRef<MdMenu>(null);
  const { t } = useTranslation();
  const [updateNote] = useUpdateNoteMutation();

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);
  const labels = mockedNotes?.[activeNote]?.labels;
  const labelsMenuKey = `extendedNoteLabels-${activeNote}`;

  const { data: note } = useNoteQuery(activeNote);

  const handleLabelMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.show();
  };

  const handleTogglePinNote = (e: MouseEvent) => {
    e.stopPropagation();
    updateNote({ id: activeNote, body: { is_pinned: !note?.is_pinned } });
  };

  const handleArchiveNote = (e: MouseEvent) => {
    e.stopPropagation();
    updateNote({ id: activeNote, body: { is_done: !note?.is_done } });
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
        <IconButton onClick={handleArchiveNote} toggle selected={note?.is_done}>
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
      <Tooltip content={t('tooltips.options')}>
        <IconButton>
          <Icon>more_vert</Icon>
        </IconButton>
      </Tooltip>
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
