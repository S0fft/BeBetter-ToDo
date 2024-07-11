import { FC, PropsWithChildren } from 'react';

import { routes } from '@shared/lib/const';
import viewTransition from '@shared/lib/helpers/viewTransition';
import { signInStyles } from '@shared/ui/AuthBlock/lib/const';
import FilledTonalButton from '@shared/ui/FilledTonalButton';
import TextButton from '@shared/ui/TextButton';
import { useNavigate } from 'react-router-dom';

type RightSideProps = PropsWithChildren & {
  isSignUp: boolean;
  actionText: string;
};

const RightSide: FC<RightSideProps> = ({ children, isSignUp, actionText }) => {
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
      <div className="grid items-center gap-7">{children}</div>
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
