import { useState } from 'react';

import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';

import { mockedNotes } from '../../../../dev-data';

const Content = () => {
  const { readUrl } = useUrl();

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);
  const initialContent = mockedNotes?.[activeNote]?.content;

  const [content, setContent] = useState(initialContent);

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
