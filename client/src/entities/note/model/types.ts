import { Note } from '@shared/types';

type UpdateNoteBody = Partial<Omit<Note, 'id'>>;

export type NotesResponse = Note[];

export type CreateNoteBody = {
  title: string;
  content: string;
} & UpdateNoteBody;

export type UpdateNoteParams = {
  id: number;
  body: UpdateNoteBody;
};
