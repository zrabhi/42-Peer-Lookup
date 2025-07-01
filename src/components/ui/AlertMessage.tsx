import { type ElementType, memo, useMemo } from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { Text } from '@components/ui/Text';
interface EmptyListProps {
  className?: string;
  message?: string;
  alertIcon: ElementType;
}

export const AlertMessage = memo(
  ({ alertIcon: AlertIcon, className, message }: EmptyListProps) => {
    
    const style = useMemo(
      () =>
        twMerge(
          'flex-1 justify-center gap-28 items-center bg-peach ',
          className
        ),
      [className]
    );

    return (
      <View className={style}>
        <AlertIcon />
        <Text textSize={20} className="text-center  font-bold text-2xl">
          {message}
        </Text>
      </View>
    );
  }
);
