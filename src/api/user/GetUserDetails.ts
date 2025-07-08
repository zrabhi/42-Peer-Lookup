import { useQuery } from '@tanstack/react-query';

import { type UserDetails } from '@/types/user/UserDetails';

import { client } from '../Client';
import { apiUrls } from '../Common';
import { getUserCoalision } from './GetUserCoalision';

export const useGetUserDetails = (userId: string | null) => {
  const queryKey = [apiUrls.userDetails, userId];
  const { data, isLoading, error } = useQuery<UserDetails>({
    queryKey,
    queryFn: async () => {
      const response = await client.get(
        apiUrls.userDetails.replace(':id', userId.toString())
      );
      return await getUserCoalision(response.data);
    },
    staleTime: Infinity,
  });

  return {
    data,
    error,
    isLoading,
  };
};
