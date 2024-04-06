import { FC } from 'react';

import { iconStyles, pinButtonStyles } from '@pages/Notes/lib/const';
import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import { noteSelected } from '@pages/Notes/slice';
import Body from '@pages/Notes/ui/Body';
import Content from '@pages/Notes/ui/Content';
import ContextMenu from '@pages/Notes/ui/ContextMenu';
import Controls from '@pages/Notes/ui/Controls';
import Essentials from '@pages/Notes/ui/Essentials';
import Header from '@pages/Notes/ui/Header';
import Labels from '@pages/Notes/ui/Labels';
import cn from '@shared/lib/helpers/cn';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import { Label as TLabels } from '@shared/types';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import UserAvatar from '@shared/ui/UserAvatar';
import { useDispatch } from 'react-redux';

type NoteProps = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  labels: TLabels[];
  isPinned: boolean;
};

const Note: FC<NoteProps> = ({
  id,
  title,
  content,
  createdAt,
  labels,
  isPinned,
}) => {
  const activeNote = useAppSelector(selectActiveNote);
  const dispatch = useDispatch();

  const isActiveNote = activeNote === id;

  const handleSelectNote = () => {
    dispatch(noteSelected(id));
  };

  return (
    <li
      onClick={handleSelectNote}
      className={cn(
        'relative flex h-[200px] w-full flex-col gap-5 overflow-hidden rounded-xl bg-surface-container pl-6 pr-3 pt-6 text-on-surface transition-colors after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[90px] after:w-full after:bg-gradient-to-t after:from-surface-bright after:to-transparent after:opacity-50 hover:bg-surface-container-low',
        {
          'bg-high-contrast-inverse-primary hover:bg-high-contrast-inverse-primary':
            isActiveNote,
        },
      )}>
      <Header>
        <UserAvatar className="size-10" />
        <Essentials createdAt={createdAt} />
        <Controls>
          <FilledIconButton selected={isPinned} style={pinButtonStyles} toggle>
            <Icon>keep</Icon>
            <Icon slot="selected" style={iconStyles}>
              keep
            </Icon>
          </FilledIconButton>
          <ContextMenu activeLabels={labels} />
        </Controls>
      </Header>
      <Body>
        <Content title={title} content={content} />
        <Labels labels={labels} />
      </Body>
    </li>
  );
};

export default Note;
