import { FC, FormEvent } from 'react';

import { routes } from '@shared/lib/const';
import { inputStyles } from '@shared/ui/AuthBlock/lib/const';
import LeftSide from '@shared/ui/AuthBlock/ui/LeftSide';
import RightSide from '@shared/ui/AuthBlock/ui/RightSide';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import { Link } from 'react-router-dom';

type AuthBlockProps = {
  isSignUp?: boolean;
};

const AuthBlock: FC<AuthBlockProps> = ({ isSignUp = false }) => {
  const actionText = isSignUp ? 'Sign up' : 'Sign in';
  const forgotEmailPath = `/${routes.AUTH}/${routes.LOGIN}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      style={{ viewTransitionName: 'auth-block' }}
      onSubmit={handleSubmit}
      className="grid w-full max-w-5xl animate-fade-in-section grid-cols-2 rounded-3xl bg-surface p-8 drop-shadow-md ease-emphasized-decelerate">
      <LeftSide actionText={actionText} />
      <RightSide actionText={actionText} isSignUp={isSignUp}>
        <div className="grid gap-1">
          <OutlinedTextField
            className="focus:ring-high-contrast-inverse-primary"
            style={inputStyles}
            label="Email"
          />
          {!isSignUp && (
            <Link
              className="w-fit text-xs text-primary-fixed-dim"
              // TODO: add util like Node.js path.join
              to={forgotEmailPath}>
              Forgot email?
            </Link>
          )}
        </div>
        <OutlinedTextField style={inputStyles} label="Password" />
        {isSignUp && (
          <OutlinedTextField style={inputStyles} label="Confirm password" />
        )}
      </RightSide>
    </form>
  );
};

export default AuthBlock;
