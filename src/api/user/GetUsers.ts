import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { type UserKind } from '@/types/UserKind';
import { client } from '../Client';

interface ImageVersions {
  [key: string]: string;
}

interface UserImage {
  link: string | null;
  versions: ImageVersions;
}

interface User {
  displayname: string;
  id: number;
  image: UserImage;
  kind: UserKind;
  location: string | null;
  login: string;
  phone: string;
  updated_at: string;
  url: string;
  usual_first_name: string | null;
  usual_full_name: string;
  wallet: number;
}

interface PaginatedResponse {
  users: User[];
  hasNext: boolean;
}
export const useGetPaginatedUsers = (searchedUser?: string) => {
  const queryClient = useQueryClient();

  const queryKey = ['users', { search: searchedUser }];

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<PaginatedResponse, Error>({
    queryKey,
    queryFn: async ({ pageParam = 1 }) => {
      const query = searchedUser
        ? `?search[login]=${searchedUser}&page=${pageParam}`
        : `?page=${pageParam}`;

      const response = await client.get<User[]>(`v2/users${query}`);

      return {
        users: response.data,
        hasNext: response.headers?.link?.includes('rel="next"') ?? false,
      };
    },
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNext ? allPages.length + 1 : undefined,
    
    staleTime: Infinity,
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey });

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  return {
    users: data?.pages.flatMap((page) => page.users) ?? [],
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    loadMore,
    invalidate,
  };
};
