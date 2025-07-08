import { Button } from '@components/ui/Button';
import { Text } from '@components/ui/Text';
import { useAuth } from '@utils/auth/AuthProvider';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { Platform, View } from 'react-native';

import { NavigationHeader } from '@/components/ui/NavigationHeader';

export default function SettingsScreen() {
  const { signOut, setLoading } = useAuth();

  const handleOnPress = useCallback(async () => {
    setLoading(true); // this is just for testing  purpose
    await signOut();
    setLoading(false); // this one too
    router.replace('/(auth)');
  }, []);

  return (
    <View className=" android:pt-10 flex-1 bg-peach">
      {Platform.OS === 'android' ? (
        <NavigationHeader
          title="Settings"
          className="android:pt-6 android:px-7 flex-row  justify-start gap-10 px-6 "
          isSettingsVisible={false}
        />
      ) : (
        <Text
          textSize={18}
          className="ios:mt-10 android:pt-24  text-center font-bold "
        >
          Settings
        </Text>
      )}
      <View className="ios:px-6 android:px-11  ios:pt-20 android:pt-48">
        <Button
          label="Logout"
          variant="Danger"
          size="lg"
          onPress={async () => handleOnPress()}
        />
      </View>
    </View>
  );
}
