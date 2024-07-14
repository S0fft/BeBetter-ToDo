import { MouseEvent } from 'react';

import { useUpdateNoteMutation } from '@/entities/note/api/noteApi';
import { UNKNOWN_ERROR_MESSAGE, urlParams } from '@shared/lib/const';
import isApiError from '@shared/lib/helpers/isApiError';
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
      snackbar('Moved to trash');
    } catch (err) {
      const errorMessage = isApiError(err)
        ? err.data.detail
        : UNKNOWN_ERROR_MESSAGE;
      snackbar(errorMessage);
    }
  };
};

export default useMoveTrashNote;
