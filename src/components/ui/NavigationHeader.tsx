import { memo, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Text } from './Text';
import { Button } from './Button';
import { ArrowLeft } from 'lucide-react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
