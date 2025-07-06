import React, { memo, type ReactNode, useCallback, useState } from 'react';
import { type LayoutChangeEvent, View, type ViewStyle } from 'react-native';

import Colors from '@/utils/Colors';

import { ScribbleLine } from '../icons/ScribblleLine';

interface HighlightedTextProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
  style?: ViewStyle;
  showUnderline?: boolean;
}

export const HighlightedText = memo(
  ({
    children,
    backgroundColor = Colors.highlight,
    className = '',
    style,
    showUnderline = true,
  }: HighlightedTextProps) => {
    const [contentWidth, setContentWidth] = useState(0);

    const handleLayout = useCallback((event: LayoutChangeEvent) => {
      setContentWidth(event.nativeEvent.layout.width);
    }, []);

    return (
      <View
        className={`relative rounded-full p-1 ${className}`}
        style={[{ backgroundColor }, style]}
        onLayout={handleLayout}
      >
        {children}

        {showUnderline && contentWidth > 0 && (
          <View
            className="absolute -bottom-2 left-0"
            style={{ width: contentWidth }}
          >
            <ScribbleLine width={contentWidth} height={20} />
          </View>
        )}
      </View>
    );
  }
);
