import CreatedAt from '@features/ExpandedNote/ui/CreatedAt';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import Labels from '@shared/ui/Labels';
import Username from '@shared/ui/Username';

import { mockedNotes } from '../../../../dev-data';

const Essentials = () => {
  const { readUrl } = useUrl();

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);
  // TODO: make real labels
  const labels = mockedNotes?.[activeNote]?.labels;

  return (
    <article className="grid gap-1">
      <Username className="text-xl font-medium" />
      <CreatedAt />
      <Labels className="mt-1 w-full self-start" labels={labels} />
    </article>
  );
};

export default Essentials;
