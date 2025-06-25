import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Settings } from 'lucide-react-native';
import { memo, useCallback, useMemo } from 'react';
import { Platform, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { useAuth } from '@/utils/auth/AuthProvider';

import { NImage } from '../Image';
import { Button } from './Button';

interface UserHeaderProps {
  className?: string;
}

// TODO: add user collision

// WHEN CLICKED i t will rout the user to /[id].tsx user details

export const UserHeader = memo(({ className = '' }: UserHeaderProps) => {
  const { authenticatedUser } = useAuth();

  const style = useMemo(
    () => twMerge('flex-row items-center justify-between', className),
    [className]
  );

  const handleOnPress = useCallback(() => {
    Platform.OS === 'ios' && Haptics.selectionAsync(), router.push('/settings');
  }, []);

  return (
    <View className={style}>
      <View className="flex-row  items-center gap-4">
        <NImage imageSource={authenticatedUser.image_url} />
        <View className="justify-center gap-1">
          <Text className="font-bold text-lg">
            {authenticatedUser.displayname ?? ''}
          </Text>
          <View className="flex-row items-center gap-2">
            <Image
              source={authenticatedUser.coalition_image}
              tintColor={authenticatedUser.coalition_color}
              style={{ width: 14, height: 22 }}
            />
            <Text className="font-normal text-sm text-gray-100">
              {authenticatedUser.coalition_name}
            </Text>
          </View>
        </View>
      </View>
      <View className="pr-1">
        <Button onPress={handleOnPress} buttonIcon={Settings} isIcon />
      </View>
    </View>
  );
});
