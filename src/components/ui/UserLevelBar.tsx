import { Text } from '@components/ui/Text';
import React, { memo, useEffect, useMemo, useRef } from 'react';
import { Animated, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

import { type UserGrade } from '@/types/user/UserCursusStat';
import { UserGradeLabels } from '@/utils/UserGradeLabes';

const LINE_COUNT = 20;
const LINE_SPACING = 10;

const DOODLE_LINES = Array.from({ length: LINE_COUNT }, (_, i) => {
  const x = i * LINE_SPACING;
  return (
    <Line
      key={i}
      x1={x}
      y1="0"
      x2={x}
      y2="100%"
      stroke="#ffffff55"
      strokeWidth="1"
      strokeDasharray="4,3"
    />
  );
});

type LevelBarProps = {
  level: number;
  grade?: UserGrade;
  maxLevel?: number;
};

export const UserLevelBar = memo(
  ({ level, maxLevel = 21, grade }: LevelBarProps) => {
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

    const widthInterpolated = animatedWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    });

    return (
      <View className="w-full">
        {grade && (
          <Text textSize={10} className="mb-1 self-center font-bold italic">
            {UserGradeLabels[grade]}
          </Text>
        )}

        <View className="relative h-10 w-full overflow-hidden rounded-xl border-2 border-dashed border-black bg-white">
          <Animated.View
            className="absolute left-0 top-0 z-10 rounded-xl h-full overflow-hidden bg-primary-200"
            style={{
              width: widthInterpolated,
            }}
          >
            <Svg height="100%" width="100%">
              {DOODLE_LINES}
            </Svg>
          </Animated.View>
          <Text
            textSize={10}
            className="absolute top-1.5  z-30 self-center font-bold  text-gray-700"
          >
            {level.toFixed(2)} / {maxLevel} ({percentage.toFixed(2)}%)
          </Text>
        </View>
      </View>
    );
  }
);
