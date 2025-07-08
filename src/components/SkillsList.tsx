import { FlashList } from '@shopify/flash-list';
import { memo } from 'react';
import { Platform } from 'react-native';

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
          textSize={Platform.OS === 'ios' ? 14 : 18}
          className="gap-6"
          alertIcon={NoItemIllustartion}
          message={emptySkillsMessage}
        />
      }
      className="flex-1 flex-grow pt-4 "
      contentContainerClassName="android:py-auto items-center flex-grow"
      estimatedItemSize={50}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
      keyExtractor={(item) => item.id?.toString() ?? ''}
      renderItem={({ item }) => (
        <SkillsCard key={item.id?.toString()} {...item} />
      )}
    />
  );
});
