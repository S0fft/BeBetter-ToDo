import { KeyboardEvent, useState } from 'react';

import {
  MAX_TITLE_HEIGHT_PX,
  MAX_TITLE_LENGTH,
  TITLE_PADDING_Y,
  TITLE_TEXT_AREA_INITIAL_HEIGHT,
} from '@features/ExpendedNote/lib/const';
import Essentials from '@features/ExpendedNote/ui/Essentials';
import Header from '@features/ExpendedNote/ui/Header';
import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import { mockedNotes } from '@shared/lib/const';
import elementHasScrollbar from '@shared/lib/helpers/elementHasScroll';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import Labels from '@shared/ui/Labels';
import UserAvatar from '@shared/ui/UserAvatar';

const ExpendedNote = () => {
  const selectedNote = useAppSelector(selectActiveNote);
  const {
    labels,
    title: initialTitle,
    content: initialContent,
  } = mockedNotes[selectedNote];

  const [content, setContent] = useState(initialContent);
  const [title, setTitle] = useState(initialTitle);

  return (
    <>
      <Header>
        <UserAvatar className="size-[76px]" />
        <Essentials>
          <Labels className="mt-1 w-full self-start" labels={labels} />
        </Essentials>
        <IconButton className="ml-auto">
          <Icon>dock_to_left</Icon>
        </IconButton>
      </Header>
      <article className="relative grid h-full w-full grid-rows-[max-content_1fr] gap-5 bg-surface p-6 transition-all before:absolute before:left-8 before:top-1 before:flex before:size-fit before:items-center before:justify-center before:bg-surface before:px-2 before:text-sm before:text-on-surface-variant before:opacity-0 before:transition-all before:content-['Title'] has-[input:focus]:before:opacity-100">
        <textarea
          placeholder="Title your todo..."
          value={title}
          maxLength={MAX_TITLE_LENGTH}
          style={{ height: TITLE_TEXT_AREA_INITIAL_HEIGHT }}
          className="resize-none overflow-hidden rounded-sm bg-transparent px-3 py-1 text-xl font-medium outline-none transition-shadow focus:ring-4 focus:ring-high-contrast-inverse-primary focus:ring-offset-4 focus:ring-offset-surface"
          onChange={(e) => {
            const { target } = e;
            const isMaxHeightExceeded =
              target.clientHeight > MAX_TITLE_HEIGHT_PX;

            if (isMaxHeightExceeded) return;

            setTitle(target.value);

            if (elementHasScrollbar(target)) {
              const newHeighPlusOneRow = `${Number.parseInt(getComputedStyle(target).height, 10) + (TITLE_TEXT_AREA_INITIAL_HEIGHT - TITLE_PADDING_Y)}px`;
              target.style.height = newHeighPlusOneRow;
            }
          }}
          onKeyDown={(e: KeyboardEvent) => {
            const target = e.target as HTMLTextAreaElement;

            if (e.key === 'Backspace') {
              const targetHeight = Number.parseInt(
                getComputedStyle(target).height,
                10,
              );
              const newHeight =
                targetHeight -
                (TITLE_TEXT_AREA_INITIAL_HEIGHT - TITLE_PADDING_Y);
              target.style.height = `${newHeight}px`;

              const isBiggerInitialHeight =
                newHeight > TITLE_TEXT_AREA_INITIAL_HEIGHT;

              if (!isBiggerInitialHeight) {
                target.style.height = `${TITLE_TEXT_AREA_INITIAL_HEIGHT}px`;
              }
            }
          }}
        />
        <textarea
          placeholder="Start writing your notes here :)"
          className="h-full w-full resize-none whitespace-pre rounded-sm bg-transparent px-3 py-1 text-on-surface-variant outline-none transition-all focus:ring-4 focus:ring-high-contrast-inverse-primary focus:ring-offset-4 focus:ring-offset-surface"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </article>
    </>
  );
};

export default ExpendedNote;
