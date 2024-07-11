import { FC, FormEventHandler, PropsWithChildren } from 'react';

import LeftSide from '@shared/ui/AuthBlock/ui/LeftSide';
import RightSide from '@shared/ui/AuthBlock/ui/RightSide';

export type AuthBlockProps = PropsWithChildren & {
  isSignUp?: boolean;
  isValid: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const AuthBlock: FC<AuthBlockProps> = ({
  isSignUp = false,
  isValid,
  onSubmit,
  children,
}) => {
  const actionText = isSignUp ? 'Sign up' : 'Sign in';

  return (
    <form
      style={{ viewTransitionName: 'auth-block' }}
      onSubmit={onSubmit}
      className="grid w-full max-w-5xl animate-fade-in-section grid-cols-2 rounded-3xl bg-surface p-8 drop-shadow-md ease-emphasized-decelerate">
      <LeftSide actionText={actionText} />
      <RightSide
        isDisabled={!isValid}
        actionText={actionText}
        isSignUp={isSignUp}>
        {children}
      </RightSide>
    </form>
  );
};

export default AuthBlock;
