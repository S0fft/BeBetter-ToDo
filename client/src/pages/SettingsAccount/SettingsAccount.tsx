import { useProfileQuery } from '@/entities/user/api/userApi';
import InputBlock from '@pages/SettingsAccount/ui/InputBlock';
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

      <div className="gap-6">
        <h2 className="mb-6 text-2xl text-on-surface">Update User Data</h2>
        <div className="grid gap-4">
          <InputBlock
            className="border-b border-b-outline-variant pb-6"
            name="First name"
            placeholder="Your first name..."
            value="Caroline"
          />
          <InputBlock
            className="border-b border-b-outline-variant pb-6"
            name="Last name"
            placeholder="Your last name..."
            value="Blacke"
          />
          <InputBlock
            className="border-b border-b-outline-variant pb-6"
            name="Email"
            placeholder="Your email..."
            value={profile?.email}
          />
          <InputBlock
            name="Username"
            placeholder="Your username..."
            value={profile?.username}
          />
          <FilledTonalButton className="w-fit justify-self-end">
            Save
          </FilledTonalButton>
        </div>
      </div>

      <div className="gap-6">
        <h2 className="mb-6 text-2xl text-on-surface">Update password</h2>
        <div className="grid gap-4">
          <InputBlock
            type="password"
            className="border-b border-b-outline-variant pb-6"
            name="Old password"
            placeholder="Your old password..."
          />
          <InputBlock
            type="password"
            className="border-b border-b-outline-variant pb-6"
            name="New password"
            placeholder="Your new password..."
          />
          <InputBlock
            type="password"
            className="border-b border-b-outline-variant pb-6"
            name="Confirm new password"
            placeholder="Repeat your new password..."
          />
          <FilledTonalButton className="w-fit justify-self-end">
            Save
          </FilledTonalButton>
        </div>
      </div>
    </>
  );
};

export default SettingsAccount;
