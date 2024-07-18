import rootApi from '@shared/api/rootApi';
import { User } from '@shared/types';

export const userApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query<User, void>({
      keepUnusedDataFor: Number.MAX_SAFE_INTEGER,
      query: () => ({
        url: '/users/profile/',
      }),
    }),
  }),
});

export const { useProfileQuery } = userApi;
