const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '.env')
}); 


export default {
  expo: {
    name: '42-peer-lookup',
    slug: '42-peer-lookup',
    version: '0.0.1',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: '42peerlookup',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      icon: './assets/images/icon.png',
      backgroundColor: '#FFEFDE',
      bundleIdentifier: 'com.42peerlookup.ma',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#FFEFDE',
      },
      edgeToEdgeEnabled: true,
      package: 'com.42peerlookup.ma',
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
      CLIENT_UID: process.env.CLIENT_UID,
      CLIENT_SECRET : process.env.CLIENT_SECRET,
      API_URL: process.env.API_URL
    },
  },
};
