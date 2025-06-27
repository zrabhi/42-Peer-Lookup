import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { memo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

import { Button } from './Button';
import { Text } from './Text';

interface NavigationHeaderProps {
  title: string;
  className?: string;
}

export const NavigationHeader = memo(
  ({ className = '', title }: NavigationHeaderProps) => {
    const insets = useSafeAreaInsets();

    const handleOnPress = useCallback(() => router.back(), []);

    return (
      <View
        style={{ marginTop: insets.top + 30 }}
        className={twMerge(
          'h-14 pl-6 max-w-[40%] absolute flex-row items-center  bg-transparent z-50',
          className
        )}
      >
        <Button
          isIcon
          shape="square"
          buttonIcon={ArrowLeft}
          onPress={handleOnPress}
        />
        <Text textSize={18} className="font-bold ">
          {title}
        </Text>
      </View>
    );
  }
);

