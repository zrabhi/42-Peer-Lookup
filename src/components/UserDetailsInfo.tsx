import { SquareArrowUpRight } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

import Colors from '@/utils/Colors';

import { HighlightedText } from './ui/HighlightedText';
import { Text } from './ui/Text';

interface UserInfoProps {
  login?: string;
  displayname?: string;
  onPress: VoidFunction;
  location?: string;
}
export const UserDetailsInfo = ({
  login,
  displayname,
  onPress,
  location = 'Unavailable',
}: UserInfoProps) => {
  return (
    <View className="items-center justify-center gap-1.5">
      <View className="max-w-[90%] flex-row flex-wrap items-start justify-center gap-1">
        <Text textSize={18} className="text-center font-bold ">
          {displayname}
        </Text>
        <Pressable onPress={onPress} className="mt-0.5">
          <SquareArrowUpRight
            size={20}
            strokeWidth={2.5}
            color={Colors.primary.orange[100]}
          />
        </Pressable>
      </View>

      <HighlightedText>
        <Text textSize={12} className="font-medium text-gray-100">
          @{login}
        </Text>
      </HighlightedText>

      <Text textSize={16} className="font-semibold text-primary-orange-100">
        {location ?? 'Unavailable'}
      </Text>
    </View>
  );
};
