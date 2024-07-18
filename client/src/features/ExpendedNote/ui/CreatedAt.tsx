import { useNoteQuery } from '@/entities/note/api/noteApi';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import { format } from 'date-fns';

const CreatedAt = () => {
  const { readUrl } = useUrl();
  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);

  const { data: note } = useNoteQuery(activeNote, {
    skip: Number.isNaN(activeNote),
  });

  const createdAt = note?.time_created;

  if (!createdAt) {
    return null;
  }

  const formattedDate = format(new Date(createdAt), 'dd.MM.yy');

  return <h3>Created at {formattedDate}</h3>;
};

export default CreatedAt;
