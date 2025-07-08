import { FlashList } from '@shopify/flash-list';
import { memo } from 'react';
import { Platform } from 'react-native';

import { useGetEmptyMessage } from '@/hooks/UseGetEmptyMessage';
import { type UserAchievement } from '@/types/user/UserAchievement';
import { UserDetailsSections } from '@/types/user/UserDeatilsSections';

import { AchievementCard } from './AchievementCard';
import { NoItemIllustartion } from './icons/NoItemIllustartion';
import { AlertMessage } from './ui/AlertMessage';

interface AchievementsListProps {
  achievements?: UserAchievement[];
  userLogin: string;
}

export const AchievementList = memo(
  ({ achievements, userLogin }: AchievementsListProps) => {
    const emptyAchievementsList = useGetEmptyMessage(
      UserDetailsSections.ACHIEVEMENTS,
      userLogin
    );

    return (
      <FlashList
        data={achievements}
        ListEmptyComponent={
          <AlertMessage
            width={128}
            height={128}
            textSize={Platform.OS === 'ios' ? 14 : 18}
            className="gap-6"
            alertIcon={NoItemIllustartion}
            message={emptyAchievementsList}
          />
        }
        className="ios:my-auto flex-1 pt-4 "
        contentContainerClassName="android:py-auto items-center flex-grow"
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
