import { useQuery } from '@tanstack/react-query';

import { type UserSummary } from '@/types/UserSummary';

import { client } from '../Client';
import { apiUrls } from '../Common';
import { getUserCoalision } from './GetUserCoalision';

export const useGetCurrentUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [apiUrls.userProfile],
    queryFn: async () => {
      const response = await client.get<UserSummary>(apiUrls.userProfile);
      return await getUserCoalision(response.data);
    },
    staleTime: Infinity,
  });

  return {
    data,
    isLoading,
    error,
  };
};
