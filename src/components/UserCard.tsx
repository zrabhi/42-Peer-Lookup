import { Text } from '@components/ui/Text';
import { ChevronRight, Telescope } from 'lucide-react-native';
import { View } from 'react-native';

import { UserKind } from '@/types/UserKind';
import Colors from '@/utils/Colors';

import { NImage } from './Image';
interface UserCardProps {
  kind: UserKind;
  displayname: string | null;
  location?: string | null;
  image: string | null;
}

export const UserCard = ({ kind, displayname, image }: UserCardProps) => {
  return (
    <View className="relative w-full">
      <View className="rounded-3xl  border border-black bg-white p-6">
        <View className="absolute -top-4 right-10 rounded-full bg-primary-100 px-4 py-2">
          <Text textSize={14} className="font-bold  text-white">
            {kind === UserKind.ADMIN ? "Staff" : kind}
          </Text>
        </View>
        <View className="flex-1 flex-row items-center justify-between">
          <View className="flex-1 flex-row  items-center  gap-4">
            <NImage imageSource={image} />
            <View className="flex-1 gap-2">
              <Text
                lineBreakMode="tail"
                numberOfLines={2}
                textSize={16}
                className="font-bold "
              >
                {displayname}
              </Text>
              <View className="flex-row items-center gap-2">
                <Telescope color={Colors.gray[100]} />
                <Text className="font-normal text-gray-100">
                  1337 khouribga
                </Text>
              </View>
            </View>
          </View>
          <ChevronRight color={Colors.black} strokeWidth={2.5} size={26} />
        </View>
      </View>
      <View className="absolute left-1.5 top-1.5 z-[-9999] size-full rounded-3xl  bg-black" />
    </View>
  );
};
