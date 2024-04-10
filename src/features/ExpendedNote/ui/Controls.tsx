import { MouseEvent, useRef } from 'react';

import { MdMenu } from '@material/web/all';

import EditedTime from '@pages/Notes/ui/EditedTime';
import { mockedNotes, urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import LabelsMenu from '@shared/ui/labelMenu';

const menuAnchorId = 'extendedNoteLabelsMenu';

const Controls = () => {
  const { readUrl } = useUrl();
  const menuRef = useRef<MdMenu>(null);

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);
  const labels = mockedNotes?.[activeNote]?.labels;

  const handleLabelMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.show();
  };

  return (
    <article className="flex items-center">
      <IconButton>
        <Icon>keep</Icon>
      </IconButton>
      <IconButton>
        <Icon>collections_bookmark</Icon>
      </IconButton>
      <div className="relative inline-block">
        <IconButton id={menuAnchorId} onClick={handleLabelMenuOpen}>
          <Icon>label</Icon>
        </IconButton>
        <LabelsMenu
          anchorCorner="end-start"
          anchor={menuAnchorId}
          ref={menuRef}
          activeLabels={labels}
        />
      </div>
      <IconButton>
        <Icon>more_vert</Icon>
      </IconButton>
      <IconButton>
        <Icon>undo</Icon>
      </IconButton>
      <IconButton>
        <Icon>redo</Icon>
      </IconButton>
      <EditedTime />
    </article>
  );
};

export default Controls;
