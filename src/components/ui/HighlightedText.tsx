import React, { type ReactNode } from 'react';
import { View, type ViewStyle } from 'react-native';

import Colors from '@/utils/Colors';

interface HighlightedTextProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
  style?: ViewStyle;
}

export const HighlightedText = ({
  children,
  backgroundColor = Colors.highlight,
  className = '',
  style,
}: HighlightedTextProps) => {
  return (
    <View
      className={` rounded-full p-1 ${className}`}
      style={[{ backgroundColor }, style]}
    >
      {children}
    </View>
  );
};
