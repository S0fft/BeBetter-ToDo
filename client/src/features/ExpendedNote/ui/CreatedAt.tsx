import { useNoteQuery } from '@/entities/note/api/noteApi';
import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const CreatedAt = () => {
  const { readUrl } = useUrl();
  const { t } = useTranslation();

  const activeNote = Number.parseInt(readUrl(urlParams.NOTE_ID), 10);

  const { data: note } = useNoteQuery(activeNote, {
    skip: Number.isNaN(activeNote),
  });

  const createdAt = note?.time_created;

  if (!createdAt) {
    return null;
  }

  const formattedDate = format(new Date(createdAt), 'dd.MM.yy');

  return (
    <h3>
      {t('noteEditor.cratedAt')} {formattedDate}
    </h3>
  );
};

export default CreatedAt;
