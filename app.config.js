import { ClientEnv, Env } from './env';

const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

export default {
  expo: {
    name: Env.NAME,
    slug: 'swiftycompanion',
    owner: Env.EXPO_ACCOUNT_OWNER,
    version: '0.0.1',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: Env.SCHEME,
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      icon: './assets/images/icon.png',
      backgroundColor: '#FFEFDE',
      bundleIdentifier: Env.BUNDLE_ID,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#FFEFDE',
      },
      edgeToEdgeEnabled: true,
      package: Env.PACKAGE,
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-screen.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#FFEFDE',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      ...ClientEnv,
      eas: {
        projectId: Env.EAS_PROJECT_ID,
      },
    },
  },
};
