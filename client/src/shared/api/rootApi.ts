import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from '@shared/api/baseQuery';

const rootApi = createApi({
  reducerPath: 'rootApi',
  tagTypes: ['Note'],
  baseQuery,
  endpoints: () => ({}),
});

export default rootApi;
