import { SafeAreaView, View } from 'react-native';

import { useGetCurrentUser } from '@/api/user/GetUserProfile';
import { Loading } from '@components/ui/Loading';
import { UserHeader } from '@components/ui/UserHeader';
import { useEffect } from 'react';
import { useAuth } from '@/utils/auth/AuthProvider';

export default function HomeScreen() {
  const { data, isLoading } = useGetCurrentUser();

  const { setAuthenticatedUser } = useAuth();

  useEffect(() => {
    if (data) setAuthenticatedUser(data);
  }, [setAuthenticatedUser, data]);

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView className="flex-1  bg-peach  px-6">
      <UserHeader className="p-5" />
    </SafeAreaView>
  );
}
