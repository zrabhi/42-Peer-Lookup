import Colors from '@/utils/Colors';
import React, { type ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

interface HighlightedTextProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
  style?: ViewStyle;
}

export const HighlightedText = ({
  children,
  backgroundColor = Colors.Primary,
  className = '',
  style,
}: HighlightedTextProps) => {
  return (
    <View
      className={`  p-1 rounded-full ${className}`}
      style={[{ backgroundColor,  }, style]}
    >
      {children}
    </View>
  );
};
