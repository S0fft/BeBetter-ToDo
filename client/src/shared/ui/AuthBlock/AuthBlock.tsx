import { FC, FormEvent } from 'react';

import googleLogo from '@assets/google-logo.svg';
import { routes } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import viewTransition from '@shared/lib/helpers/viewTransition';
import {
  inputStyles,
  signInStyles,
  signInWithGoogleStyles,
} from '@shared/ui/AuthBlock/lib/const';
import Fab from '@shared/ui/Fab';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import TextButton from '@shared/ui/TextButton';
import { Link, useNavigate } from 'react-router-dom';

type AuthBlockProps = {
  isSignUp?: boolean;
};

// TODO: break down into smaller components

const AuthBlock: FC<AuthBlockProps> = ({ isSignUp = false }) => {
  const navigate = useNavigate();
  const redirectPath = isSignUp
    ? `/${routes.AUTH}/${routes.LOGIN}`
    : `/${routes.AUTH}/${routes.SIGN_UP}`;
  const actionText = isSignUp ? 'Sign up' : 'Sign in';
  const redirectText = isSignUp
    ? 'Sign in to existed account'
    : 'Create account';

  const forgotEmailPath = `/${routes.AUTH}/${routes.LOGIN}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleRedirectClick = () => {
    viewTransition(() => navigate(redirectPath));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid h-full max-h-80 w-full max-w-5xl animate-fade-in-screen grid-cols-2 rounded-3xl bg-surface p-8 drop-shadow-md ease-emphasized-decelerate">
      <div className="grid">
        <div className="grid content-start gap-2">
          <h1 className="text-sm font-bold text-on-surface-variant">Todo</h1>
          <h2 className="text-3xl text-on-surface">{actionText}</h2>
          <p className="text-sm text-on-surface-variant">
            {actionText} to use the app
          </p>
        </div>

        <Fab
          style={{
            ...signInWithGoogleStyles,
            viewTransitionName: 'google-button',
          }}
          variant="secondary"
          className="self-end text-xl font-bold"
          label={`${actionText} with Google`}>
          <img slot="icon" src={googleLogo} alt="google logo" />
        </Fab>
      </div>
      <div className="grid gap-12">
        <div className="grid items-center gap-7">
          <div className="grid gap-1">
            <OutlinedTextField
              className="focus:ring-high-contrast-inverse-primary"
              style={inputStyles}
              label="Email"
            />
            <Link
              className={cn('text-xs text-primary-fixed-dim', {
                'pointer-events-none opacity-0': isSignUp,
              })}
              // TODO: add util like Node.js path.join
              to={forgotEmailPath}>
              Forgot email?
            </Link>
          </div>
          <OutlinedTextField style={inputStyles} label="Password" />
        </div>
        <div className="flex grid-cols-2 items-center justify-end gap-8">
          <TextButton
            style={{
              viewTransitionName: 'redirect-button',
            }}
            onClick={handleRedirectClick}>
            {redirectText}
          </TextButton>
          <FilledTonalButton
            style={{ ...signInStyles, viewTransitionName: 'action-button' }}>
            {actionText}
          </FilledTonalButton>
        </div>
      </div>
    </form>
  );
};

export default AuthBlock;
