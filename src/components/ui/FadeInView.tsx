import React, { useEffect, useMemo, useRef } from 'react';
import {
  Animated,
  type StyleProp,
  StyleSheet,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import { twMerge } from 'tailwind-merge';

type SlideDirection = 'bottom' | 'top' | 'left' | 'right';

interface FadeInViewProps extends ViewProps {
  duration?: number;
  className?: string;
  children: React.ReactNode;
  slideFrom?: SlideDirection;
}

export const FadeInView = ({
  children,
  className,
  duration = 500,
  slideFrom,
  ...rest
}: FadeInViewProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(0)).current;

  const containerClass = useMemo(
    () => twMerge('flex-1', className),
    [className]
  );

  const getInitialTranslate = (direction: SlideDirection): number => {
    const distance = 20;
    return direction === 'top' || direction === 'left' ? -distance : distance;
  };

  useEffect(() => {
    if (slideFrom) {
      translate.setValue(getInitialTranslate(slideFrom));
    }

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [duration, slideFrom]);

  const animatedStyle: StyleProp<ViewStyle> = {
    opacity,
    transform: slideFrom
      ? [
          slideFrom === 'left' || slideFrom === 'right'
            ? { translateX: translate }
            : { translateY: translate },
        ]
      : undefined,
  };

  return (
    <Animated.View
      className={containerClass}
      style={StyleSheet.flatten([animatedStyle])}
      {...rest}
    >
      {children}
    </Animated.View>
  );
};
