import {
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction,
  useRef,
  useState,
} from 'react';

import { MdDialog } from '@material/web/all';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field';

import FilledTonalButton from '@/shared/ui/FilledTonalButton';
import TextButton from '@/shared/ui/TextButton';
import Dialog from '@shared/ui/Dialog';
import OutlinedTextField from '@shared/ui/OutlinedTextField';

type ConfirmDialogProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  title: string;
  cancelText?: string;
  confirmText?: string;
  initialValue?: string;
  onCancel: (e: MouseEvent) => void | Promise<void>;
  onConfirm: (e: MouseEvent) => void | Promise<void>;
};

const InputDialog: FC<ConfirmDialogProps> = ({
  open,
  setIsOpen,
  title,
  cancelText = 'Cancel',
  confirmText = 'Save',
  onCancel,
  onConfirm,
  initialValue,
}) => {
  const [val, setVal] = useState(initialValue);
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
      <h3 slot="headline">{title}</h3>
      <form slot="content" id="form-id" method="dialog">
        <OutlinedTextField
          onInput={(e) => {
            setVal((e.target as MdOutlinedTextField).value);
          }}
          className="w-full text-start"
          textDirection="ltr"
          value={val}
        />
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

export default InputDialog;
