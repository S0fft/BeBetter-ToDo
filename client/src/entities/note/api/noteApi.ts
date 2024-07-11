import rootApi from '@shared/api/rootApi';
import { Note } from '@shared/types';

type NotesResponse = Note[];

export const noteApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    notes: builder.query<NotesResponse, void>({
      query: () => ({
        url: '/todos/',
      }),
    }),
  }),
});

export const { useNotesQuery } = noteApi;
