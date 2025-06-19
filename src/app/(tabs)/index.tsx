import { FortyTwoLogo } from '@icons/FortyTwoLogo';
import { View } from 'react-native';

import { useGetUserProfile } from '@/api/user/GetUserProfile';
import { Loading } from '@/components/ui/Loading';

export default function HomeScreen() {
  const { isLoading } = useGetUserProfile();

  if (isLoading) return <Loading />;
  return (
    <View className="flex-1 items-center justify-center  gap-5 bg-peach  px-6">
      <FortyTwoLogo />
    </View>
  );
}
