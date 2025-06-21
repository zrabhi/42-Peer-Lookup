import { useQuery } from '@tanstack/react-query';

import { type UserSummary } from '@/types/UserSummary';

import { client } from '../Client';
import { apiUrls } from '../Common';

export const useGetCurrentUser = () => {
  const { data, isLoading, error } = useQuery<UserSummary>({
    queryKey: [apiUrls.userDetails],
    queryFn: async () => {
      const response = await client.get(apiUrls.userDetails);
      const coalisionRes = await client.get(
        apiUrls.coalision.replace(':id', response.data.id)
      );
      const data = {
        ...response.data,
        image_url: response.data.image?.versions?.medium,
        coalition_image: coalisionRes.data[0].image_url,
        coalition_color: coalisionRes.data[0].color,
        coalition_name: coalisionRes.data[0].name,
      };

      return data;
    },
    staleTime: Infinity,
  });

  return {
    data,
    isLoading,
    error,
  };
};
