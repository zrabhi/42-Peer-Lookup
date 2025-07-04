import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <ProtectedRoutes>
      <Stack>
        <Stack.Screen
          name="users/index"
          options={{
            title: 'Users',
            headerShown: false,
          }}
        />
      </Stack>
    </ProtectedRoutes>
  );
}
