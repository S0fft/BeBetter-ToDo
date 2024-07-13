import rootApi from '@shared/api/rootApi';
import { User } from '@shared/types';

export const userApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query<User, void>({
      query: () => ({
        url: '/users/profile/',
      }),
    }),
  }),
});

export const { useProfileQuery } = userApi;
