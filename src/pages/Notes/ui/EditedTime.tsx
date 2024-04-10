import { ONE_DAY, ONE_YEAR } from '@pages/Notes/lib/const';
import { mockedNotes, urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import { differenceInCalendarDays, format } from 'date-fns';

const EditedTime = () => {
  const { readUrl } = useUrl();

  const activeNote = Number(readUrl(urlParams.NOTE_ID));
  const createdAt = mockedNotes?.[activeNote]?.createdAt;

  const diff = differenceInCalendarDays(new Date(), new Date(createdAt));

  // TODO: change mocked time to real
  let editedTime = 'today 4:03 PM';

  if (diff === ONE_DAY) {
    editedTime = 'yesterday 3:30 PM';
  }

  if (diff > ONE_DAY) {
    editedTime = format(new Date(createdAt), 'MMM dd');
  }

  if (diff > ONE_YEAR) {
    editedTime = format(new Date(createdAt), 'MMM dd, yyyy');
  }

  return (
    <p className="ml-auto text-sm text-on-surface-variant">
      Edited {editedTime}
    </p>
  );
};

export default EditedTime;
