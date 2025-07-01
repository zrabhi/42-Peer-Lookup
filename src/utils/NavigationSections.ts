import { type NavigationSectionsType } from '@/types/NavigationSectionsType';
import { UserDetailsSections } from '@/types/user/UserDeatilsSections';

export const userDetailsSections: NavigationSectionsType<UserDetailsSections>[] =
  [
    {
      label: 'Marks',
      section: UserDetailsSections.MARKS,
      isActive: true,
    },
    {
      label: 'Skills',
      section: UserDetailsSections.SKILLS,
      isActive: true,
    
    },
    {
      label: 'Achievements',
      section: UserDetailsSections.ACHIEVEMENTS,
      isActive: true,
    },
  ];
