import { type Href } from 'expo-router';

export const apiUrls: Record<string, string> = {
  oauth: 'oauth/authorize',
  coalision: 'v2/users/:id/coalitions',
  accessToken: 'oauth/token',
  userProfile: 'v2/me',
  userDetails: 'v2/users/:id',
};

export const AppRoutes: Record<string, Href> = {
  users: '/(protected)/users',
  auth: '/(auth)',
  userDetails: '/(protected)/users/[id]',
  settings: '/(protected)/settings',
};
