import { type ElementType, memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface EmptyListProps {
  className?: string;
  message?: string;
  alertIcon: ElementType;
}

export const AlertMessage = memo(
  ({ alertIcon: AlertIcon, className, message }: EmptyListProps) => {
    const style = useMemo(
      () => twMerge('flex-1 justify-center gap-28 items-center ', className),
      [className]
    );
    return (
      <View className={style}>
        <AlertIcon />
        <Text className="text-center  font-bold text-2xl">{message}</Text>
      </View>
    );
  }
);
