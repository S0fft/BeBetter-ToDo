import { useNoteQuery } from '@/entities/note/api/noteApi';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import Loader from '@shared/ui/Loader';
import { format, isThisYear, isToday, isYesterday } from 'date-fns';

const EditedTime = () => {
  const { readUrl } = useUrl();

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);
  const { data: note, isFetching } = useNoteQuery(activeNote, {
    skip: Number.isNaN(activeNote),
  });

  if (isFetching || !note) {
    return (
      <p key="loader" className="ml-auto animate-fade-in-screen">
        <Loader
          style={{
            '--md-circular-progress-size': '24px',
          }}
          indeterminate
        />
      </p>
    );
  }

  const updatedAt = note?.time_updated;
  const formattedDate = format(new Date(updatedAt), 'h:mm a');

  let editedTime;

  if (isToday(updatedAt)) {
    editedTime = `today, ${formattedDate}`;
  }

  if (isYesterday(updatedAt)) {
    editedTime = `yesterday, ${formattedDate}`;
  }

  if (isThisYear(updatedAt) && !isYesterday(updatedAt) && !isToday(updatedAt)) {
    editedTime = format(new Date(updatedAt), 'MMM dd');
  }

  if (
    !isThisYear(updatedAt) &&
    !isYesterday(updatedAt) &&
    !isToday(updatedAt)
  ) {
    editedTime = format(new Date(updatedAt), 'MMM dd, yyyy');
  }

  return (
    <time
      dateTime={updatedAt}
      className="ml-auto animate-fade-in-screen text-sm text-on-surface-variant ease-standard-decelerate">
      Edited {editedTime}
    </time>
  );
};

export default EditedTime;
