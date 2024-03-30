import { useCallback, useRef } from 'react';

import { queryParamsInit } from '@shared/lib/const';
import {
  MultipleQueries,
  ReadUrl,
  SetUrl,
  SetValue,
  UrlParams,
} from '@shared/types';
import {
  NavigateOptions,
  URLSearchParamsInit,
  useSearchParams,
} from 'react-router-dom';

/**
 * Returns an object with two methods, `readUrl` and `setUrl`, that can be used to read and set URL parameters.
 *
 * @return obj
 * @return {ReadUrl} obj.readUrl - A function that takes a query parameter and returns its value from the URL.
 * @return {SetUrl} obj.setUrl - A function that takes a query parameter and its value and sets it in the URL.
 */
function useUrl() {
  const [searchParams, unstableSetUrlSearchParams] =
    useSearchParams(queryParamsInit);

  // The set search params fn is not stable, so we need to make it stable by self.
  // https://github.com/remix-run/react-router/issues/9991
  const fnRef = useRef(unstableSetUrlSearchParams);
  const setSearchParams = useCallback(
    (
      nextInit?:
        | URLSearchParamsInit
        | ((prev: URLSearchParams) => URLSearchParamsInit),
      navigateOpts?: NavigateOptions,
    ) => fnRef.current(nextInit, navigateOpts),
    [],
  );

  const readUrl: ReadUrl = (query: UrlParams) =>
    searchParams.get(query) as string;

  const setUrl: SetUrl = useCallback(
    (query: UrlParams | MultipleQueries, value?: SetValue) => {
      if (typeof query === 'object') {
        Object.entries(query).forEach(([queryKey, queryValue]) =>
          searchParams.set(queryKey, String(queryValue)),
        );
      }

      if (typeof query !== 'object' && value !== undefined) {
        searchParams.set(query, String(value));
      }

      setSearchParams(searchParams);
    },

    [searchParams, setSearchParams],
  );

  return { readUrl, setUrl };
}

export default useUrl;
