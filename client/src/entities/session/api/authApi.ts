import rootApi from '@shared/api/rootApi';

type LoginBody = {
  username: string;
  password: string;
};

type LoginResponse = {
  access: string;
  refresh: string;
};

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: '/users/token/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
