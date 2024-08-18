import { useProfileQuery } from '@/entities/user/api/userApi';
import ChangePasswordForm from '@pages/SettingsAccount/ui/ChangePasswordForm';
import UserDataForm from '@pages/SettingsAccount/ui/UserDataForm';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import UserAvatar from '@shared/ui/UserAvatar';

const SettingsAccount = () => {
  const { data: profile } = useProfileQuery();

  const displayName = profile?.first_name
    ? `${profile?.first_name} ${profile?.last_name}`
    : profile?.username;

  return (
    <>
      <div>
        <h1 className="text-2xl text-on-surface">Account</h1>
        <p className="mt-3 text-on-surface-variant">
          Here you can edit public information about yourself
        </p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <UserAvatar className="h-16 w-16" />
          <div className="h-fit items-center space-y-1">
            <div className="text-on-surface">{displayName}</div>
            <div className="text-on-surface-variant">{profile?.email}</div>
          </div>
        </div>
        <FilledTonalButton>Change image</FilledTonalButton>
      </div>
      <UserDataForm />
      <ChangePasswordForm />
    </>
  );
};

export default SettingsAccount;
