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
  createdAt: string;
  labels: Label[];
  isPinned: boolean;
  isArchived: boolean;
  isTrashed: boolean;
};
