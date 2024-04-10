import { MouseEvent, useRef } from 'react';

import { MdMenu } from '@material/web/all';

import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import EditedTime from '@pages/Notes/ui/EditedTime';
import { mockedNotes } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import LabelsMenu from '@shared/ui/labelMenu';

const menuAnchorId = 'extendedNoteLabelsMenu';

const Controls = () => {
  const selectedNote = useAppSelector(selectActiveNote);
  const labels = mockedNotes?.[selectedNote]?.labels;

  const menuRef = useRef<MdMenu>(null);

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
