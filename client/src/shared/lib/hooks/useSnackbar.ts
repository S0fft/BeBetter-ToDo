import { UNKNOWN_ERROR_MESSAGE } from '@shared/lib/const';
import isApiError from '@shared/lib/helpers/isApiError';
import { toast } from 'react-toastify';

const useSnackbar = () => {
  const handleUpdateMessage = (m: string) => {
    toast.dismiss();
    toast(m);
  };

  const handleErrorMessage = (e: unknown) => {
    toast.dismiss();
    const errorMessage = isApiError(e) ? e.data.detail : UNKNOWN_ERROR_MESSAGE;
    toast(errorMessage);
  };

  return {
    msg: handleUpdateMessage,
    err: handleErrorMessage,
  };
};

export default useSnackbar;
