import { useGetCurrentUser } from '@api/user/GetUserProfile';
import { Input } from '@components/ui/Input';
import { Loading } from '@components/ui/Loading';
import { UserHeader } from '@components/ui/UserHeader';
import { useAuth } from '@utils/auth/AuthProvider';
import { Search } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { UsersList } from '@/components/UsersList';

export default function HomeScreen() {
  const [searchedUser, setSearchedUser] = useState<string>('');

  const { data, isLoading } = useGetCurrentUser();

  const { setAuthenticatedUser } = useAuth();

  useEffect(() => {
    if (data) setAuthenticatedUser(data);
  }, [setAuthenticatedUser, data]);

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView className="flex-1  bg-peach  px-6">
      <UserHeader className="p-5" />
      <View className="p-6">
        <Input
          inputIcon={Search}
          value={searchedUser}
          placeholder="Search for your peers..."
          onChangeText={setSearchedUser}
        />
      </View>
      <UsersList />
    </SafeAreaView>
  );
}
