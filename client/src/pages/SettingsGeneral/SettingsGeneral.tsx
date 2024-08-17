import { MouseEvent, useCallback, useState } from 'react';

import selectIsDarkMode from '@features/AppTheme/lib/selectors/selectIsDarkMode';
import { toggleDarkMode } from '@features/AppTheme/slice';
import SettingsItem from '@pages/SettingsGeneral/ui/SettingsItem';
import useAppDispatch from '@shared/lib/hooks/useAppDispatch';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import ConfirmDialog from '@shared/ui/ConfirmDialog';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import SegmentedButton from '@shared/ui/SegmentedButton/SegmentedContainer';
import Switch from '@shared/ui/Switch';
import { useTranslation } from 'react-i18next';

const SettingsGeneral = () => {
  const [days, setDays] = useState(7);
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleThemeSwitch = () => {
    dispatch(toggleDarkMode());
  };

  const handleChangeLanguage = useCallback(
    (lng: string) => {
      void i18n.changeLanguage(lng);
    },
    [i18n],
  );

  const handleToggleDialog = (e: MouseEvent) => {
    e.stopPropagation();
    setIsDialogOpen((prev) => !prev);
  };

  const handleClearData = () => {
    // TODO: delete all data
  };

  return (
    <>
      <ConfirmDialog
        setIsOpen={setIsDialogOpen}
        open={isDialogOpen}
        title="Clear data?"
        subtitle="Are you sure you want to permanently delete all your data."
        confirmText="Clear"
        onCancel={handleToggleDialog}
        onConfirm={handleClearData}
      />
      <div className="h-full w-full animate-fade-in-section overflow-y-scroll rounded-3xl bg-surface-container px-9 pb-10 pt-7">
        <div className="max-w-3xl space-y-10">
          <div>
            <h1 className="text-2xl text-on-surface">General</h1>
            <p className="mt-3 text-on-surface-variant">
              Configure app by your liking
            </p>
          </div>

          <SettingsItem
            title="Dark mode"
            subTitle="Adjust how the interface looks like">
            <Switch selected={isDarkMode} onChange={handleThemeSwitch} />
          </SettingsItem>

          <SettingsItem title="Language" subTitle="Change app language.">
            <SegmentedButton
              value={i18n.language}
              onChange={handleChangeLanguage}>
              <SegmentedButton.Button id="en">English</SegmentedButton.Button>
              <SegmentedButton.Button id="ru">Русский</SegmentedButton.Button>
            </SegmentedButton>
          </SettingsItem>

          <SettingsItem
            title="Trash auto-delete time"
            subTitle="Change the trash auto-delete timeout in days.">
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
              <p className="text-xs text-outline">Max 30 days*</p>
            </div>
          </SettingsItem>

          <SettingsItem
            title="Clear storage"
            subTitle="Remove all stored data."
            border={false}>
            <FilledTonalButton onClick={handleToggleDialog}>
              Clear data
            </FilledTonalButton>
          </SettingsItem>
        </div>
      </div>
    </>
  );
};

export default SettingsGeneral;
