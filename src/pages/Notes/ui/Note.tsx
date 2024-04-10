import { Dispatch, FC, SetStateAction, useRef } from 'react';

import { iconStyles, pinButtonStyles } from '@pages/Notes/lib/const';
import Body from '@pages/Notes/ui/Body';
import Content from '@pages/Notes/ui/Content';
import ContextMenu from '@pages/Notes/ui/ContextMenu';
import Controls from '@pages/Notes/ui/Controls';
import Essentials from '@pages/Notes/ui/Essentials';
import Header from '@pages/Notes/ui/Header';
import { urlParams } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useUrl from '@shared/lib/hooks/useUrl';
import { Label as TLabels } from '@shared/types';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import Labels from '@shared/ui/Labels';
import UserAvatar from '@shared/ui/UserAvatar';
import { format } from 'date-fns';
import { useOutletContext } from 'react-router-dom';

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
  const [isExpanded, setIsExpandNote] =
    useOutletContext<[boolean, Dispatch<SetStateAction<boolean>>]>();
  const containerRef = useRef<HTMLLIElement>(null);
  const { readUrl, setUrl } = useUrl();

  const activeNote = Number(readUrl(urlParams.NOTE_ID));
  const isActiveNote = activeNote === id;
  const contextMenuAnchorId = `noteLabelsContextMenu-${id}`;
  const formatedCreatedAt = format(new Date(createdAt), 'dd.MM.yy');

  const handleSelectNote = () => {
    if (isExpanded) {
      setIsExpandNote(true);
    } else {
      viewTransition(() => setIsExpandNote(true));
    }
    setUrl(urlParams.NOTE_ID, id);
  };

  return (
    <li
      ref={containerRef}
      style={{
        viewTransitionName: `expandedNote-${id}`,
      }}
      onClick={handleSelectNote}
      className={cn(
        'relative flex h-[200px] w-full flex-col gap-5 rounded-xl bg-surface-container pl-6 pr-3 pt-6 text-on-surface transition-all duration-400 ease-emphasized-decelerate after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-[90px] after:w-full after:rounded-xl after:bg-gradient-to-t after:from-surface-bright after:to-transparent after:opacity-30 hover:bg-surface-container-low',
        {
          '-translate-y-0.5 bg-high-contrast-inverse-primary drop-shadow-md [box-shadow:_0px_1px_2px_0px_#0000004D] hover:bg-high-contrast-inverse-primary':
            isActiveNote,
        },
      )}>
      <Header>
        <UserAvatar className="size-10" />
        <Essentials createdAt={formatedCreatedAt} />
        <Controls>
          <FilledIconButton selected={isPinned} style={pinButtonStyles} toggle>
            <Icon>keep</Icon>
            <Icon slot="selected" style={iconStyles}>
              keep
            </Icon>
          </FilledIconButton>
          <ContextMenu anchorId={contextMenuAnchorId} activeLabels={labels} />
        </Controls>
      </Header>
      <Body>
        <Content title={title} content={content} />
        <Labels className="z-10 ml-auto self-end pb-3.5" labels={labels} />
      </Body>
    </li>
  );
};

export default Note;
