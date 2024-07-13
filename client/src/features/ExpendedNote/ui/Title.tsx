import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

import {
  useNoteQuery,
  useUpdateNoteMutation,
} from '@/entities/note/api/noteApi';
import {
  DEBOUNCE_TIME,
  MAX_TITLE_HEIGHT_PX,
  MAX_TITLE_LENGTH,
  TITLE_PADDING_Y,
  TITLE_TEXT_AREA_INITIAL_HEIGHT,
} from '@features/ExpendedNote/lib/const';
import { BACKSPACE_KEY, urlParams } from '@shared/lib/const';
import elementHasScrollbar from '@shared/lib/helpers/elementHasScroll';
import useUrl from '@shared/lib/hooks/useUrl';
import { useDebounce } from 'use-debounce';

const Title = () => {
  const { readUrl } = useUrl();

  const activeNoteId = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);

  const { data: activeNote } = useNoteQuery(activeNoteId);
  const [updateNote] = useUpdateNoteMutation();
  const [title, setTitle] = useState(activeNote?.title);
  const [titleValue] = useDebounce(title, DEBOUNCE_TIME);

  useEffect(() => {
    if (activeNote?.title) {
      setTitle(activeNote.title);
    }
  }, [activeNote?.title]);

  useEffect(() => {
    if (activeNoteId && titleValue && titleValue !== activeNote?.title) {
      updateNote({ id: activeNoteId, body: { title: titleValue } });
    }
  }, [titleValue]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;
    const isMaxHeightExceeded = target.clientHeight > MAX_TITLE_HEIGHT_PX;

    if (isMaxHeightExceeded) return;

    setTitle(target.value);

    if (!elementHasScrollbar(target)) return;

    const newHeighPlusOneRow = `${Number.parseInt(getComputedStyle(target).height, 10) + (TITLE_TEXT_AREA_INITIAL_HEIGHT - TITLE_PADDING_Y)}px`;
    target.style.height = newHeighPlusOneRow;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== BACKSPACE_KEY) return;

    const target = e.target as HTMLTextAreaElement;

    const targetHeight = Number.parseInt(getComputedStyle(target).height, 10);
    const newHeight =
      targetHeight - (TITLE_TEXT_AREA_INITIAL_HEIGHT - TITLE_PADDING_Y);
    target.style.height = `${newHeight}px`;

    const isBiggerInitialHeight = newHeight > TITLE_TEXT_AREA_INITIAL_HEIGHT;
    if (!isBiggerInitialHeight)
      target.style.height = `${TITLE_TEXT_AREA_INITIAL_HEIGHT}px`;
  };

  return (
    <textarea
      placeholder="Title your todo..."
      value={title}
      maxLength={MAX_TITLE_LENGTH}
      style={{ height: TITLE_TEXT_AREA_INITIAL_HEIGHT }}
      className="origin-left animate-fade-in-standard resize-none overflow-hidden rounded-sm bg-transparent px-3 py-1 text-xl font-medium outline-none transition-shadow focus:ring-4 focus:ring-high-contrast-inverse-primary focus:ring-offset-4 focus:ring-offset-surface"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Title;
