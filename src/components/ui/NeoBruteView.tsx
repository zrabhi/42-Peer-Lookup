import Colors from '@utils/Colors';
import { memo, type ReactNode, useMemo } from 'react';
import {
  type StyleProp,
  StyleSheet,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import { twMerge } from 'tailwind-merge';

interface NeoBruteViewProps extends ViewProps {
  children: ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

export const NeoBruteView = memo(
  ({ children, style, className, ...rest }: NeoBruteViewProps) => {
    const viewClassName = useMemo(
      () => twMerge('border-[2px] border-black bg-white rounded-lg', className),
      [className]
    );

    const viewStyle: ViewStyle = useMemo(
      () =>
        StyleSheet.flatten([
          {
            shadowColor: Colors.black,
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 0,
            elevation: 4,
          },
          style,
        ]),
      [style]
    );

    return (
      <View className={viewClassName} style={viewStyle} {...rest}>
        {children}
      </View>
    );
  }
);
