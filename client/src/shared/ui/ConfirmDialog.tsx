import { Dispatch, FC, MouseEvent, SetStateAction, useRef } from 'react';

import { MdDialog } from '@material/web/all';

import FilledTonalButton from '@/shared/ui/FilledTonalButton';
import Icon from '@/shared/ui/Icon';
import TextButton from '@/shared/ui/TextButton';
import Dialog from '@shared/ui/Dialog';

type ConfirmDialogProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  title: string;
  subtitle?: string;
  cancelText?: string;
  confirmText?: string;
  icon?: string;
  onCancel: (e: MouseEvent) => void | Promise<void>;
  onConfirm: (e: MouseEvent) => void | Promise<void>;
};

const ConfirmModal: FC<ConfirmDialogProps> = ({
  open,
  setIsOpen,
  title,
  subtitle,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  icon = 'delete_outline',
  onCancel,
  onConfirm,
}) => {
  const dialogRef = useRef<MdDialog>(null);

  const handleConfirm = async (e: MouseEvent) => {
    e.stopPropagation();
    await dialogRef.current?.close();
    onConfirm(e);
  };

  const handleCancel = async (e: MouseEvent) => {
    e.stopPropagation();
    await dialogRef.current?.close();
    onCancel(e);
  };

  return (
    <Dialog
      open={open}
      ref={dialogRef}
      className="max-w-[312px]"
      closed={() => setIsOpen(false)}>
      <div slot="headline">{title}</div>
      <Icon slot="icon">{icon}</Icon>
      <form id="form" slot="content" method="dialog">
        {subtitle}
      </form>
      <div slot="actions">
        <TextButton onClick={handleCancel}>{cancelText}</TextButton>
        <FilledTonalButton onClick={handleConfirm}>
          {confirmText}
        </FilledTonalButton>
      </div>
    </Dialog>
  );
};

export default ConfirmModal;
