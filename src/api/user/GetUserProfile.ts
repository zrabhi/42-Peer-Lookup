import { useQuery } from '@tanstack/react-query';

import { client } from '../Client';
import { apiUrls } from '../Common';

export const useGetUserProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const response = await client.get(apiUrls.userDetails);

      return response.data;
    },
  });
  return {
    data,
    isLoading,
    error,
  };
};
