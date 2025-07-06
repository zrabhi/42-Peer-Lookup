import { Text } from '@components/ui/Text';
import { memo } from 'react';
import { View } from 'react-native';

interface UserStatsProps {
  wallet: number;
  rank?: number;
  correctionPoints: number;
  score?: number;
}

export const UserStats = memo(
  ({ wallet, correctionPoints }: UserStatsProps) => {
    return (
      <View className="flex-row  items-center justify-between gap-4 px-4 ">
        <View className="items-center justify-center  rounded-xl">
          <Text textSize={16} className="font-bold">
            {wallet}
          </Text>
          <Text textSize={12} className="font-medium text-gray-100">
            Wallet
          </Text>
        </View>

        <View className="items-center justify-center rounded-xl">
          <Text textSize={16} className="font-bold">
            {correctionPoints}
          </Text>
          <Text textSize={12} className="font-medium text-gray-100">
            Points
          </Text>
        </View>
        <View className="items-center justify-center rounded-xl">
          <Text textSize={16} className="font-bold">
            {correctionPoints}
          </Text>
          <Text textSize={12} className="font-medium text-gray-100">
            Points
          </Text>
        </View>
      </View>
    );
  }
);
