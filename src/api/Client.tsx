import axios from 'axios';
import { router } from 'expo-router';

import { type AuthTokenResponse } from '@/types/AuthTokenResponse';
import { Env } from '@/utils/Env';
import { AUTH_KEY, getItem, removeItem } from '@/utils/Storage';
import { useGetAccessToken } from './auth/GetAccessToken';
import { AccessTokenGranType } from './types/AcessTokenGrantTYpe';

export const client = axios.create({
  baseURL: Env.API_URL,
});

client.interceptors.request.use(async (config) => {
  try {
    const token = await getItem<AuthTokenResponse>(AUTH_KEY);

    config.headers.Authorization = `Bearer ${token.access_token}`;

    return config;
  } catch (err) {
    return Promise.reject(err);
  }
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { getAccessToken } = useGetAccessToken();
    if (error?.message === 'Token expired' || error.response?.status === 401) {
      const tokens = await getItem<AuthTokenResponse>(AUTH_KEY);
      if (!tokens || !tokens.access_token || !tokens.refresh_token) {
        await removeItem(AUTH_KEY);
        router.replace('/(auth)');
      }
      console.log('refreshing token  ..........');
      await getAccessToken({
        refreshToken: tokens.refresh_token,
        grantType: AccessTokenGranType.REFRESH_TOKEN,
      });
    }
    return Promise.reject(error);
  }
);
