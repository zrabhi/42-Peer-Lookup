import { Text } from '@components/ui/Text';
import { Ghost, LocateFixed } from 'lucide-react-native';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '@/utils/Colors';

import { Image } from './ui/Image';

interface UserDetailsHeaderProps {
  coalitionBackground: string;
  userImage: string;
  campusLocation: string | null;
  coalitionColor?: string | null;
  erasureDate: string | null;
}

export const UserDetailsHeader = memo(
  ({
    coalitionBackground,
    userImage,
    campusLocation,
    coalitionColor,
    erasureDate,
  }: UserDetailsHeaderProps) => {
    const formattedDate = erasureDate
      ? new Date(erasureDate).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })
      : undefined;
    return (
      <View className="h-64 w-full border-b-2  border-black">
        <Image
          style={styles.container}
          imageSource={
            coalitionBackground ?? require('@assets/images/bkgrnd.jpg')
          }
        />
        <View
          style={{ borderColor: coalitionColor ?? Colors.primary.orange[100] }}
          className="absolute -bottom-12 left-[36%] size-36 flex-row items-center justify-center rounded-3xl border-2 border-dashed  bg-none"
        >
          <Image style={styles.avatarImage} imageSource={userImage} />
        </View>
        <View className="-z-20 flex-row items-center justify-between px-2 pl-4 pt-6">
          <View className="flex-row items-center  gap-2">
            <LocateFixed
              size={20}
              strokeWidth={2.5}
              color={Colors.primary.orange[100]}
            />
            <Text textSize={10} className="font-medium text-gray-100">
              {campusLocation}
            </Text>
          </View>
          <View className="flex-row items-center justify-center  gap-1">
            <Ghost
              size={20}
              strokeWidth={2.5}
              color={Colors.primary.orange[100]}
            />
            <Text textSize={10} className="font-medium text-gray-100">
              {formattedDate ?? 'Unkown'}
            </Text>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  avatarImage: {
    width: 122,
    height: 122,
    borderRadius: 21,
  },
});
