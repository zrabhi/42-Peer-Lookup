import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SquareArrowUpRight } from 'lucide-react-native';

import Colors from '@/utils/Colors';
import { NImage } from './Image';
import { NeoBruteView } from './ui/NeoBruteView';
import { UserLevelBar } from './ui/UserLevelBar';
import { Text } from '@components/ui/Text';
import { HighlightedText } from './ui/HighlightedText';

interface UserDetailsHeaderProps {
  userImage: string;
  userName?: string;
  userLogin?: string;
  userLocation?: string;
  userlevel?: number;
  onPress?: VoidFunction;
}

export const UserDetailsHeader = memo(
  ({
    userImage,
    userName ,
    userLogin,
    userLocation = '',
    userlevel = 0,
    onPress,
  }: UserDetailsHeaderProps) => {
    return (
      <View className="w-full items-center justify-center pt-40 gap-4">
        {/* Avatar */}
        <View className="border-1.5 rounded-full">
          <NImage style={styles.avatarImage} imageSource={userImage} />
        </View>

        {/* Name + Login + Link */}
        <View className="items-center justify-center gap-1">
          <View className="flex-row gap-2 items-center justify-center  ">
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              textSize={18}
              className="font-bold max-w-[80%]  "
            >
              {userName}
            </Text>
            {!!onPress && (
              <Pressable onPress={onPress}>
                <SquareArrowUpRight
                  size={20}
                  strokeWidth={2.5}
                  color={Colors.primary[100]}
                />
              </Pressable>
            )}
          </View>
            <Text textSize={14} className="font-medium text-gray-100">
              @{userLogin}
            </Text>
            <Hi
            <Text textSize={14} className="font-medium text-gray-100">
              @{userLocation ?? 'Unvailable'}
            </Text>
        </View>
       
      </View>
    );
  }
);

const styles = StyleSheet.create({
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 9999,
  },
});
