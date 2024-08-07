import {
  CreateNoteBody,
  NotesResponse,
  UpdateNoteParams,
} from '@/entities/note/model/types';
import rootApi from '@shared/api/rootApi';
import type { Note } from '@shared/types';

export const noteApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    notes: builder.query<NotesResponse, void>({
      query: () => ({
        url: '/todos/',
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
  }),
});

export const {
  useNotesQuery,
  useNoteQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = noteApi;
