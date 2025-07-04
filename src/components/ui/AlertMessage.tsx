import { Text } from '@components/ui/Text';
import { type ElementType, memo, useMemo } from 'react';
import { View } from 'react-native';
import { type SvgProps } from 'react-native-svg';
import { twMerge } from 'tailwind-merge';
interface EmptyListProps extends SvgProps {
  className?: string;
  message?: string;
  textSize?: number;
  alertIcon: ElementType;
}

export const AlertMessage = memo(
  ({
    alertIcon: AlertIcon,
    className,
    message,
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

    return (
      <View className={style}>
        <AlertIcon {...rest} />
        <Text textSize={textSize} className="text-center  font-bold ">
          {message}
        </Text>
      </View>
    );
  }
);
