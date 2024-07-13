import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectNotes from '@shared/lib/selectors/selectNotes';
import NotesList from '@shared/ui/NotesList';
import TextButton from '@shared/ui/TextButton';

const Trash = () => {
  const notes = useAppSelector(selectNotes);

  const trashedNotes = notes.filter(({ isTrashed }) => isTrashed);
  const isTrashNotEmpty = trashedNotes.length !== 0;

  return (
    <NotesList
      preList={
        <article className="absolute left-1/2 flex h-fit -translate-x-1/2 items-center justify-center gap-3 py-6 font-medium">
          <h4>Notes in Trash are deleted after 7 days.</h4>
          {isTrashNotEmpty && <TextButton>Empty Trash</TextButton>}
        </article>
      }
      notes={trashedNotes}
      emptyListIcon="delete"
      emptyListSubText="No notes in Trash"
    />
  );
};

export default Trash;
