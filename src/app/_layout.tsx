import '../../global.css';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ApiProvider } from '@/api';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
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

  if (!loaded) {
    // If the fonts are not loaded, we return null to avoid rendering the app and show spalsh screen.
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <ApiProvider>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>

          <StatusBar style="auto" />
        </ThemeProvider>
      </ApiProvider>
    </GestureHandlerRootView>
  );
}
