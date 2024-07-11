import googleLogo from '@assets/google-logo.svg';
import { signInWithGoogleStyles } from '@shared/ui/AuthBlock/lib/const';
import Fab from '@shared/ui/Fab';
import { FC } from 'react';

type LeftSideProps = {
  actionText: string;
};

const LeftSide: FC<LeftSideProps> = ({ actionText }) => {
  return (
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
  );
};

export default LeftSide;
