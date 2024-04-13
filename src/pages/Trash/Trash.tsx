import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectNotes from '@shared/lib/selectors/selectNotes';
import NotesList from '@shared/ui/NotesList';
import TextButton from '@shared/ui/TextButton';

const Trash = () => {
  const notes = useAppSelector(selectNotes);
  const trashedNotes = notes.filter(({ isTrashed }) => isTrashed);
  return (
    <NotesList
      preList={
        <article className="flex items-center justify-center gap-3 py-6 font-medium">
          <h4>Notes in Trash are deleted after 7 days.</h4>{' '}
          <TextButton>Empty Trash</TextButton>
        </article>
      }
      notes={trashedNotes}
    />
  );
};

export default Trash;
