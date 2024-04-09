import { ONE_DAY, ONE_YEAR } from '@pages/Notes/lib/const';
import selectActiveNote from '@pages/Notes/lib/selectors/selectActiveNote';
import { mockedNotes } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import { differenceInCalendarDays, format } from 'date-fns';

const EditedTime = () => {
  const selectedNote = useAppSelector(selectActiveNote);
  const createdAt = mockedNotes?.[selectedNote]?.createdAt;

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
