import { Redirect, Stack } from 'expo-router';
import { Platform } from 'react-native';

import { AppRoutes } from '@/api/Common';
import { useAuth } from '@/utils/auth/AuthProvider';

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Redirect href={AppRoutes.users} />;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          animation: Platform.OS === 'android' ? 'slide_from_right' : undefined,
        }}
      />
    </Stack>
  );
}
