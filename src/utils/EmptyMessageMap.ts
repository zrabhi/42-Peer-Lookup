import { UserDetailsSections } from '@/types/user/UserDeatilsSections';

export const emptyMessagesMap: Record<
  UserDetailsSections,
  [string, (login: string) => string]
> = {
  [UserDetailsSections.MARKS]: [
    'You have no marks yet.',
    (login) => `${login} has no marks yet.`,
  ],
  [UserDetailsSections.SKILLS]: [
    'You have no skills yet.',
    (login) => `${login} has no skills yet.`,
  ],
  [UserDetailsSections.ACHIEVEMENTS]: [
    'You have no achievements yet.',
    (login) => `${login} has no achievements yet.`,
  ],
};
