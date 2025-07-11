import { Text } from '@components/ui/Text';
import { router } from 'expo-router';
import { type ElementType, memo, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { type SvgProps } from 'react-native-svg';
import { twMerge } from 'tailwind-merge';

import { Button } from './Button';
interface EmptyListProps extends SvgProps {
  className?: string;
  message?: string;
  textSize?: number;
  isError?: boolean;
  alertIcon: ElementType;
}

export const AlertMessage = memo(
  ({
    alertIcon: AlertIcon,
    className,
    message,
    isError = false,
    textSize = 20,
    ...rest
  }: EmptyListProps) => {
    const style = useMemo(
      () =>
        twMerge(
          'flex-1 justify-center gap-28 items-center bg-peach',
          className
        ),
      [className]
    );

    const handleOnPress = useCallback(
      () => router.replace('/(protected)/users'),
      []
    );

    return (
      <View className={style}>
        <AlertIcon {...rest} />
        <Text textSize={textSize} className="text-center font-bold ">
          {message}
        </Text>
        {isError && (
          <View className="w-full px-10  ">
            <Button
              label="Go to Home page"
              variant="Secondary"
              size="lg"
              onPress={handleOnPress}
            />
          </View>
        )}
      </View>
    );
  }
);
