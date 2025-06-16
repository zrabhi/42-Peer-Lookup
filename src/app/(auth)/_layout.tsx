import { Redirect, Stack } from 'expo-router';

import { useAuth } from '@/utils/auth/AuthProvider';

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();
  console.log('in layout !!!', isAuthenticated);
  if (isAuthenticated) return <Redirect href={'/(tabs)'} />;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
