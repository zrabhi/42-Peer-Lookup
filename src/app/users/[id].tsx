import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { Text } from '@components/ui/Text';
import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import { useGetUserDetails } from '@/api/user/GetUserDetails';
import { Loading } from '@/components/ui/Loading';

export default function UserDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const {  isLoading } = useGetUserDetails(id);

  // console.log('user details is ===>', data && data.displayname)

  if (isLoading) return <Loading />;
  return (
    <ProtectedRoutes>
      <View className="flex-1 items-center justify-center bg-peach">
        <Text>This is User details Screen (to design)</Text>
      </View>
    </ProtectedRoutes>
  );
}
