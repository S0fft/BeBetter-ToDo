import rootApi from '@shared/api/rootApi';

// TODO: re-check data when api is ready
type ProfileResponse = {
  username: string;
  email: string;
  image: string;
};

export const userApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: '/users/profile/',
      }),
    }),
  }),
});

export const { useProfileQuery } = userApi;
