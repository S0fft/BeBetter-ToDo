import isApiError from '@shared/lib/helpers/isApiError';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const useSnackbar = () => {
  const { t } = useTranslation();

  const handleUpdateMessage = (m: string) => {
    toast.dismiss();
    toast(m);
  };

  const handleErrorMessage = (e: unknown | string) => {
    toast.dismiss();

    let errorMessage;

    if (typeof e === 'string') {
      errorMessage = e;
    } else {
      errorMessage = isApiError(e) ? e.data.detail : t('snackbar.unknownError');
    }

    toast(errorMessage);
  };

  return {
    msg: handleUpdateMessage,
    err: handleErrorMessage,
  };
};

export default useSnackbar;
