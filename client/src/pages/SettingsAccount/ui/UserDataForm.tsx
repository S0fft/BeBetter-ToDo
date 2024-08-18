import { zodResolver } from '@hookform/resolvers/zod';

import { useProfileQuery } from '@/entities/user/api/userApi';
import InputBlock from '@pages/SettingsAccount/ui/InputBlock';
import { TextInputProps } from '@shared/ui/AuthBlock/model/types';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import { useForm } from 'react-hook-form';
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
      <h2 className="mb-6 text-2xl text-on-surface">Update User Data</h2>
      <div className="grid gap-4">
        <InputBlock
          className="border-b border-b-outline-variant pb-6"
          name="First name">
          <OutlinedTextField
            {...(register('firstName') as TextInputProps)}
            error={isErrors}
            error-text={errors.firstName && errors.firstName.message}
            placeholder="Your first name..."
            value="Caroline"
            className="w-80"
          />
        </InputBlock>
        <InputBlock
          className="border-b border-b-outline-variant pb-6"
          name="Last name">
          <OutlinedTextField
            {...(register('lastName') as TextInputProps)}
            error={isErrors}
            error-text={errors.lastName && errors.lastName.message}
            placeholder="Your last name..."
            value="Blacke"
            className="w-80"
          />
        </InputBlock>
        <InputBlock
          className="border-b border-b-outline-variant pb-6"
          name="Email">
          <OutlinedTextField
            {...(register('email') as TextInputProps)}
            error={isErrors}
            error-text={errors.email && errors.email.message}
            placeholder="Your email..."
            value={profile?.email ?? ''}
            className="w-80"
          />
        </InputBlock>
        <InputBlock name="Username">
          <OutlinedTextField
            {...(register('username') as TextInputProps)}
            error={isErrors}
            error-text={errors.username && errors.username.message}
            placeholder="Your username..."
            value={profile?.username ?? ''}
            className="w-80"
          />
        </InputBlock>
        <FilledTonalButton
          disabled={isDisabled}
          type="submit"
          className="w-fit justify-self-end">
          Save
        </FilledTonalButton>
      </div>
    </form>
  );
};

export default UserDataForm;
