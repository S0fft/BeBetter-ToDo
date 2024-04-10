import { mockedNotes, urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import Labels from '@shared/ui/Labels';

const Essentials = () => {
  const { readUrl } = useUrl();

  const activeNote = Number(readUrl(urlParams.NOTE_ID));
  const labels = mockedNotes?.[activeNote]?.labels;

  return (
    <article className="grid gap-1">
      <h2 className="text-xl font-medium">Caroline</h2>
      <h3>Created at 20.03.24</h3>
      <Labels className="mt-1 w-full self-start" labels={labels} />
    </article>
  );
};

export default Essentials;
