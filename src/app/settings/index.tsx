import { Button } from '@components/ui/Button';
import { Text } from '@components/ui/Text';
import { useAuth } from '@utils/auth/AuthProvider';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { View } from 'react-native';

export default function SettingsScreen() {
  const { signOut, setLoading } = useAuth();

  const handleOnPress = useCallback(async () => {
    setLoading(true); // this is just for testing  purpose
    await signOut();
    setLoading(false); // this one too
    router.replace('/(auth)');
  }, []);

  return (
    <View className="flex-1 w-1/ bg-peach">
      <Text textSize={18} className="pt-10 text-center font-bold ">
        Settings
      </Text>
      <View className="px-6   pt-20">
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
