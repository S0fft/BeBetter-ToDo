import { useTranslation } from 'react-i18next';

const Notes = () => {
  const { t } = useTranslation();

  return <>{t('title.notes')}</>;
};

export default Notes;
