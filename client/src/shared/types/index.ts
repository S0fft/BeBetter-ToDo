import { urlParams } from '@shared/lib/const';

export type UrlParams = (typeof urlParams)[keyof typeof urlParams];

export type MultipleQueries = Partial<Record<UrlParams, string | number>>;

export type SetValue = number | string | boolean;

export type SetUrl = {
  (query: UrlParams, value: SetValue): void;
  (multipleQueriesAndValues: MultipleQueries): void; // used for multiple queries at once (to avoid multiple renders and to update history only once for proper history navigation)
};

export type ReadUrl = (query: UrlParams) => string;
