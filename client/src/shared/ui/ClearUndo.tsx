import { FC, useCallback, useEffect, useState } from 'react';

import { SNACKBAR_AUTO_HIDE_DURATION } from '@shared/lib/const';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import TextButton from '@shared/ui/TextButton';
import { useTranslation } from 'react-i18next';

type ClearUndoProps = {
  closeToast: () => void;
  title: string;
  cb: () => void;
};

const ClearUndo: FC<ClearUndoProps> = ({ closeToast, title, cb }) => {
  const [deleteDataTimeout, setDeleteDataTimeout] = useState(
    null as unknown as ReturnType<typeof setTimeout>,
  );
  const snackbar = useSnackbar();
  const { t } = useTranslation();

  const handleClearData = useCallback(cb, [cb]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClearData();
    }, SNACKBAR_AUTO_HIDE_DURATION);

    setDeleteDataTimeout(timeoutId);

    return () => clearTimeout(timeoutId);
  }, [handleClearData]);

  const handleUndo = () => {
    clearTimeout(deleteDataTimeout);
    closeToast();
    snackbar.msg(t('snackbar.dataRestored'));
  };

  return (
    <div className="mr-8 flex max-w-[300px] items-center text-sm">
      <p className="font-[400] text-inverse-on-surface">{title}</p>
      <TextButton
        className="absolute right-0 font-[500] text-primary-fixed [&::part(ripple)]:bg-primary-fixed [&::part(ripple)]:opacity-0 [&::part(ripple)]:transition-all [&::part(ripple)]:hover:opacity-10"
        type="button"
        onClick={handleUndo}>
        <span className="text-primary-fixed">{t('snackbar.undo')}</span>
      </TextButton>
    </div>
  );
};

export default ClearUndo;
