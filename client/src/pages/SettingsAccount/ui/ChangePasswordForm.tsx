import { zodResolver } from '@hookform/resolvers/zod';

import InputBlock from '@pages/SettingsAccount/ui/InputBlock';
import { TextInputProps } from '@shared/ui/AuthBlock/model/types';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import { useForm } from 'react-hook-form';
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-6">
      <h2 className="mb-6 text-2xl text-on-surface">Update password</h2>
      <div className="grid gap-4">
        <InputBlock
          className="border-b border-b-outline-variant pb-6"
          name="Old password">
          <OutlinedTextField
            {...(register('oldPassword') as TextInputProps)}
            type="password"
            supportingText={errors.oldPassword && errors.oldPassword.message}
            placeholder="Your old password..."
            className="w-80"
          />
        </InputBlock>
        <InputBlock
          name="New password"
          className="border-b border-b-outline-variant pb-6">
          <OutlinedTextField
            {...(register('newPassword') as TextInputProps)}
            type="password"
            supportingText={errors.newPassword && errors.newPassword.message}
            placeholder="Your new password..."
            className="w-80"
          />
        </InputBlock>
        <InputBlock name="Confirm new password">
          <OutlinedTextField
            {...(register('confirmNewPassword') as TextInputProps)}
            type="password"
            supportingText={
              errors.confirmNewPassword && errors.confirmNewPassword.message
            }
            placeholder="Repeat your new password..."
            className="w-80"
          />
        </InputBlock>
        <FilledTonalButton
          disabled={isDisabled}
          className="w-fit justify-self-end">
          Save
        </FilledTonalButton>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
