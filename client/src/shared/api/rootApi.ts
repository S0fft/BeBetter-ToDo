import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from '@shared/api/baseQuery';

const rootApi = createApi({
  reducerPath: 'rootApi',
  tagTypes: ['Note'],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery,
  endpoints: () => ({}),
});

export default rootApi;
