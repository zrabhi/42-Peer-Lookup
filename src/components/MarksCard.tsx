import { Text } from '@components/ui/Text';
import { memo } from 'react';
import { View } from 'react-native';

import { markStatus } from '@/types/user/CursusProject';
import { markStateMetadata } from '@/utils/MarkStateMetadata';

import { NeoBruteView } from './ui/NeoBruteView';

interface MarkCardProps {
  status: markStatus;
  name: string;
  validated: boolean | null;
  finalMark: number | null;
}

export const MarkCard = memo(
  ({ status, name, validated, finalMark }: MarkCardProps) => {
    const meta = markStateMetadata[status];
    const Icon = meta.markIcon(validated);
    const bgColor = meta.color(validated);

    return (
      <View className="ios:mb-4 android:pb-4 h-24 flex-row items-center gap-4">
        <NeoBruteView
          className={`h-full w-28 items-center justify-center gap-2 rounded-xl px-2 py-3 `}
        >
          <Icon size={28} color={bgColor} />
          <Text textSize={9} className="text-center font-semibold">
            {status.replace(/_/g, '')}
          </Text>
        </NeoBruteView>

        <NeoBruteView
          className={`h-full flex-1 flex-row items-center justify-between rounded-xl  px-3  `}
        >
          <Text textSize={12} className="max-w-[85%] font-bold text-black">
            {name}
          </Text>
          <Text textSize={13} style={{ color: bgColor }} className="font-bold ">
            {status === markStatus.FINISHED ? finalMark + '%' : ''}
          </Text>
        </NeoBruteView>
      </View>
    );
  }
);
