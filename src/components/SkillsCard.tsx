import { Text } from '@components/ui/Text';
import { memo } from 'react';
import { View } from 'react-native';

import { skillsStateMetadata } from '@/utils/SkillsStateMetadata';

import { NeoBruteView } from './ui/NeoBruteView';
import { UserLevelBar } from './ui/UserLevelBar';

interface SkillsCardProps {
  name: string;
  level: number;
}

export const SkillsCard = memo(({ name, level }: SkillsCardProps) => {
  const meta = skillsStateMetadata[name];
  const Icon = meta.Icon();
  const color = meta.color();

  return (
    <View className="ios:mb-4  android:pb-4  h-24 flex-row items-center  gap-4 bg-transparent ">
      <NeoBruteView className="h-full w-28 items-center justify-center gap-2 rounded-xl px-2 py-3 ">
        <Icon size={28} color={color} />
      </NeoBruteView>
      <NeoBruteView
        className={`h-full flex-1  justify-center gap-4 rounded-xl  px-3  `}
      >
        <Text textSize={12} className="max-w-[85%] font-bold text-black">
          {name}
        </Text>
        <UserLevelBar
          level={level}
          maxLevel={21}
          className="h-5"
          backgroundColor={color}
        />
      </NeoBruteView>
    </View>
  );
});
