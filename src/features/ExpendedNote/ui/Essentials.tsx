import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import { mockedNotes } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import Labels from '@shared/ui/Labels';

const Essentials = () => {
  const selectedNote = useAppSelector(selectActiveNote);
  const { labels } = mockedNotes[selectedNote];

  return (
    <article className="grid gap-1">
      <h2 className="text-xl font-medium">Caroline</h2>
      <h3>Created at 20.03.24</h3>
      <Labels className="mt-1 w-full self-start" labels={labels} />
    </article>
  );
};

export default Essentials;
