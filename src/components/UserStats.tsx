import { memo } from 'react';
import { View } from 'react-native';
import { Text } from '@components/ui/Text';
import { NeoBruteView } from '@components/ui/NeoBruteView';

interface UserStatsProps {
  wallet: number;
  rank: number;
  score: number;
}

export const UserStats = memo(({ wallet, rank, score }: UserStatsProps) => {
  return (
    <View className="p-4 flex-row gap-4">
      <NeoBruteView  className="py-5 px-10 rounded-xl items-center justify-center">
        <Text textSize={14} className="font-bold">
          {wallet}
        </Text>
        <Text textSize={10} className="font-medium text-gray-100">
          Wallet
        </Text>
      </NeoBruteView>

      <NeoBruteView className="py-5 px-10 rounded-xl items-center justify-center">
        <Text textSize={14} className="font-bold">
          {rank}
        </Text>
        <Text textSize={10} className="font-medium text-gray-100">
          Rank
        </Text>
      </NeoBruteView>

      <NeoBruteView className="py-5 px-10 rounded-xl items-center justify-center">
        <Text textSize={14} className="font-bold">
          {score}
        </Text>
        <Text textSize={10} className="font-medium text-gray-100">
          Score
        </Text>
      </NeoBruteView>
    </View>
  );
});
