import { useTranslation } from 'react-i18next';

const Notes = () => {
  const { t } = useTranslation();

  return <div>{t('title.notes')}</div>;
};

export default Notes;
