import { router } from 'expo-router';
import { ArrowLeft, Settings } from 'lucide-react-native';
import { memo, useCallback } from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { twMerge } from 'tailwind-merge';

import { useHaptics } from '@/hooks/UseHaptics';

import { Button } from './Button';
import { Text } from './Text';

interface NavigationHeaderProps {
  title?: string;
  className?: string;
  isSettingsVisible?: boolean;
}

export const NavigationHeader = memo(
  ({
    className = '',
    title = '',
    isSettingsVisible = true,
  }: NavigationHeaderProps) => {
    const insets = useSafeAreaInsets();

    const { triggerImpact } = useHaptics();

    const handleOnPress = useCallback(() => {
      triggerImpact(), router.back();
    }, []);

    const handleOnPressSettings = useCallback(() => {
      triggerImpact(), router.push('/(protected)/settings');
    }, []);

    return (
      <View
        style={{ marginTop: insets.top + 30 }}
        className={twMerge(
          'absolute z-50 w-full flex-row items-center justify-between android:px-5 px-4  bg-transparent',
          className
        )}
      >
        <Button isIcon buttonIcon={ArrowLeft} onPress={handleOnPress} />
        {title && (
          <Text
            textSize={Platform.OS === 'ios' ? 18 : 20}
            className="font-bold "
          >
            {title}
          </Text>
        )}

        {isSettingsVisible && (
          <Button
            onPress={handleOnPressSettings}
            buttonIcon={Settings}
            isIcon
          />
        )}
      </View>
    );
  }
);
