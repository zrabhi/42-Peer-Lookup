import { useMutation } from '@tanstack/react-query';

import { type AuthTokenResponse } from '@/types/AuthTokenResponse';
import { useAuth } from '@/utils/auth/AuthProvider';

import { type GetAccessTokenParams } from '../types/GetAccessTokenParams';
import { getAccessTokenMutationFn } from './GetAccessTokenMutationFn';

export const useGetAccessToken = () => {
  const { setIsAuthenticated } = useAuth();
  const {
    mutateAsync: getAccessToken,
    isPending,
    isSuccess,
    data,
  } = useMutation<AuthTokenResponse, void, GetAccessTokenParams>({
    mutationFn: getAccessTokenMutationFn,
    onSuccess: async () => {
      setIsAuthenticated(true);
    },
  });

  return {
    getAccessToken,
    data,
    isSuccess,
    isPending,
  };
};
