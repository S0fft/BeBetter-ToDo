import {
  LoginBody,
  LoginResponse,
  SignUpBody,
  SignUpResponse,
} from '@/entities/session/model/types';
import rootApi from '@shared/api/rootApi';

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: '/users/token/',
        method: 'POST',
        body,
      }),
    }),

    signUp: builder.mutation<SignUpResponse, SignUpBody>({
      query: (body) => ({
        url: '/users/register/',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
