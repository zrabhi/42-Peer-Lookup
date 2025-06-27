import { type Href } from 'expo-router';

export const apiUrls: Record<string, string> = {
  oauth: 'oauth/authorize',
  coalision: 'v2/users/:id/coalitions',
  accessToken: 'oauth/token',
  userProfile: 'v2/me',
  redirectUrl: 'exp://xswatuk-anonymous-8081.exp.direct',
  userDetails: 'v2/users/:id',
};

export const AppRoutes: Record<string, Href> = {
  users: '/(tabs)/users',
  auth: '/(auth)',
  userDetails: '/users/[id]',
  settings: '/settings',
};
