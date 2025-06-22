import { clearStorage } from '@/utils/Storage';
import { HapticTab } from '@components/HapticTab';
import { ProtectedRoutes } from '@components/ProtectedRoutes';
import { IconSymbol } from '@components/ui/IconSymbol.ios';
import colors from '@utils/Colors';
import { ThemeColors } from '@utils/ThemeColors';
import { Tabs } from 'expo-router';
import { Cctv } from 'lucide-react-native';
import React, { useEffect } from 'react';
import { Platform, useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <ProtectedRoutes>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: ThemeColors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarHideOnKeyboard:true,
          tabBarButton: HapticTab,
          tabBarLabelStyle: {
            fontFamily: 'LexendMega_700Bold',
            fontSize: 12,
          },
          tabBarIconStyle: Platform.select({
            ios: {
              marginVertical: 5,
            },
            android: {
              paddingBottom: 10,
            },
          }),
          tabBarStyle: Platform.select({
            ios: {
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
            title: 'Users',
            tabBarIcon: ({ color }) => <Cctv size={28} color={color} />,
          }}
        />
      </Tabs>
    </ProtectedRoutes>
  );
}
