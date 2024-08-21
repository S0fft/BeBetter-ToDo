import { MouseEvent, useRef } from 'react';

import { MdMenu } from '@material/web/all';

import EditedTime from '@pages/Notes/ui/EditedTime';
import { urlParams } from '@shared/lib/const';
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

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);
  const labels = mockedNotes?.[activeNote]?.labels;
  const labelsMenuKey = `extendedNoteLabels-${activeNote}`;

  const handleLabelMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.show();
  };

  return (
    <article className="flex items-center">
      <Tooltip content={t('tooltips.pin')}>
        <IconButton>
          <Icon>keep</Icon>
        </IconButton>
      </Tooltip>
      <Tooltip content={t('tooltips.bookmark')}>
        <IconButton>
          <Icon>collections_bookmark</Icon>
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
