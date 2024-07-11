import { zodResolver } from '@hookform/resolvers/zod';

import { routes } from '@shared/lib/const';
import AuthBlock from '@shared/ui/AuthBlock/AuthBlock';
import { inputStyles } from '@shared/ui/AuthBlock/lib/const';
import { loginSchema } from '@shared/ui/AuthBlock/model';
import { TextInputProps, TLoginSchema } from '@shared/ui/AuthBlock/model/types';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  console.log(errors);

  const forgotEmailPath = `/${routes.AUTH}/${routes.LOGIN}`;

  const onSubmit = (fields: TLoginSchema) => {
    console.log(fields);
  };

  return (
    <AuthBlock isValid={isValid} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-1">
        <OutlinedTextField
          {...(register('email') as TextInputProps)}
          className="focus:ring-high-contrast-inverse-primary"
          style={inputStyles}
          label="Email"
          supportingText={errors.email && errors.email.message}
        />
        <Link
          className="w-fit text-xs text-primary-fixed-dim"
          // TODO: add util like Node.js path.join
          to={forgotEmailPath}>
          Forgot email?
        </Link>
      </div>
      <OutlinedTextField
        {...(register('password') as TextInputProps)}
        style={inputStyles}
        label="Password"
        supportingText={errors.password && errors.password.message}
      />
    </AuthBlock>
  );
};

export default Login;
