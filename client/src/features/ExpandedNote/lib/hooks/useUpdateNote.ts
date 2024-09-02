/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import {
  useNoteQuery,
  useUpdateNoteMutation,
} from '@/entities/note/api/noteApi';
import {
  DEBOUNCE_TIME,
  DEFAULT_NOTE_VALUE,
} from '@features/ExpandedNote/lib/const';
import { useDebounce } from 'use-debounce';

const useUpdateNote = (id: number, field: 'title' | 'content') => {
  const { data: activeNote } = useNoteQuery(id, {
    skip: Number.isNaN(id),
  });
  const [updateNote] = useUpdateNoteMutation();
  const [value, setValue] = useState(DEFAULT_NOTE_VALUE);
  const [debouncedValue] = useDebounce(value, DEBOUNCE_TIME);
  const [isSynchronizedWithServer, setIsSynchronizedWithServer] =
    useState(false);

  const fieldValue = activeNote?.[field];

  useEffect(() => {
    if (fieldValue && !isSynchronizedWithServer) {
      setValue(fieldValue);
      setIsSynchronizedWithServer(true);
    }
  }, [fieldValue]);

  useEffect(() => {
    if (isSynchronizedWithServer && id && debouncedValue !== fieldValue) {
      updateNote({ id, body: { [field]: debouncedValue } });
    }
  }, [debouncedValue, field, fieldValue, id, updateNote]);

  return [value, setValue] as const;
};

export default useUpdateNote;
