import { zodResolver } from '@hookform/resolvers/zod';

import {
  useLoginMutation,
  useSignUpMutation,
} from '@/entities/session/api/authApi';
import { loggedIn } from '@/entities/session/model/slice';
import { cookie, routes } from '@shared/lib/const';
import runAsync from '@shared/lib/helpers/runAsync';
import useAppDispatch from '@shared/lib/hooks/useAppDispatch';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import AuthBlock from '@shared/ui/AuthBlock/AuthBlock';
import { inputStyles } from '@shared/ui/AuthBlock/lib/const';
import { signUpSchema } from '@shared/ui/AuthBlock/model';
import {
  TextInputProps,
  TSignUpSchema,
} from '@shared/ui/AuthBlock/model/types';
import Loader from '@shared/ui/Loader';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'all',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const snackbar = useSnackbar();

  const [signUp, { isLoading: signUpIsLoading }] = useSignUpMutation();
  const [login, { isLoading: loginIsLoading }] = useLoginMutation();

  const isLoading = signUpIsLoading || loginIsLoading;

  const onSubmit = async (fields: TSignUpSchema) => {
    const [signUpError, signUpResponse] = await runAsync(signUp(fields).unwrap);

    if (signUpError !== null) {
      snackbar.err(signUpError);
      return;
    }

    const loginData = { ...signUpResponse, password: fields.password };
    const [loginError, loginResponse] = await runAsync(login(loginData).unwrap);

    if (loginError !== null) {
      snackbar.err(loginError);
      return;
    }

    Cookies.set(cookie.ACCESS_TOKEN, loginResponse.access);
    Cookies.set(cookie.REFRESH_TOKEN, loginResponse.refresh);

    dispatch(loggedIn(loginResponse));
    navigate(`/${routes.NOTES}`);
  };

  if (isLoading) {
    return <Loader indeterminate />;
  }

  return (
    <AuthBlock isValid={isValid} isSignUp onSubmit={handleSubmit(onSubmit)}>
      <OutlinedTextField
        {...(register('username') as TextInputProps)}
        className="focus:ring-high-contrast-inverse-primary"
        label="Username"
        supportingText={errors.username && errors.username.message}
        style={{ ...inputStyles, viewTransitionName: 'username-field' }}
      />
      <OutlinedTextField
        {...(register('email') as TextInputProps)}
        className="focus:ring-high-contrast-inverse-primary"
        label="Email"
        supportingText={errors.email && errors.email.message}
      />
      <OutlinedTextField
        {...(register('password') as TextInputProps)}
        label="Password"
        supportingText={errors.password && errors.password.message}
        style={{ ...inputStyles, viewTransitionName: 'password-field' }}
      />
      <OutlinedTextField
        {...(register('password2') as TextInputProps)}
        style={inputStyles}
        label="Configrm password"
        supportingText={errors.password2 && errors.password2.message}
      />
    </AuthBlock>
  );
};

export default SignUp;
