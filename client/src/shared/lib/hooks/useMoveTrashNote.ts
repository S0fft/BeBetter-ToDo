import { MouseEvent } from 'react';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import { SNACKBAR_MESSAGE, urlParams } from '@shared/lib/const';
import viewTransition from '@shared/lib/helpers/viewTransition';
import useActiveNote from '@shared/lib/hooks/useActiveNote';
import useSnackbar from '@shared/lib/hooks/useSnackbar';
import useUrl from '@shared/lib/hooks/useUrl';
import { OutletContext } from '@shared/ui/NotesList/model/types';
import { useOutletContext } from 'react-router-dom';

const useMoveTrashNote = (noteId: number) => {
  const [, setIsExpandNote] = useOutletContext<OutletContext>();
  const [updateNote] = useUpdateNoteMutation();
  const { setUrl } = useUrl();
  const snackbar = useSnackbar();
  const isActiveNote = useActiveNote(noteId);

  return async (e: MouseEvent) => {
    e.stopPropagation();

    if (isActiveNote) {
      setUrl(urlParams.NOTE_ID);
      viewTransition(() => setIsExpandNote(false));
    }

    try {
      await updateNote({ id: noteId, body: { is_trashed: true } });
      snackbar.msg(SNACKBAR_MESSAGE.TRASHED);
    } catch (err) {
      snackbar.err(err);
    }
  };
};

export default useMoveTrashNote;
