import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/utils/auth/AuthProvider';
import { AppRoutes } from '@/api/Common';

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  console.log('in AuthLayout layout !!!', isAuthenticated);

  if (isAuthenticated) return <Redirect href={AppRoutes.users} />;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
