import { useGetUserDetails } from '@api/user/GetUserDetails';
import { AchievementList } from '@components/AchievementsList';
import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { FadeInView } from '@components/ui/FadeInView';
import { Loading } from '@components/ui/Loading';
import { NavigationBar } from '@components/ui/NavigationBar';
import { NavigationHeader } from '@components/ui/NavigationHeader';
import { UserLevelBar } from '@components/ui/UserLevelBar';
import { UserDetailsHeader } from '@components/UserDetailsHeader';
import { UserDetailsInfo } from '@components/UserDetailsInfo';
import { openToaster } from '@utils/Helpers';
import { userDetailsSections } from '@utils/NavigationSections';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Linking, Platform, View } from 'react-native';

import { ErrorOccurredIllustration } from '@/components/icons/ErrorOccurredIllustration';
import { MarksList } from '@/components/MarksList';
import { SkillsList } from '@/components/SkillsList';
import { AlertMessage } from '@/components/ui/AlertMessage';
import { UserStats } from '@/components/UserStats';
import { useUserCursus } from '@/hooks/UseUserCursus';
import { ToastType } from '@/types/ToastType';
import { UserDetailsSections } from '@/types/user/UserDeatilsSections';

export default function UserDetails() {
  const [currentSection, setCurrentSection] = useState<UserDetailsSections>(
    UserDetailsSections.MARKS
  );

  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading, error } = useGetUserDetails(id);

  const cursus = useUserCursus(data?.cursus_users);

  const handleOnPress = useCallback(() => {
    Platform.OS === 'ios' && Haptics.selectionAsync();
    Linking.openURL(`https://profile-v3.intra.42.fr/users/${data.login}`).catch(
      (err) => {
        console.error('Error opening URL:', err);
        openToaster(ToastType.ERROR, 'error .......');
      }
    );
  }, [data]);

  if (isLoading) return <Loading />;

  const campusLocation = data?.campus[0];

  if (!data) return null;

  if (error) {
    return (
      <AlertMessage
        message="Oops! Something went wrong."
        alertIcon={ErrorOccurredIllustration}
      />
    );
  }
  return (
    <ProtectedRoutes>
      <FadeInView slideFrom="right" className="flex-1 bg-peach">
        <NavigationHeader />
        <UserDetailsHeader
          {...data}
          erasureDate={data.data_erasure_date}
          campusLocation={campusLocation.city}
          coalitionColor={data.coalition_color}
          coalitionBackground={data.coalition_cover}
          userImage={data.image.versions.medium}
        />
        <View className="gap-5  px-5 pt-16">
          <UserDetailsInfo onPress={handleOnPress} {...data} />
          <UserStats
            score={data.score}
            correctionPoints={data.correction_point}
            wallet={data.wallet}
          />
          <UserLevelBar
            grade={cursus.grade}
            level={cursus.level}
            maxLevel={21}
          />
          <NavigationBar
            section={currentSection}
            onChangeSection={setCurrentSection}
            navigationSections={userDetailsSections}
          />
        </View>
        <View className="flex-1  gap-1 py-3 ">
          {currentSection === UserDetailsSections.MARKS && (
            <MarksList userLogin={data.login} marks={data.projects_users} />
          )}
          {currentSection === UserDetailsSections.SKILLS && (
            <SkillsList userLogin={data.login} skills={cursus.skills} />
          )}
          {currentSection === UserDetailsSections.ACHIEVEMENTS && (
            <AchievementList
              userLogin={data.login}
              achievements={data.achievements}
            />
          )}
        </View>
      </FadeInView>
    </ProtectedRoutes>
  );
}
