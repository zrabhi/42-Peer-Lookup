import { memo, useMemo } from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';
interface NavigationHeader {
  title: string;
  className?: string;
}

export const NavigationHeader = memo(
  ({ className = ''}: NavigationHeader) => {
    const style = useMemo(() => twMerge('', className), [className]);

    return <View className={style}></View>;
  }
);
