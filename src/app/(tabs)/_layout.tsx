import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, useColorScheme,StyleSheet } from 'react-native';

import { HapticTab } from '../components/HapticTab';
import { IconSymbol } from '../components/ui/IconSymbol.ios';
import { ThemeColors } from '../utils/ThemeColors';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  console.log(colorScheme)
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ThemeColors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        
         tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: ThemeColors[colorScheme ?? 'light'].background, 
            borderTopWidth: 0,
          },
          default: {
            height: 60,
            backgroundColor: ThemeColors[colorScheme ?? 'light'].background, 
          },
        })
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
