import { useRef } from 'react';

import { UNKNOWN_ERROR_MESSAGE } from '@shared/lib/const';
import isApiError from '@shared/lib/helpers/isApiError';
import { Id, toast } from 'react-toastify';

const useSnackbar = () => {
  const toastIdRef = useRef<Id | null>(null);

  const handleUpdateMessage = (m: string) => {
    if (toastIdRef.current) toast.dismiss(toastIdRef.current);
    toastIdRef.current = toast(m);
  };

  const handleErrorMessage = (e: unknown) => {
    if (toastIdRef.current) toast.dismiss(toastIdRef.current);
    const errorMessage = isApiError(e) ? e.data.detail : UNKNOWN_ERROR_MESSAGE;
    toastIdRef.current = toast(errorMessage);
  };

  return {
    msg: handleUpdateMessage,
    err: handleErrorMessage,
  };
};

export default useSnackbar;
