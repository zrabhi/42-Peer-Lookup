import { FortyTwoLogo } from '@icons/FortyTwoLogo';
import { SafeAreaView, View } from 'react-native';

import { useGetCurrentUser } from '@/api/user/GetUserProfile';
import { Loading } from '@components/ui/Loading';
import { UserHeader } from '@components/ui/UserHeader';

export default function HomeScreen() {
  const { isLoading } = useGetCurrentUser();

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView className="flex-1  bg-peach  px-6">
      <UserHeader className='p-5'  />
    </SafeAreaView>
  );
}
