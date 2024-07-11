import { ApiError } from '@shared/types';

const isApiError = (error: unknown): error is ApiError => {
  return (
    error instanceof Object &&
    'status' in error &&
    'data' in error &&
    error.data instanceof Object &&
    'detail' in error.data
  );
};

export default isApiError;
