import { type Href } from 'expo-router';

export const apiUrls: Record<string, string> = {
  oauth: 'oauth/authorize',
  coalision: 'v2/users/:id/coalitions',
  accessToken: 'oauth/token',
  userProfile: 'v2/me',
  redirectUrl: 'exp://tm6ay0g-anonymous-8081.exp.direct',
  userDetails: 'v2/users/:id',
  fortyTwoCdn: 'https://cdn.intra.42.fr',
};

export const AppRoutes: Record<string, Href> = {
  users: '/(tabs)/users',
  auth: '/(auth)',
  userDetails: '/users/[id]',
  settings: '/settings',
};
