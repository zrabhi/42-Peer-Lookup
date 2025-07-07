import { FlashList } from '@shopify/flash-list';
import { memo } from 'react';


import { NoItemIllustartion } from './icons/NoItemIllustartion';
import { AlertMessage } from './ui/AlertMessage';
import { UserSkills } from '@/types/user/UserSkills';
import { SkillsCard } from './SkillsCard';

interface SkillsListProps {
  skills?: UserSkills[];
}

export const SkillsList = memo(({ skills }: SkillsListProps) => {
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
          message="You have no achievements yet."
        />
      }
      className="ios:my-auto flex-1 pt-4 "
      estimatedItemSize={50}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      keyExtractor={(item) => item.id?.toString() ?? ''}
      renderItem={({ item }) => (
        <SkillsCard key={item.id?.toString()} {...item} />
      )}
    />
  );
});
