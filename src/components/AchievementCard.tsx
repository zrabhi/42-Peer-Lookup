import { memo } from 'react';
import { View } from 'react-native';
import { NeoBruteView } from './ui/NeoBruteView';
import { NImage } from './Image';
import { Text } from '@components/ui/Text';
interface AchievementCardProps {}

export const AchievementCard = memo(({}: AchievementCardProps) => {
  return (
    <View className="bg-transparent flex-1 h-16 flex-row  gap-4 items-center ">
      <NeoBruteView className=" p-3 gap-2 items-center justify-center rounded-xl ">
        <NImage
          style={{ height: 24, width: 24 }}
          imageSource={
            'https://cdn.intra.42.fr/achievement/image/218/PRO001-2.svg'
          }
        />
        <Text textSize={8} className="font-semibold">
          Scolarity
        </Text>
      </NeoBruteView>
      <NeoBruteView className=" p-3 gap-2  items-center justify-center rounded-xl ">
          <Text textSize={12} className="font-semibold">
          Attended 4 event
        </Text>
        <Text textSize={8} className="font-semibold">
          Attended 21 events.
        </Text>

      </NeoBruteView>
    </View>
  );
});
