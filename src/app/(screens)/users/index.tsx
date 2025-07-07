import { useGetCurrentUser } from '@api/user/GetUserProfile';
import { Input } from '@components/ui/Input';
import { Loading } from '@components/ui/Loading';
import { UserHeader } from '@components/ui/UserHeader';
import { useAuth } from '@utils/auth/AuthProvider';
import { Search } from 'lucide-react-native';
import { useCallback, useEffect, useState } from 'react';
import {
  Keyboard,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { PaginatedUsersList } from '@/components/PaginatedUsersList';
import { FadeInView } from '@/components/ui/FadeInView';
import { useDebouncedValue } from '@/hooks/UseDebouncedValue';

export default function HomeScreen() {
  const { data, isLoading } = useGetCurrentUser();
  const { setAuthenticatedUser } = useAuth();

  const [searchedUser, setSearchedUser] = useState<string>('');
  const debouncedSearch = useDebouncedValue(searchedUser, 600);

  useEffect(() => {
    if (data) setAuthenticatedUser(data);
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

  const handleOnPress = useCallback(() => Keyboard.dismiss, []);

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView className={`ios:px-6 flex-1 bg-peach`}>
      <TouchableWithoutFeedback className="flex-1" onPress={handleOnPress}>
        <FadeInView className="justify-between gap-5">
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
        </FadeInView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
