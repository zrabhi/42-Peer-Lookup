import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { useAuth } from '@/utils/auth/AuthProvider';
import { Env } from '@/utils/Env';
import { AUTH_KEY, setItem } from '@/utils/Storage';

import { apiUrls } from '../Common';

interface GetAccessToeknParams {
  code: string | null;
}

export const useGetAccessToken = () => {
  const { setIsAuthenticated } = useAuth();
  const { mutateAsync, isPending, isSuccess, data } = useMutation<
    void,
    void,
    GetAccessToeknParams
  >({
    mutationFn: async ({ code }) => {
      const formBody = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: Env.CLIENT_UID,
        client_secret: Env.CLIENT_SECRET,
        code: code,
        redirect_uri: apiUrls.redirectUrl,
      }).toString();

      const response = await axios.post(
        `${Env.API_URL}${apiUrls.accessToken}`,
        formBody,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      if (response.status === 200) {
        await setItem(AUTH_KEY, response.data);
        setIsAuthenticated(true);
      }
      return response.data;
    },
  });

  return {
    data,
    isSuccess,
    getAccessToken: mutateAsync,
    isPending,
  };
};
