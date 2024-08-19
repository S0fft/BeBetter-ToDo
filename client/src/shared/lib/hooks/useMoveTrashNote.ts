import { MouseEvent } from 'react';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import { urlParams } from '@shared/lib/const';
import runAsync from '@shared/lib/helpers/runAsync';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useActiveNote from '@shared/lib/hooks/useActiveNote';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import useUrl from '@shared/lib/hooks/useUrl';
import { OutletContext } from '@shared/ui/NotesList/model/types';
import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router-dom';

const useMoveTrashNote = (noteId: number) => {
  const [, setIsExpandNote] = useOutletContext<OutletContext>();
  const [updateNote] = useUpdateNoteMutation();
  const { setUrl } = useUrl();
  const snackbar = useSnackbar();
  const isActiveNote = useActiveNote(noteId);
  const { t } = useTranslation();

  return async (
    e: MouseEvent,
    cb?: (e: MouseEvent) => void | Promise<void>,
  ) => {
    e.stopPropagation();

    if (isActiveNote) {
      setUrl(urlParams.NOTE_ID);
      viewTransition(() => setIsExpandNote(false));
    }

    const [cbError] = await runAsync(async () => cb?.(e));
    const [updateNoteError] = await runAsync(
      updateNote({ id: noteId, body: { is_trashed: true } }).unwrap,
    );

    if (cbError !== null || updateNoteError !== null) {
      snackbar.err(cbError ?? updateNoteError);
      return;
    }

    snackbar.msg(t('snackbar.trashed'));
  };
};

export default useMoveTrashNote;
