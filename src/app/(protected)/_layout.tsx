import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { Stack } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <ProtectedRoutes>
      <Stack>
        <Stack.Screen
          name="users/index"
          options={{
            title: 'Users',
            headerShown: false,
            animation:
              Platform.OS === 'android' ? 'slide_from_right' : undefined,
          }}
        />
        <Stack.Screen
          name="users/[id]"
          options={{
            headerShown: false,
            animation:
              Platform.OS === 'android' ? 'slide_from_right' : undefined,
          }}
        />
        <Stack.Screen
          name="settings/index"
          options={{
            headerShown: false,
            presentation: 'modal',
            animation:
              Platform.OS === 'android' ? 'slide_from_bottom' : undefined,
          }}
        />
      </Stack>
    </ProtectedRoutes>
  );
}
