import { LocateFixed, SquareArrowUpRight } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

import Colors from '@/utils/Colors';

import { HighlightedText } from './ui/HighlightedText';
import { Text } from './ui/Text';

interface UserInfoProps {
  login?: string;
  displayname?: string;
  onPress: VoidFunction;
  campusLocation?: string;
  location?: string;
}

export const UserDetailsInfo = ({
  login,
  displayname,
  campusLocation,
  onPress,
  location = 'Khouribga, Morocco',
}: UserInfoProps) => {
  return (
    <View className="items-center  justify-center gap-1">
      <HighlightedText>
        <Text textSize={12} className="font-medium text-gray-100">
          @{login}
        </Text>
      </HighlightedText>

      <View className="flex-row items-center justify-center gap-2">
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          textSize={18}
          className="font-bold"
        >
          {displayname}
        </Text>

        <Pressable onPress={onPress}>
          <SquareArrowUpRight
            size={20}
            strokeWidth={2.5}
            color={Colors.primary.orange[100]}
          />
        </Pressable>
      </View>

      <View className="flex-row items-center justify-center gap-2">
        <LocateFixed
          size={20}
          strokeWidth={2.5}
          color={Colors.primary.orange[100]}
        />
        <Text textSize={12} className="font-medium text-gray-100">
          {campusLocation}
        </Text>
      </View>

      <Text textSize={16} className="font-semibold text-primary-orange-100">
        {location ?? 'Unvailable'}
      </Text>
    </View>
  );
};
