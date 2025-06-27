import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { Text } from '@components/ui/Text';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Linking, Platform, Pressable, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useGetUserDetails } from '@/api/user/GetUserDetails';
import { Loading } from '@/components/ui/Loading';
import { NavigationBar } from '@/components/ui/NavigationBar';
import { UserDetailsHeader } from '@/components/UserDetailsHeader';
import { UserStats } from '@/components/UserStats';
import { UserDetailsSections } from '@/types/user/UserDeatilsSections';
import { userDetailsSections } from '@/utils/NavigationSections';
import { SquareArrowUpRight } from 'lucide-react-native';
import Colors from '@/utils/Colors';
import { Button } from '@/components/ui/Button';
import { getLatestLevel, openToaster } from '@/utils/Helpers';
import { ToastType } from '@/types/ToastType';
import { UserLevelBar } from '@/components/ui/UserLevelBar';

const coalitionBackground = require('@assets/images/pandora-bg.png');

export default function UserDetails() {
  const [currentSection, setCurrentSection] = useState<UserDetailsSections>(
    UserDetailsSections.MARKS
  );

  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading } = useGetUserDetails(id);

  const handleOnPress = useCallback(() => {
    Platform.OS === 'ios' && Haptics.selectionAsync();
    Linking.openURL(`https://profile-v3.intra.42.fr/users/${data.login}`).catch(
      (err) => {
        openToaster(ToastType.ERROR, 'error .......');
      }
    );
  }, [data]);

  if (isLoading) return <Loading />;

  if (!data) return null;
  return (
    <ProtectedRoutes>
      <View className="flex-1 pt-16 bg-peach">
        <UserDetailsHeader
          onPress={handleOnPress}
          userlevel={getLatestLevel(data.cursus_users)}
          userImage={data.image.versions.medium}
          userName={data.displayname}
          userLocation={data.location}
          userLogin={data.login}
        />
        <View className="gap-8  pt-8 px-5">
          <UserStats wallet={885} rank={51} score={1645} />
          <UserLevelBar level={13} maxLevel={21} />
          <NavigationBar
            section={currentSection}
            onChangeSection={setCurrentSection}
            navigationSections={userDetailsSections}
          />
        </View>
        <View className="flex-1 items-center justify-center ">
          {currentSection === UserDetailsSections.MARKS ? (
            <Text textSize={16} className="font-bold">
              {' '}
              Marks List
            </Text>
          ) : (
            <Text textSize={16} className="font-bold">
              {' '}
              AChievements List
            </Text>
          )}
        </View>
      </View>
    </ProtectedRoutes>
  );
}
