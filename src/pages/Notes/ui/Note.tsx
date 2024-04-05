import { FC } from 'react';

import {
  dotButtonStyles,
  iconStyles,
  pinButtonStyles,
} from '@pages/Notes/lib/const';
import Body from '@pages/Notes/ui/Body';
import Content from '@pages/Notes/ui/Content';
import Controls from '@pages/Notes/ui/Controls';
import Essentials from '@pages/Notes/ui/Essentials';
import Header from '@pages/Notes/ui/Header';
import Labels from '@pages/Notes/ui/Labels';
import { Labels as TLabels } from '@shared/types';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import UserAvatar from '@shared/ui/UserAvatar';

type NoteProps = {
  title: string;
  content: string;
  createdAt: string;
  labels: TLabels[];
  isPinned: boolean;
};

const Note: FC<NoteProps> = ({
  title,
  content,
  createdAt,
  labels,
  isPinned,
}) => {
  return (
    <li className="relative flex h-[200px] w-full flex-col gap-5 overflow-hidden rounded-xl bg-surface-container pl-6 pr-3 pt-6 text-on-surface after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[90px] after:w-full after:bg-gradient-to-t after:from-surface-bright after:to-transparent after:opacity-50">
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
          <FilledIconButton style={dotButtonStyles}>
            <Icon>more_vert</Icon>
          </FilledIconButton>
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
