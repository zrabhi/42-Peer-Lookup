import { useQuery } from '@tanstack/react-query';

import { client } from '../Client';
import { apiUrls } from '../Common';
import { useAuth } from '@/utils/auth/AuthProvider';
import { UserSummary } from '@/types/UserSummary';

export const useGetCurrentUser = () => {
  
  const { setAuthenticatedUser } = useAuth();
  
  const { data, isLoading, error } = useQuery<UserSummary>({
    queryKey: [''],
    queryFn: async () => {
      const response = await client.get(apiUrls.userDetails);
      setAuthenticatedUser({
        displayname: response.data.displayname,
        login: response.data.login,
        image_url: response.data.image?.versions?.medium ?? '',
      });
      return response.data;
    },
    staleTime: Infinity
  });

  return {
    data,
    isLoading,
    error,
  };
};
