import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { Text } from '@components/ui/Text';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import { useGetUserDetails } from '@/api/user/GetUserDetails';
import { Loading } from '@/components/ui/Loading';
import { NeoBruteView } from '@/components/ui/NeoBruteView';
import { UserDetailsHeader } from '@/components/UserDetailsHeader';
import { UserStats } from '@/components/UserStats';

const coalitionBackground = require('@assets/images/pandora-bg.png');

export default function UserDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading } = useGetUserDetails(id);

  if (isLoading) return <Loading />;
  if (!data) return null; // return something else other than null

  return (
    <ProtectedRoutes>
      <View className="flex-1 bg-peach">
        <View className="items-center">
          <UserDetailsHeader
            displayname={data.displayname}
            login={data.login}
            userImage={data.image.versions.medium}
            coalitionBackground={coalitionBackground}
          />
        </View>
        <View className="pt-16 items-center gap-1">
          <Text textSize={18} className="font-bold">
            {data.displayname}
          </Text>
          <Text textSize={14} className="text-gray-100 font-medium">
            @{data.login}
          </Text>
        </View>
        <UserStats  wallet={885} rank={51} score={1645} />
      </View>
    </ProtectedRoutes>
  );
}
