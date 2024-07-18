import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import type { RootState } from '@/store';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}`,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).sessionReducer;
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
  },
});

export default baseQuery;
