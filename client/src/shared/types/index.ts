import { localStorageKeys, urlParams } from '@shared/lib/const';

export type UrlParams = (typeof urlParams)[keyof typeof urlParams];

export type MultipleQueries = Partial<Record<UrlParams, string | number>>;

export type SetValue = number | string | boolean;

export type SetUrl = {
  (query: UrlParams, value?: SetValue): void;
  /**
   * used for multiple queries at once (to avoid multiple renders and to update history only once for proper history navigation)
   * @param multipleQueriesAndValues
   */
  (multipleQueriesAndValues: MultipleQueries): void;
};

export type ReadUrl = (query: UrlParams) => string;

export type LocalStorageKeys = keyof typeof localStorageKeys;

export type Label = {
  title: string;
  color: string;
};

export type MdProps<TComponent> = Partial<Omit<TComponent, keyof HTMLElement>>;

export type Note = {
  id: number;
  title: string;
  content: string;
  is_done: boolean;
  is_pinned: boolean;
  is_trashed: boolean;
  time_created: string;
  time_updated: string;
  labels: Label[];
};

export type ApiError = {
  status: number;
  data: {
    detail: string;
  };
};

export type User = {
  email: string;
  first_name: string;
  id: number;
  is_active: boolean;
  is_done_todos_quantity: number;
  is_trashed_todos_quantity: number;
  last_name: string;
  todos_quantity: number;
  username: string;
};
