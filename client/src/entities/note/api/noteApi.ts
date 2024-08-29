import {
  CreateNoteBody,
  NotesResponse,
  UpdateNoteParams,
} from '@/entities/note/model/types';
import rootApi from '@shared/api/rootApi';
import type { Note } from '@shared/types';

export const noteApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    notes: builder.query<NotesResponse, string | void>({
      query: (search) => ({
        url: '/todos/',
        params: {
          search,
        },
      }),
      providesTags: ['Note'],
    }),

    note: builder.query<Note, number>({
      query: (id) => ({
        url: `/todos/${id}/`,
      }),
      providesTags: ['Note'],
    }),

    updateNote: builder.mutation<Note, UpdateNoteParams>({
      query: ({ id, body }) => ({
        url: `/todos/${id}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Note'],
    }),

    createNote: builder.mutation<Note, CreateNoteBody>({
      query: (body) => ({
        url: '/todos/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Note'],
    }),

    deleteNote: builder.mutation<void, number>({
      query: (id) => ({
        url: `/todos/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Note'],
    }),

    deleteAllNotes: builder.mutation<void, void>({
      query: () => ({
        url: `/todos/clear_trashed/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Note'],
    }),
  }),
});

export const {
  useNotesQuery,
  useLazyNotesQuery,
  useNoteQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
  useDeleteAllNotesMutation,
} = noteApi;
