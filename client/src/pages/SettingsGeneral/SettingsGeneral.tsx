import { useCallback, useState } from 'react';

import selectIsDarkMode from '@features/AppTheme/lib/selectors/selectIsDarkMode';
import { toggleDarkMode } from '@features/AppTheme/slice';
import SettingsItem from '@pages/SettingsGeneral/ui/SettingsItem';
import useAppDispatch from '@shared/lib/hooks/useAppDispatch';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import ConfirmDialog from '@shared/ui/ConfirmDialog';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import SegmentedButton from '@shared/ui/SegmentedButton/SegmentedButton';
import Switch from '@shared/ui/Switch';
import { useTranslation } from 'react-i18next';

const SettingsGeneral = () => {
  const [days, setDays] = useState(7);
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const snackbar = useSnackbar();

  const handleThemeSwitch = () => {
    dispatch(toggleDarkMode());
  };

  const handleChangeLanguage = useCallback(
    (lng: string) => {
      void i18n.changeLanguage(lng);
    },
    [i18n],
  );

  const handleToggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  const handleClearData = () => {
    // TODO: delete all data
  };

  const handleDialogConfirm = () => {
    snackbar.undo(t(`snackbar.cleared`), handleClearData);
  };

  return (
    <>
      <ConfirmDialog
        setIsOpen={setIsDialogOpen}
        open={isDialogOpen}
        title={t('settings.general.clearStorage.modal.title')}
        subtitle={t('settings.general.clearStorage.modal.subtitle')}
        confirmText={t('settings.general.clearStorage.modal.confirmText')}
        cancelText={t('settings.general.clearStorage.modal.cancelText')}
        onConfirm={handleDialogConfirm}
      />
      <div>
        <h1 className="text-2xl text-on-surface">
          {t('settings.general.title')}
        </h1>
        <p className="mt-3 text-on-surface-variant">
          {t('settings.general.subTitle')}
        </p>
      </div>

      <SettingsItem
        title={t('settings.general.darkMode.title')}
        subTitle={t('settings.general.darkMode.subTitle')}>
        <Switch selected={isDarkMode} onChange={handleThemeSwitch} />
      </SettingsItem>

      <SettingsItem
        title={t('settings.general.language.title')}
        subTitle={t('settings.general.language.subTitle')}>
        <SegmentedButton value={i18n.language} onChange={handleChangeLanguage}>
          <SegmentedButton.Button id="en">English</SegmentedButton.Button>
          <SegmentedButton.Button id="ru">Русский</SegmentedButton.Button>
        </SegmentedButton>
      </SettingsItem>

      <SettingsItem
        title={t('settings.general.trashAutoDeleteTime.title')}
        subTitle={t('settings.general.trashAutoDeleteTime.subTitle')}>
        <div className="grid items-center gap-2">
          <input
            className="h-14 w-20 rounded border border-outline bg-transparent pl-4 text-on-surface"
            type="number"
            min={0}
            max={30}
            value={days}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 0 && value <= 30) {
                setDays(value);
              }
            }}
          />
          <p className="text-xs text-outline">
            {t('settings.general.trashAutoDeleteTime.hint')}
          </p>
        </div>
      </SettingsItem>

      <SettingsItem
        title={t('settings.general.clearStorage.title')}
        subTitle={t('settings.general.clearStorage.subTitle')}
        border={false}>
        <FilledTonalButton onClick={handleToggleDialog}>
          {t('settings.general.clearStorage.clearData')}
        </FilledTonalButton>
      </SettingsItem>
    </>
  );
};

export default SettingsGeneral;
