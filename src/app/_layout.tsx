import '../../global.css';

import { OfflineIllustration } from '@components/icons/OfflineIllustration';
import { AlertMessage } from '@components/ui/AlertMessage';
import { toasterConfig } from '@config/ToasterConfig';
import { useNetworkConnectivity } from '@hooks/UseNetworkStatus';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { AuthProvider } from '@utils/auth/AuthProvider';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { type ReactNode, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { ApiProvider } from '@/api';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const isNetworkConnected = useNetworkConnectivity();

  // Instead of returning <AlertMessage /> directly when !isNetworkConnected,
  // we use conditional rendering inside the component tree so the AppProviders and navigation
  // remain mounted. This avoids unmounting the entire app when offline, preserving state and preventing full re-renders.

  return (
    <AppProviders>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(content)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      {!isNetworkConnected && (
        <AlertMessage
          className="absolute size-full"
          alertIcon={OfflineIllustration}
          message="Oops! No internet connection. Please check your network and try again."
        />
      )}
    </AppProviders>
  );
}

const AppProviders = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    LexendMega_100Thin: require('@assets/fonts/LexendMega-Thin.ttf'),
    LexendMega_200ExtraLight: require('@assets/fonts/LexendMega-ExtraLight.ttf'),
    LexendMega_300Light: require('@assets/fonts/LexendMega-Light.ttf'),
    LexendMega_500Medium: require('@assets/fonts/LexendMega-Medium.ttf'),
    LexendMega_600SemiBold: require('@assets/fonts/LexendMega-SemiBold.ttf'),
    LexendMega_700Bold: require('@assets/fonts/LexendMega-Bold.ttf'),
    LexendMega_800ExtraBold: require('@assets/fonts/LexendMega-ExtraBold.ttf'),
    LexendMega_900Black: require('@assets/fonts/LexendMega-Black.ttf'),
    LexendMega_400Regular: require('@assets/fonts/LexendMega-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return (
    <GestureHandlerRootView className="flex-1">
      <ApiProvider>
        <AuthProvider>
          <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
          >
            {children}
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
            <Toast config={toasterConfig} />
          </ThemeProvider>
        </AuthProvider>
      </ApiProvider>
    </GestureHandlerRootView>
  );
};
