import { Stack } from 'expo-router';

export default function ContentLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="settings/index"
        options={{ headerShown: false, presentation: 'modal' }}
      />
    </Stack>
  );
}
