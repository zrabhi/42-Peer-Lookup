import { ProtectedRoutes } from '@components/ProtectedRoutes';

import { useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Linking, Platform, Pressable, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useGetUserDetails } from '@api/user/GetUserDetails';
import { Loading } from '@components/ui/Loading';
import { NavigationBar } from '@components/ui/NavigationBar';
import { UserDetailsHeader } from '@components/UserDetailsHeader';
import { UserStats } from '@components/UserStats';
import { UserDetailsSections } from '@/types/user/UserDeatilsSections';
import { userDetailsSections } from '@utils/NavigationSections';
import { getLatestLevel, openToaster } from '@utils/Helpers';
import { ToastType } from '@/types/ToastType';
import { UserLevelBar } from '@components/ui/UserLevelBar';
import { NavigationHeader } from '@components/ui/NavigationHeader';
import { NoResultIllustration } from '@components/icons/NoResultIllustration';
import { useUserLevel } from '@hooks/useUserCursus';
import { UserDetailsInfo } from '@/components/UserDetailsInfo';
import { AchievementCard } from '@/components/AchievementCard';

export default function UserDetails() {
  const [currentSection, setCurrentSection] = useState<UserDetailsSections>(
    UserDetailsSections.MARKS
  );

  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading } = useGetUserDetails(id);
  
  const level = useUserLevel(data?.cursus_users);

  const handleOnPress = useCallback(() => {
    Platform.OS === 'ios' && Haptics.selectionAsync();
    Linking.openURL(`https://profile-v3.intra.42.fr/users/${data.login}`).catch(
      (err) => {
        openToaster(ToastType.ERROR, 'error .......');
      }
    );
  }, [data]);

  if (isLoading) return <Loading />;

  const campusLocation = data?.campus?.[0]?.name || 'Unknown Location';
  
  if (!data) return null;
  return (
    <ProtectedRoutes>
      <View className="flex-1 bg-peach">
        <NavigationHeader  />
        <UserDetailsHeader
          {...data}
          coalitionBackground={data.coalition_cover}
          userImage={data.image.versions.medium}
        />
        <View className="gap-8  pt-16 px-5">
          <UserDetailsInfo campusLocation={campusLocation} onPress={handleOnPress} {...data} />
          <UserLevelBar level={level} maxLevel={21} />
          <UserStats wallet={data.wallet} rank={data.correction_point} score={data.score} />
          <NavigationBar
            section={currentSection}
            onChangeSection={setCurrentSection}
            navigationSections={userDetailsSections}
          />
        </View>
        <View className="flex-1 items-center justify-center ">
          {currentSection === UserDetailsSections.MARKS ? (
            <NoResultIllustration />
          ) : (
            <AchievementCard/>
          )}
        </View>
      </View>
    </ProtectedRoutes>
  );
}
