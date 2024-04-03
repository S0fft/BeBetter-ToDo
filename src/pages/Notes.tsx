import selectIsDarkMode from '@features/AppTheme/lib/selectors/selectIsDarkMode';
import { toggleDarkMode } from '@features/AppTheme/slice';
import useAppDispatch from '@shared/lib/hooks/useAppDispatch';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import Switch from '@shared/ui/Switch';
import { useTranslation } from 'react-i18next';

const Notes = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectIsDarkMode);

  const handleThemeSwitch = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div>
      {t('title.notes')}
      <Switch selected={isDarkMode} onChange={handleThemeSwitch} />
    </div>
  );
};

export default Notes;
