import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { useAuth } from '@/utils/auth/AuthProvider';
import { Env } from '@/utils/Env';
import { AUTH_KEY, setItem } from '@/utils/Storage';

import { apiUrls } from '../Common';
import { AccessTokenGranType } from '../types/AcessTokenGrantTYpe';
import { AuthTokenResponse } from '@/types/AuthTokenResponse';
import { GetAccessTokenParams } from '../types/GetAccessTokenParams';
import { getAccessTokenMutationFn } from '../user/GetAccessTokenMutationFn';



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
