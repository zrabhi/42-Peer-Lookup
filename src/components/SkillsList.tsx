import { FlashList } from '@shopify/flash-list';
import { memo } from 'react';

import { useGetEmptyMessage } from '@/hooks/UseGetEmptyMessage';
import { UserDetailsSections } from '@/types/user/UserDeatilsSections';
import { type UserSkills } from '@/types/user/UserSkills';

import { NoItemIllustartion } from './icons/NoItemIllustartion';
import { SkillsCard } from './SkillsCard';
import { AlertMessage } from './ui/AlertMessage';

interface SkillsListProps {
  skills?: UserSkills[];
  userLogin: string;
}

export const SkillsList = memo(({ skills, userLogin }: SkillsListProps) => {
  const emptySkillsMessage = useGetEmptyMessage(
    UserDetailsSections.SKILLS,
    userLogin
  );

  return (
    <FlashList
      data={skills}
      ListEmptyComponent={
        <AlertMessage
          width={128}
          height={128}
          textSize={14}
          className="gap-6"
          alertIcon={NoItemIllustartion}
          message={emptySkillsMessage}
        />
      }
      className="ios:my-auto flex-1 flex-grow pt-4 "
      estimatedItemSize={50}
      style={{
        paddingHorizontal: 20,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      keyExtractor={(item) => item.id?.toString() ?? ''}
      renderItem={({ item }) => (
        <SkillsCard key={item.id?.toString()} {...item} />
      )}
    />
  );
});
