import { NeoBruteView } from '@components/ui/NeoBruteView';
import { Text } from '@components/ui/Text';
import { memo } from 'react';
import { View } from 'react-native';

interface UserStatsProps {
  wallet: number;
  rank: number;
  score: number;
}

export const UserStats = memo(({ wallet, rank }: UserStatsProps) => {
  return (
    <View className="flex-row items-center justify-between gap-4 ">
      <NeoBruteView className="items-center justify-center rounded-xl px-9 py-3">
        <Text textSize={14} className="font-bold">
          {wallet}
        </Text>
        <Text textSize={10} className="font-medium text-gray-100">
          Wallet
        </Text>
      </NeoBruteView>

      <NeoBruteView className="items-center justify-center rounded-xl px-9 py-3">
        <Text textSize={14} className="font-bold">
          {rank}
        </Text>
        <Text textSize={10} className="font-medium text-gray-100">
          Points
        </Text>
      </NeoBruteView>
    </View>
  );
});
