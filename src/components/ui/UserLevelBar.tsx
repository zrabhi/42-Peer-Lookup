import React, { memo, useEffect, useMemo, useRef } from 'react';
import { View, Animated } from 'react-native';
import { Text } from '@components/ui/Text';
import { NeoBruteView } from './NeoBruteView';
import Colors from '@/utils/Colors';

type LevelBarProps = {
  level: number;
  maxLevel?: number;
};

export const UserLevelBar = memo(({ level, maxLevel = 21 }: LevelBarProps) => {
  const percentage = useMemo(
    () => Math.min((level / maxLevel) * 100, 100),
    [level, maxLevel]
  );

  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: percentage,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const widthInterpolated = useMemo(
    () =>
      animatedWidth.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
      }),
    [animatedWidth]
  );

  return (
    <View className=" w-full ">
      <NeoBruteView className="h-9 w-full  rounded-lg ">
        <Animated.View
          style={{
            height: '100%',
            borderRadius: 5,
            backgroundColor: Colors.primary[200],
            width: widthInterpolated,
          }}
        ></Animated.View>
        <Text
          textSize={10}
          className="font-bold top-1.5  z-99 absolute self-center  text-gray-700"
        >
          Level: {level.toFixed(2)}% / {maxLevel} ({percentage.toFixed(2)}%)
        </Text>
      </NeoBruteView>
    </View>
  );
});
