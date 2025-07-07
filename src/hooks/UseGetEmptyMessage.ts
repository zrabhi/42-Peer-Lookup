import { useAuth } from '@utils/auth/AuthProvider';

import { type UserDetailsSections } from '@/types/user/UserDeatilsSections';
import { emptyMessagesMap } from '@/utils/EmptyMessageMap';

export const useGetEmptyMessage = (
  section: UserDetailsSections,
  profileLogin: string
): string => {
  const { authenticatedUser } = useAuth();
  const isOwnProfile = profileLogin === authenticatedUser?.login;

  const [selfMessage, otherMessage] = emptyMessagesMap[section];

  return isOwnProfile ? selfMessage : otherMessage(profileLogin);
};
