import { urlParams } from '@shared/lib/const';
import useUrl from '@shared/lib/hooks/useUrl';

const useActiveNote = (noteId: number) => {
  const { readUrl } = useUrl();

  const isActiveNote =
    noteId === Number.parseInt(readUrl(urlParams.NOTE_ID), 10);

  return isActiveNote;
};

export default useActiveNote;
