import { useEffect } from 'react';

import router from '@/router';
import { DARK_MODE_CLASS, LIGHT_MODE_CLASS } from '@features/AppTheme';
import selectIsDarkMode from '@features/AppTheme/lib/selectors/selectIsDarkMode';
import { localStorageKeys } from '@shared/lib/const';
import useAppSelector from '@shared/lib/hooks/useAppSelector';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  const isDarkMode = useAppSelector(selectIsDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add(DARK_MODE_CLASS);
      document.documentElement.classList.remove(LIGHT_MODE_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_MODE_CLASS);
      document.documentElement.classList.add(LIGHT_MODE_CLASS);
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem(localStorageKeys.IS_DARK_MODE, isDarkMode.toString());
  }, [isDarkMode]);

  return <RouterProvider router={router} />;
};

export default App;
