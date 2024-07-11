import { FC } from 'react';

import { routes } from '@shared/lib/const';
import cn from '@shared/lib/helpers/cn';
import viewTransition from '@shared/lib/helpers/viewTransition';
import { inputStyles, signInStyles } from '@shared/ui/AuthBlock/lib/const';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import OutlinedTextField from '@shared/ui/OutlinedTextField';
import TextButton from '@shared/ui/TextButton';
import { Link, useNavigate } from 'react-router-dom';

type RightSideProps = {
  forgotEmailPath: string;
  isSignUp: boolean;
  actionText: string;
};

const RightSide: FC<RightSideProps> = ({
  forgotEmailPath,
  isSignUp,
  actionText,
}) => {
  const navigate = useNavigate();

  const redirectPath = isSignUp
    ? `/${routes.AUTH}/${routes.LOGIN}`
    : `/${routes.AUTH}/${routes.SIGN_UP}`;
  const redirectText = isSignUp
    ? 'Sign in to existed account'
    : 'Create account';

  const handleRedirectClick = () => {
    viewTransition(() => navigate(redirectPath));
  };

  return (
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
  );
};

export default RightSide;
