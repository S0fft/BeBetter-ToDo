import { useEffect, useState } from 'react';

import { localStorageKeys } from '@shared/lib/const';
import { LocalStorageKeys } from '@shared/types';

/**
 * Hook to create a state that persists in the local storage.
 *
 * @param {string} initialState - The initial state value.
 * @param {string} key - The key to store the state in the local storage.
 * @return {[string, Dispatch<SetStateAction<string>>]} - An array containing the state value and a function to update the state.
 */
function useLocalStorageState<TValue>(
  initialState: TValue,
  key: LocalStorageKeys,
) {
  const [value, setValue] = useState<TValue>(initialState);

  useEffect(() => {
    const storedValue = localStorage.getItem(localStorageKeys[key]);
    if (storedValue) setValue(JSON.parse(storedValue));
  }, [initialState, key]);

  useEffect(() => {
    if (value !== null)
      localStorage.setItem(localStorageKeys[key], JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

export default useLocalStorageState;
