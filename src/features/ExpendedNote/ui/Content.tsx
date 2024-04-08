import { useState } from 'react';

import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import { mockedNotes } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';

const Content = () => {
  const selectedNote = useAppSelector(selectActiveNote);
  const { content: initialContent } = mockedNotes[selectedNote];

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
