import { zodResolver } from '@hookform/resolvers/zod';

import { useLoginMutation } from '@/entities/session/api/authApi';
import AuthBlock from '@shared/ui/AuthBlock/AuthBlock';
import { inputStyles } from '@shared/ui/AuthBlock/lib/const';
import { loginSchema } from '@shared/ui/AuthBlock/model';
import {
  TextInputProps,
  TLoginSchema,
  TSignUpSchema,
} from '@shared/ui/AuthBlock/model/types';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = (fields: TLoginSchema) => {
    console.log(fields);
    login(fields);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthBlock isValid={isValid} isSignUp onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-1">
        <OutlinedTextField
          {...(register('username') as TextInputProps)}
          className="focus:ring-high-contrast-inverse-primary"
          style={inputStyles}
          label="Username"
          supportingText={errors.username && errors.username.message}
        />
      </div>
      <OutlinedTextField
        {...(register('password') as TextInputProps)}
        style={inputStyles}
        label="Password"
        supportingText={errors.password && errors.password.message}
      />
      <OutlinedTextField
        {...(register('confirmPassword') as TextInputProps)}
        style={inputStyles}
        label="Configrm password"
        supportingText={
          errors.confirmPassword && errors.confirmPassword.message
        }
      />
    </AuthBlock>
  );
};

export default SignUp;
