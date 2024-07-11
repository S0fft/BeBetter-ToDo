import { FC, FormEvent } from 'react';

import { routes } from '@shared/lib/const';
import LeftSide from '@shared/ui/AuthBlock/ui/LeftSide';
import RightSide from '@shared/ui/AuthBlock/ui/RightSide';

type AuthBlockProps = {
  isSignUp?: boolean;
};

// TODO: break down into smaller components

const AuthBlock: FC<AuthBlockProps> = ({ isSignUp = false }) => {
  const actionText = isSignUp ? 'Sign up' : 'Sign in';
  const forgotEmailPath = `/${routes.AUTH}/${routes.LOGIN}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid h-full max-h-80 w-full max-w-5xl animate-fade-in-screen grid-cols-2 rounded-3xl bg-surface p-8 drop-shadow-md ease-emphasized-decelerate">
      <LeftSide actionText={actionText} />
      <RightSide
        actionText={actionText}
        isSignUp={isSignUp}
        forgotEmailPath={forgotEmailPath}
      />
    </form>
  );
};

export default AuthBlock;
