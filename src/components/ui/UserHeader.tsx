import { memo, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { NImage } from '../Image';
import { Settings } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useAuth } from '@/utils/auth/AuthProvider';
import { Image } from 'expo-image';

interface UserHeaderProps {
  className?: string;
}

// TODO: add user collision

// WHEN CLICKED i t will rout the user to /[id].tsx user details

export const UserHeader = memo(({ className = '' }: UserHeaderProps) => {
  const { authenticatedUser } = useAuth();
console.log(authenticatedUser)
  const style = useMemo(
    () => twMerge('flex-row items-center justify-between', className),
    [className]
  );

  return (
    <View className={style}>
      <View className="flex-row items-center gap-4">
        <NImage
          imageSource={authenticatedUser.image_url}
          className="w-12 h-12 rounded-full"
        />
        <View className="gap-1 justify-center">
          <Text className="font-bold text-lg">
            {authenticatedUser.displayname ?? ''}
          </Text>
          <View className='flex-row items-center gap-2'>
            <Image
              source={authenticatedUser.coalition_image}
              tintColor={authenticatedUser.coalition_color}
              style={{width:14, height:22}}
            />
          <Text className="text-gray-100 font-normal text-sm">{authenticatedUser.coalition_name}</Text>
          </View>
        </View>
      </View>

      <Pressable
        onPressIn={() =>
          process.env.EXPO_OS === 'ios' && Haptics.selectionAsync()
        }
        className="size-12 bg-primary-200 rounded-full border-2 border-black items-center justify-center"
      >
        <Settings strokeWidth={2.5} />
      </Pressable>
    </View>
  );
});
