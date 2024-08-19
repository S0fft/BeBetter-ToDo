import { zodResolver } from '@hookform/resolvers/zod';

import { useProfileQuery } from '@/entities/user/api/userApi';
import InputBlock from '@pages/SettingsAccount/ui/InputBlock';
import { TextInputProps } from '@shared/ui/AuthBlock/model/types';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

const userDataSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  username: z.string().min(2),
  email: z.string().email(),
});

type TUserDataSchema = z.infer<typeof userDataSchema>;

const UserDataForm = () => {
  const { data: profile } = useProfileQuery();
  const { t } = useTranslation();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TUserDataSchema>({
    resolver: zodResolver(userDataSchema),
    mode: 'all',
  });

  const onSubmit = (data: TUserDataSchema) => {
    console.log(data);
  };

  const isDisabled = !isValid;
  const isErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-6 text-2xl text-on-surface">
        {t('settings.account.updateUserData.title')}
      </h2>
      <div className="grid gap-4">
        <InputBlock
          className="border-b border-b-outline-variant pb-6"
          name={t('settings.account.updateUserData.firstName.inputLabel')}>
          <OutlinedTextField
            {...(register('firstName') as TextInputProps)}
            error={isErrors}
            error-text={errors.firstName && errors.firstName.message}
            placeholder={t(
              'settings.account.updateUserData.firstName.inputPlaceholder',
            )}
            value="Caroline"
            className="w-80"
          />
        </InputBlock>
        <InputBlock
          className="border-b border-b-outline-variant pb-6"
          name={t('settings.account.updateUserData.lastName.inputLabel')}>
          <OutlinedTextField
            {...(register('lastName') as TextInputProps)}
            error={isErrors}
            error-text={errors.lastName && errors.lastName.message}
            placeholder={t(
              'settings.account.updateUserData.lastName.inputPlaceholder',
            )}
            value="Blacke"
            className="w-80"
          />
        </InputBlock>
        <InputBlock
          className="border-b border-b-outline-variant pb-6"
          name={t('settings.account.updateUserData.email.inputLabel')}>
          <OutlinedTextField
            {...(register('email') as TextInputProps)}
            error={isErrors}
            error-text={errors.email && errors.email.message}
            placeholder={t(
              'settings.account.updateUserData.email.inputPlaceholder',
            )}
            value={profile?.email ?? ''}
            className="w-80"
          />
        </InputBlock>
        <InputBlock
          name={t('settings.account.updateUserData.username.inputLabel')}>
          <OutlinedTextField
            {...(register('username') as TextInputProps)}
            error={isErrors}
            error-text={errors.username && errors.username.message}
            placeholder={t(
              'settings.account.updateUserData.username.inputPlaceholder',
            )}
            value={profile?.username ?? ''}
            className="w-80"
          />
        </InputBlock>
        <FilledTonalButton
          disabled={isDisabled}
          type="submit"
          className="w-fit justify-self-end">
          {t('settings.account.save')}
        </FilledTonalButton>
      </div>
    </form>
  );
};

export default UserDataForm;
