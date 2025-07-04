import { router } from 'expo-router';
import { ArrowLeft, Settings } from 'lucide-react-native';
import { memo, useCallback } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

import { useHaptics } from '@/hooks/UseHaptics';

import { Button } from './Button';
import { Text } from './Text';

interface NavigationHeaderProps {
  title?: string;
  className?: string;
}

export const NavigationHeader = memo(
  ({ className = '', title = '' }: NavigationHeaderProps) => {
    const insets = useSafeAreaInsets();

    const { triggerImpact } = useHaptics();

    const handleOnPress = useCallback(() => router.back(), []);

    const handleOnPressSettings = useCallback(() => {
      triggerImpact(), router.push('/settings');
    }, []);

    return (
      <View
        style={{ marginTop: insets.top + 30 }}
        className={twMerge(
          'absolute z-50 w-full flex-row items-center justify-between px-4 bg-transparent',
          className
        )}
      >
        <Button isIcon buttonIcon={ArrowLeft} onPress={handleOnPress} />
        {title && (
          <Text textSize={18} className="font-bold ">
            {title}
          </Text>
        )}
        <Button onPress={handleOnPressSettings} buttonIcon={Settings} isIcon />
      </View>
    );
  }
);
