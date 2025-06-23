import { useGetCurrentUser } from '@api/user/GetUserProfile';
import { Input } from '@components/ui/Input';
import { Loading } from '@components/ui/Loading';
import { UserHeader } from '@components/ui/UserHeader';
import { useAuth } from '@utils/auth/AuthProvider';
import { Search } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Platform, SafeAreaView, View, Animated } from 'react-native';

import { PaginatedUsersList } from '@/components/PaginatedUsersList';
import { useDebouncedValue } from '@/hooks/UseDebouncedValue';

export default function HomeScreen() {
  const { data, isLoading } = useGetCurrentUser();
  const { setAuthenticatedUser } = useAuth();
  
  const [searchedUser, setSearchedUser] = useState<string>('');
  const [fadeAnim] = useState(new Animated.Value(0));
   const debouncedSearch =  useDebouncedValue(searchedUser, 400)

  useEffect(() => {
    if (data) {
      setAuthenticatedUser(data);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [data, setAuthenticatedUser]);

  if (isLoading) return <Loading />;
  return (
    <SafeAreaView
      className={`flex-1  bg-peach ${Platform.OS === 'ios' ? 'px-6' : ''}`}
    >
      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          gap: 20,
          opacity: fadeAnim,
        }}
      >
        <UserHeader
          className={`${Platform.OS === 'android' ? 'pt-14 px-5' : 'p-5'}`}
        />
        <View className="px-6">
          <Input
            inputIcon={Search}
            value={searchedUser}
            placeholder="Search for your peers..."
            onChangeText={setSearchedUser}
          />
        </View>
        <PaginatedUsersList searchedUser={debouncedSearch} />
      </Animated.View>
    </SafeAreaView>
  );
}
