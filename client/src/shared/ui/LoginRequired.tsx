import { FC, PropsWithChildren } from 'react';

import { routes } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import selectIsLogged from '@shared/lib/selectors/selectIsLogged';
import { Navigate } from 'react-router-dom';

const LoginRequired: FC<PropsWithChildren> = ({ children }) => {
  const isLogged = useAppSelector(selectIsLogged);

  if (!isLogged) {
    return <Navigate to={`/${routes.AUTH}/${routes.LOGIN}`} replace />;
  }

  return children;
};

export default LoginRequired;
