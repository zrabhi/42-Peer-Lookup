import { memo, useMemo } from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import { LocateFixed, SquareArrowUpRight } from 'lucide-react-native';

import Colors from '@/utils/Colors';
import { NImage } from './Image';
import { NeoBruteView } from './ui/NeoBruteView';
import { UserLevelBar } from './ui/UserLevelBar';
import { Text } from '@components/ui/Text';
import { HighlightedText } from './ui/HighlightedText';

interface UserDetailsHeaderProps {
  coalitionBackground: string;
  userImage: string;
}

export const UserDetailsHeader = memo(
  ({ coalitionBackground, userImage }: UserDetailsHeaderProps) => {
    return (
      <View className="w-full h-64 border-b-2  border-black">
        <NImage style={styles.container} imageSource={coalitionBackground} />
        <NeoBruteView className="absolute size-36 rounded-3xl bg-none -bottom-12 left-[36%] flex-row justify-center  items-center">
          <NImage style={styles.avatarImage} imageSource={userImage} />
        </NeoBruteView>
      </View>

    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderBottomWidth: 10,
    borderColor: Colors.primary[100],
  },
  avatarImage: {
    width: 120,
    height: 122,
    borderRadius: 14,
  },
});
