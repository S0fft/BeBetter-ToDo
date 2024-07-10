import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import type { RootState } from '@/store';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).sessionReducer;
    headers.set('Authorization', `berear ${accessToken}`);
  },
});

export default baseQuery;
