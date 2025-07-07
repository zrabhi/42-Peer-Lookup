import { Text } from '@components/ui/Text';
import { memo } from 'react';
import { View } from 'react-native';

import { markStatus } from '@/types/user/CursusProject';
import { getRelativeDate } from '@/utils/Helpers';
import { markStateMetadata } from '@/utils/MarkStateMetadata';

import { NeoBruteView } from './ui/NeoBruteView';

interface MarkCardProps {
  status: markStatus;
  date: string | null;
  name: string;
  validated: boolean | null;
  finalMark: number | null;
}

export const MarkCard = memo(
  ({ status, name, date, validated, finalMark }: MarkCardProps) => {
    const meta = markStateMetadata[status];
    const Icon = meta.Icon(validated);
    const color = meta.color(validated);

    return (
      <View className="ios:mb-4 android:pb-4 h-24 flex-row items-center gap-4">
        <NeoBruteView
          className={`h-full w-28 items-center justify-center gap-2 rounded-xl px-2 py-3 `}
        >
          <Icon size={28} color={color} />
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
          <Text textSize={13} style={{ color }} className="font-bold ">
            {status === markStatus.FINISHED ? finalMark + '%' : ''}
          </Text>
          {date && (
            <Text
              textSize={10}
              className="absolute bottom-2 right-2 font-medium text-gray-500"
            >
              {getRelativeDate(date)}
            </Text>
          )}
        </NeoBruteView>
      </View>
    );
  }
);
