import { useRef } from 'react';

import { Id, toast } from 'react-toastify';

const useSnackbar = () => {
  const toastIdRef = useRef<Id | null>(null);

  const handleUpdateMessage = (message: string) => {
    if (toastIdRef.current) toast.dismiss(toastIdRef.current);
    toastIdRef.current = toast(message);
  };

  return handleUpdateMessage;
};

export default useSnackbar;
