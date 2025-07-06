import { Text } from '@components/ui/Text';
import { memo } from 'react';
import { View } from 'react-native';

import { apiUrls } from '@/api/Common';

import { Image } from './ui/Image';
import { NeoBruteView } from './ui/NeoBruteView';
interface AchievementCardProps {
  image: string | null;
  name: string | null;
  description: string | null;
  kind: string | null;
}

export const AchievementCard = memo(
  ({ description, image, name, kind }: AchievementCardProps) => {
    return (
      <View className="ios:mb-4  android:pb-4  h-24 flex-row items-center  gap-4 bg-transparent ">
        <NeoBruteView className="h-full w-28 items-center justify-center gap-2 rounded-xl px-2 py-3 ">
          <Image
            style={{ height: 26, width: 26 }}
            imageSource={apiUrls.fortyTwoCdn + image.replace(/^\/uploads/, '')}
          />
          <Text textSize={10} className="font-semibold">
            {kind}
          </Text>
        </NeoBruteView>
        <NeoBruteView className="h-full flex-1 justify-center  gap-2 rounded-xl px-2 py-3 ">
          <Text textSize={13} className="font-bold">
            {name}
          </Text>
          <Text textSize={10} className="font-medium text-gray-100">
            {description}
          </Text>
        </NeoBruteView>
      </View>
    );
  }
);
