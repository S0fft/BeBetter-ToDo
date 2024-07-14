import {
  Dispatch,
  FC,
  MouseEvent,
  PropsWithChildren,
  SetStateAction,
  useRef,
} from 'react';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import { pinButtonStyles } from '@pages/Notes/lib/const';
import Body from '@pages/Notes/ui/Body';
import Content from '@pages/Notes/ui/Content';
import ContextMenu from '@pages/Notes/ui/ContextMenu';
import Controls from '@pages/Notes/ui/Controls';
import Essentials from '@pages/Notes/ui/Essentials';
import Header from '@pages/Notes/ui/Header';
import { filledIconStyles, urlParams } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useActiveNote from '@shared/lib/hooks/useActiveNote';
import useUrl from '@shared/lib/hooks/useUrl';
import { Label as TLabels } from '@shared/types';
import FilledIconButton from '@shared/ui/FilledIconButton';
import Icon from '@shared/ui/Icon';
import Labels from '@shared/ui/Labels';
import UserAvatar from '@shared/ui/UserAvatar';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

type NoteProps = PropsWithChildren<{
  id: number;
  title: string;
  content: string;
  createdAt: string;
  labels: TLabels[];
  isPinned: boolean;
  index: number;
}>;

const animations = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: 'spring',
    stiffness: 240,
    damping: 15,
    bounce: 0,
    mass: 0.7,
  },
};

const Note: FC<NoteProps> = ({
  id,
  title,
  content,
  createdAt,
  labels,
  isPinned,
  index,
  children,
}) => {
  const [isExpanded, setIsExpandNote] =
    useOutletContext<[boolean, Dispatch<SetStateAction<boolean>>]>();
  const containerRef = useRef<HTMLLIElement>(null);
  const { setUrl } = useUrl();
  const [updateNote] = useUpdateNoteMutation();
  const isActiveNote = useActiveNote(id);

  const formatedCreatedAt = format(new Date(createdAt), 'dd.MM.yy');

  const handleSelectNote = () => {
    if (isExpanded) {
      setIsExpandNote(true);
    } else {
      viewTransition(() => setIsExpandNote(true));
    }
    setUrl(urlParams.NOTE_ID, id);
  };

  const handleTogglePinNote = (e: MouseEvent) => {
    e.stopPropagation();
    updateNote({ id, body: { is_pinned: !isPinned } });
  };

  return (
    <motion.li
      {...{
        ...animations,
        transition: { ...animations.transition, delay: index * 0.02 },
      }}
      layout
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
          <FilledIconButton
            onClick={handleTogglePinNote}
            selected={isPinned}
            style={pinButtonStyles}
            toggle>
            <Icon>keep</Icon>
            <Icon slot="selected" style={filledIconStyles}>
              keep
            </Icon>
          </FilledIconButton>
          <ContextMenu noteId={id}>{children}</ContextMenu>
        </Controls>
      </Header>
      <Body>
        <Content title={title} content={content} />
        <Labels className="z-10 ml-auto self-end pb-3.5" labels={labels} />
      </Body>
    </motion.li>
  );
};

export default Note;
