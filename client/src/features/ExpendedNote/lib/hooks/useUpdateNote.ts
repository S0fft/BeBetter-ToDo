import { useEffect, useState } from 'react';

import {
  useNoteQuery,
  useUpdateNoteMutation,
} from '@/entities/note/api/noteApi';
import {
  DEBOUNCE_TIME,
  DEFAULT_NOTE_VALUE,
} from '@features/ExpendedNote/lib/const';
import { useDebounce } from 'use-debounce';

const useUpdateNote = (id: number, field: 'title' | 'content') => {
  const { data: activeNote } = useNoteQuery(id, {
    skip: Number.isNaN(id),
  });
  const [updateNote] = useUpdateNoteMutation();
  const [value, setValue] = useState(DEFAULT_NOTE_VALUE);
  const [debouncedValue] = useDebounce(value, DEBOUNCE_TIME);

  const fieldValue = activeNote?.[field];
  const valueNotSyncWithServer = value === DEFAULT_NOTE_VALUE;

  useEffect(() => {
    if (fieldValue && valueNotSyncWithServer) {
      setValue(fieldValue);
    }
  }, [fieldValue, valueNotSyncWithServer]);

  useEffect(() => {
    if (id && debouncedValue && debouncedValue !== fieldValue) {
      updateNote({ id, body: { [field]: debouncedValue } });
    }
  }, [debouncedValue]);

  return [value, setValue] as const;
};

export default useUpdateNote;
