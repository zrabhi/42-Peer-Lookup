import { IconSymbol } from '@components/ui/IconSymbol.ios';
import { ThemeColors } from '@utils/ThemeColors';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, useColorScheme } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import colors from '@/utils/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ThemeColors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelStyle: {
          fontFamily: 'LexendMega_700Bold',
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginBottom: 10,
          marginTop: 8,
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect

            backgroundColor: ThemeColors[colorScheme ?? 'dark'].background,
            borderTopWidth: 2,
            borderTopColor: colors.black,
            height: 80,
          },
          default: {
            borderTopWidth: 2,
            borderTopColor: colors.black,
            height: 80,
            backgroundColor: ThemeColors[colorScheme ?? 'light'].background,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Test',

          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
