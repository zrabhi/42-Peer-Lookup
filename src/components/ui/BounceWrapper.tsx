// components/animations/BounceWrapper.tsx
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, type ViewProps, type ViewStyle } from 'react-native';

interface BounceWrapperProps extends ViewProps {
  children: React.ReactNode;
  bounceHeight?: number;
  duration?: number;
  style?: ViewStyle;
  delay?: number;
  loop?: boolean;
}

export const BounceWrapper = ({
  children,
  bounceHeight = 6,
  duration = 1000,
  delay = 0,
  loop = true,
  style,
}: BounceWrapperProps) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const bounce = Animated.sequence([
      Animated.timing(translateY, {
        toValue: -bounceHeight,
        duration: duration / 2,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
        delay,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: duration / 2,
        useNativeDriver: true,
        easing: Easing.in(Easing.quad),
      }),
    ]);

    if (loop) {
      Animated.loop(bounce).start();
    } else {
      bounce.start();
    }
  }, [translateY, bounceHeight, duration, delay, loop]);

  return (
    <Animated.View style={[{ transform: [{ translateY }] }, style]}>
      {children}
    </Animated.View>
  );
};
