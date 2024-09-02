import { useNoteQuery } from '@/entities/note/api/noteApi';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import Loader from '@shared/ui/Loader';
import { format, isThisYear, isToday, isYesterday } from 'date-fns';
import { useTranslation } from 'react-i18next';

const EditedTime = () => {
  const { readUrl } = useUrl();
  const { t, i18n } = useTranslation();

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);
  const { data: note, isFetching } = useNoteQuery(activeNote, {
    skip: Number.isNaN(activeNote),
  });
  const isEn = i18n.language === 'en';

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
  const formattedDate = isEn
    ? format(new Date(updatedAt), 'h:mm a')
    : format(new Date(updatedAt), 'h:mm');

  let editedTime;

  if (isToday(updatedAt)) {
    editedTime = `${t('noteEditor.edited.today')}, ${formattedDate}`;
  }

  if (isYesterday(updatedAt)) {
    editedTime = `${t('noteEditor.edited.yesterday')}, ${formattedDate}`;
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
      {t('noteEditor.edited.title')} {editedTime}
    </time>
  );
};

export default EditedTime;
