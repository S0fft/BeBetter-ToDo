import { KeyboardEvent, useState } from 'react';

import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import { mockedNotes } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import Icon from '@shared/ui/Icon';
import IconButton from '@shared/ui/IconButton';
import Labels from '@shared/ui/Labels';
import UserAvatar from '@shared/ui/UserAvatar';

function hasScrollbar(textArea: HTMLTextAreaElement) {
  return textArea.clientHeight < textArea.scrollHeight;
}

const TITLE_TEXT_AREA_INITIAL_HEIGHT = 36;
const MAX_TITLE_LENGTH = 128;

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
      <header className="flex items-center gap-4 bg-surface-container pb-5 pl-7 pr-1 pt-6">
        <UserAvatar className="size-[76px]" />
        <article className="grid gap-1">
          <h2 className="text-xl font-medium">Caroline</h2>
          <h3>Created at 20.03.24</h3>
          <Labels className="mt-1 w-full self-start" labels={labels} />
        </article>
        <IconButton className="ml-auto">
          <Icon>dock_to_left</Icon>
        </IconButton>
      </header>
      <article className="relative grid h-full w-full grid-rows-[max-content_1fr] gap-5 bg-surface p-6 transition-all before:absolute before:left-8 before:top-1 before:flex before:size-fit before:items-center before:justify-center before:bg-surface before:px-2 before:text-sm before:text-on-surface-variant before:opacity-0 before:transition-all before:content-['Title'] has-[input:focus]:before:opacity-100">
        <textarea
          placeholder="Title your todo..."
          value={title}
          maxLength={MAX_TITLE_LENGTH}
          style={{ height: TITLE_TEXT_AREA_INITIAL_HEIGHT }}
          className="resize-none rounded-sm bg-transparent px-3 py-1 text-xl font-medium outline-none transition-[box-shadow] focus:ring-4 focus:ring-high-contrast-inverse-primary focus:ring-offset-4 focus:ring-offset-surface"
          onChange={(e) => {
            const { target } = e;
            setTitle(target.value);

            if (hasScrollbar(target)) {
              const newHeighPlusOneRow = `${Number.parseInt(getComputedStyle(target).height, 10) + TITLE_TEXT_AREA_INITIAL_HEIGHT}px`;
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
              const newHeight = targetHeight - TITLE_TEXT_AREA_INITIAL_HEIGHT;
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
