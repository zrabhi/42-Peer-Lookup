import { Text } from '@components/ui/Text';
import Colors from '@utils/Colors';
import * as Haptics from 'expo-haptics';
import { ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { Platform, Pressable, View } from 'react-native';

import { UserKind } from '@/types/UserKind';

import { NImage } from './Image';
interface UserCardProps {
  kind: UserKind;
  onPress?: () => void;
  className?: string;
  displayname: string | null;
  location?: string | null;
  login?: string | null;
  image: string | null;
}

export const UserCard = ({
  kind,
  displayname,
  image,
  login,
  onPress,
  className,
}: UserCardProps) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);

  return (
    <Pressable
      onPress={onPress}
      onPressOut={() => setIsPressed(false)}
      accessible
      role="listitem"
      onPressIn={() => {
        setIsPressed(true);
        Platform.OS === 'ios' && Haptics.selectionAsync();
      }}
      className={`relative w-full ${className}`}
    >
      <View className="rounded-2xl  border border-black bg-white p-6">
        <View className="absolute -top-4 right-10 rounded-2xl bg-primary-100 px-4 py-2">
          <Text textSize={14} className="font-bold  text-white">
            {kind === UserKind.ADMIN ? 'Staff' : kind}
          </Text>
        </View>
        <View className="flex-1 flex-row items-center justify-between">
          <View className="flex-1 flex-row items-center  justify-start  gap-4">
            <NImage imageSource={image} />
            <View className="flex-1 items-start  gap-2">
              <Text
                lineBreakMode="tail"
                numberOfLines={2}
                textSize={16}
                className="font-bold "
              >
                {displayname}
              </Text>
              <Text textSize={13} className="font-medium text-gray-100">
                @{login}
              </Text>
            </View>
          </View>
          <ChevronRight color={Colors.black} strokeWidth={2.5} size={26} />
        </View>
      </View>
      <View
        className={`absolute ${isPressed && 'hidden'} left-1.5 top-1.5 z-[-9999] size-full rounded-2xl  bg-black`}
      />
    </Pressable>
  );
};
