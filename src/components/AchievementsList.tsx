import { FlashList } from '@shopify/flash-list';
import { memo } from 'react';

import { type UserAchievement } from '@/types/user/UserAchievement';

import { AchievementCard } from './AchievementCard';
import { NoItemIllustartion } from './icons/NoItemIllustartion';
import { AlertMessage } from './ui/AlertMessage';

interface AchievementsListProps {
  achievements?: UserAchievement[];
}
// TODO: to center the empty list
export const AchievementList = memo(
  ({ achievements }: AchievementsListProps) => {
    return (
      <FlashList
        data={achievements}
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
        renderItem={({ item }) =>
          item.visible ? (
            <AchievementCard key={item.id?.toString()} {...item} />
          ) : undefined
        }
      />
    );
  }
);
