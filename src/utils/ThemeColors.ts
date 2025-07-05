/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
// TODO: To Complete ...
import colors from '@utils/Colors';
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const ThemeColors = {
  light: {
    text: colors.primary.orange[100],
    background: colors.white,
    tint: colors.primary.orange[100],
    icon: colors.black,
    tabIconDefault: colors.black,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#000',
    tint: tintColorDark,
    icon: colors.primary.orange[100],
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
