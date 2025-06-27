import { useGetCurrentUser } from '@api/user/GetUserProfile';
import { Input } from '@components/ui/Input';
import { Loading } from '@components/ui/Loading';
import { UserHeader } from '@components/ui/UserHeader';
import { useAuth } from '@utils/auth/AuthProvider';
import { Search } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  Animated,
  Platform,
  SafeAreaView,
  useAnimatedValue,
  View,
} from 'react-native';

import { PaginatedUsersList } from '@/components/PaginatedUsersList';
import { useDebouncedValue } from '@/hooks/UseDebouncedValue';

export default function HomeScreen() {
  const { data, isLoading } = useGetCurrentUser();
  const { setAuthenticatedUser } = useAuth();

  const [searchedUser, setSearchedUser] = useState<string>('');
  const debouncedSearch = useDebouncedValue(searchedUser, 400);

  const fadeAnim = useAnimatedValue(0);
  console.log(data)
  useEffect(() => {
    if (data) {
      setAuthenticatedUser(data);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [data, setAuthenticatedUser]);
  // scroll fucntion to hide or show the searchBar or the tab bar based on the Scroll Y
  /* const handleOnScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: true,
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentY = event.nativeEvent.contentOffset.y;

        if (currentY > lastScrollY.current && currentY > 50) {
          setIsSearchVisible(false); // Scrolling down
        } else if (currentY < lastScrollY.current) {
          setIsSearchVisible(true); // Scrolling up
        }

        lastScrollY.current = currentY;
      },
    }
  ); */

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
          className={`${Platform.OS === 'android' ? 'px-5 pt-14' : 'p-5'}`}
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
