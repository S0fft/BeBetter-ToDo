import ChangePasswordForm from '@pages/SettingsAccount/ui/ChangePasswordForm';
import UploadImageForm from '@pages/SettingsAccount/ui/UploadImageForm';
import UserDataForm from '@pages/SettingsAccount/ui/UserDataForm';
import { useTranslation } from 'react-i18next';

const SettingsAccount = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1 className="text-2xl text-on-surface">
          {t('settings.account.title')}
        </h1>
        <p className="mt-3 text-on-surface-variant">
          {t('settings.account.subTitle')}
        </p>
      </div>

      <UploadImageForm />
      <UserDataForm />
      <ChangePasswordForm />
    </>
  );
};

export default SettingsAccount;
