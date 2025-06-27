import { memo } from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { NImage } from './Image';
import Colors from '@/utils/Colors'; // assuming you store colors here
import { Text } from '@components/ui/Text';
import { NeoBruteView } from './ui/NeoBruteView';

interface UserDetailsHeaderProps {
  /** Background image URL of the coalition */
  coalitionBackground: string;

  /** Full display name of the user */
  displayname: string;

  /** User login (e.g., username) */
  login: string;

  /** URL to user's profile image */
  userImage: string;
}

export const UserDetailsHeader = memo(
  ({
    coalitionBackground,
    userImage,
    displayname,
    login,
  }: UserDetailsHeaderProps) => {
    return (
      <View className="w-full h-80 border-b-2  border-black">
        <NImage style={styles.container} imageSource={coalitionBackground} />
        <NeoBruteView className="absolute  rounded-3xl bg-none -bottom-12 left-[36%] flex-row justify-center  items-center">
          <NImage
            accessibilityLabel={`${displayname} 's avatar`}
            style={styles.avatarImage}
            imageSource={userImage}
          />
        </NeoBruteView>
      </View>
    );
  }
);

/* <View className="flex-col gap-1 justify-start items-center ">
          <Text textSize={18} className="font-semibold text-bold">
            {displayname}
          </Text>
          <Text className="text-gray-100" textSize={14}>
            {'@' + login}
          </Text>
        </View> */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderBottomWidth: 10,
    borderColor: Colors.primary[100],
  },
  avatarContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: Platform.OS === 'android' ? 5 : 0,
  },
  avatarImage: {
    width: 120,
    height: 135,
    borderRadius: 14,
  },
});
