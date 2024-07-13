import { useEffect, useState } from 'react';

import {
  useNoteQuery,
  useUpdateNoteMutation,
} from '@/entities/note/api/noteApi';
import { DEBOUNCE_TIME } from '@features/ExpendedNote/lib/const';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import { useDebounce } from 'use-debounce';

const Content = () => {
  const { readUrl } = useUrl();

  const activeNoteId = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);

  const { data: activeNote } = useNoteQuery(activeNoteId);
  const [updateNote] = useUpdateNoteMutation();
  const [content, setContent] = useState(activeNote?.content ?? '');
  const [contentValue] = useDebounce(content, DEBOUNCE_TIME);

  useEffect(() => {
    updateNote({ id: activeNoteId, body: { content: contentValue } });
  }, [activeNoteId, contentValue, updateNote]);

  return (
    <textarea
      placeholder="Start writing your notes here :)"
      className="animation-delay-200 h-full w-full origin-top-left animate-fade-in-standard resize-none whitespace-pre rounded-sm bg-transparent px-3 py-1 text-on-surface-variant outline-none transition-all focus:ring-4 focus:ring-high-contrast-inverse-primary focus:ring-offset-4 focus:ring-offset-surface"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
};

export default Content;
