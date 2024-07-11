import { zodResolver } from '@hookform/resolvers/zod';

import { useLoginMutation } from '@/entities/session/api/authApi';
import { loggedIn } from '@/entities/session/model/slice';
import { cookie, routes } from '@shared/lib/const';
import isApiError from '@shared/lib/helpers/isApiError';
import useAppDispatch from '@shared/lib/hooks/useAppDispatch';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import AuthBlock from '@shared/ui/AuthBlock/AuthBlock';
import { inputStyles } from '@shared/ui/AuthBlock/lib/const';
import { loginSchema } from '@shared/ui/AuthBlock/model';
import { TextInputProps, TLoginSchema } from '@shared/ui/AuthBlock/model/types';
import Loader from '@shared/ui/Loader';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const snackbar = useSnackbar();
  const [login, { isLoading }] = useLoginMutation();

  const forgotUsernamePath = `/${routes.AUTH}/${routes.LOGIN}`;

  const onSubmit = async (fields: TLoginSchema) => {
    try {
      const data = await login(fields).unwrap();

      Cookies.set(cookie.ACCESS_TOKEN, data.access);
      Cookies.set(cookie.REFRESH_TOKEN, data.access);

      dispatch(loggedIn(data));
      navigate(`/${routes.NOTES}`);
    } catch (e) {
      if (!isApiError(e)) return;

      const errorMessage = e.data.detail;
      snackbar(errorMessage);
    } finally {
      reset();
    }
  };

  if (isLoading) {
    return <Loader indeterminate color="red" />;
  }

  return (
    <AuthBlock isValid={isValid} onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-1">
        <OutlinedTextField
          {...(register('username') as TextInputProps)}
          className="focus:ring-high-contrast-inverse-primary"
          style={{ ...inputStyles, viewTransitionName: 'username-field' }}
          label="Username"
          supportingText={errors.username && errors.username.message}
        />
        <Link
          className="w-fit text-xs text-primary-fixed-dim"
          // TODO: add util like Node.js path.join
          to={forgotUsernamePath}>
          Forgot username?
        </Link>
      </div>
      <OutlinedTextField
        {...(register('password') as TextInputProps)}
        label="Password"
        supportingText={errors.password && errors.password.message}
        style={{ ...inputStyles, viewTransitionName: 'password-field' }}
      />
    </AuthBlock>
  );
};

export default Login;
