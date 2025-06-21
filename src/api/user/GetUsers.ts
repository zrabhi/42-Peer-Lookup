import { useQuery } from '@tanstack/react-query';

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
export const useGetUsers = () => {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ['/v2/cursus/42/users'],
    queryFn: async () => {
      const response = await client.get('v2/cursus/42/users');

      return response.data;
    },
    staleTime: Infinity,
  });

  return {
    data,
    isLoading,
    error,
  };
};
