import { zodResolver } from '@hookform/resolvers/zod';

import InputBlock from '@pages/SettingsAccount/ui/InputBlock';
import { TextInputProps } from '@shared/ui/AuthBlock/model/types';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmNewPassword: z.string().min(8),
  })
  .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
    if (newPassword !== confirmNewPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmNewPassword'],
      });
    }
  });

type TChangePasswordSchema = z.infer<typeof changePasswordSchema>;

const ChangePasswordForm = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'all',
  });

  const onSubmit = (data: TChangePasswordSchema) => {
    console.log(data);
  };

  const isDisabled = !isValid;
  const isErrors = Object.keys(errors).length > 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-6">
      <h2 className="mb-6 text-2xl text-on-surface">
        {t('settings.account.updatePassword.title')}
      </h2>
      <div className="grid gap-4">
        <InputBlock
          className="border-b border-b-outline-variant pb-6"
          name={t('settings.account.updatePassword.oldPassword.inputLabel')}>
          <OutlinedTextField
            {...(register('oldPassword') as TextInputProps)}
            type="password"
            error={isErrors}
            error-text={errors.oldPassword ? errors.oldPassword.message : ' '}
            placeholder={t(
              'settings.account.updatePassword.oldPassword.inputPlaceholder',
            )}
            className="w-80"
          />
        </InputBlock>
        <InputBlock
          name={t('settings.account.updatePassword.newPassword.inputLabel')}
          className="border-b border-b-outline-variant pb-6">
          <OutlinedTextField
            {...(register('newPassword') as TextInputProps)}
            type="password"
            error={isErrors}
            error-text={errors.newPassword && errors.newPassword.message}
            placeholder={t(
              'settings.account.updatePassword.newPassword.inputPlaceholder',
            )}
            className="w-80"
          />
        </InputBlock>
        <InputBlock
          name={t(
            'settings.account.updatePassword.confirmNewPassword.inputLabel',
          )}>
          <OutlinedTextField
            {...(register('confirmNewPassword') as TextInputProps)}
            type="password"
            error={isErrors}
            error-text={
              errors.confirmNewPassword && errors.confirmNewPassword.message
            }
            placeholder={t(
              'settings.account.updatePassword.confirmNewPassword.inputPlaceholder',
            )}
            className="w-80"
          />
        </InputBlock>
        <FilledTonalButton
          disabled={isDisabled}
          className="w-fit justify-self-end">
          {t('settings.account.save')}
        </FilledTonalButton>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
