import { MouseEvent, useRef } from 'react';

import { MdMenu } from '@material/web/all';

import Body from '@features/ExpendedNote/ui/Body';
import Content from '@features/ExpendedNote/ui/Content';
import Essentials from '@features/ExpendedNote/ui/Essentials';
import Header from '@features/ExpendedNote/ui/Header';
import Title from '@features/ExpendedNote/ui/Title';
import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import { mockedNotes } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import LabelsMenu from '@shared/ui/LabelsMenu';
import UserAvatar from '@shared/ui/UserAvatar';

const menuAnchorId = 'extendedNoteLabelsMenu';

const ExpendedNote = () => {
  const selectedNote = useAppSelector(selectActiveNote);
  const { labels } = mockedNotes[selectedNote];

  const menuRef = useRef<MdMenu>(null);

  const handleLabelMenuOpen = (e: MouseEvent) => {
    e.stopPropagation();
    if (menuRef.current) menuRef.current.show();
  };

  return (
    <>
      <Header>
        <UserAvatar className="size-[76px]" />
        <Essentials />
        <IconButton className="ml-auto">
          <Icon>dock_to_left</Icon>
        </IconButton>
      </Header>
      <Body>
        <Title />
        <Content />
        <article className="flex items-center">
          <div>
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
          </div>
          <p className="ml-auto text-sm">Edited today</p>
        </article>
      </Body>
    </>
  );
};

export default ExpendedNote;
