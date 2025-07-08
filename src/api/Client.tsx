import axios from 'axios';
import { router } from 'expo-router';

import { type AuthTokenResponse } from '@/types/AuthTokenResponse';
import { Env } from '@/utils/Env';
import { AUTH_KEY, getItem, removeItem } from '@/utils/Storage';

import { getAccessTokenMutationFn } from './auth/GetAccessTokenMutationFn';
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
    const requestConfig = error.config;

    if (error?.response?.status === 401 && !requestConfig._retry) {
      requestConfig._retry = true;

      const tokens = await getItem<AuthTokenResponse>(AUTH_KEY);

      if (!tokens || !tokens?.refresh_token) {
        await removeItem(AUTH_KEY);
        router.replace('/(auth)');
        return Promise.reject(error);
      }

      try {
        console.log('Refreshing token...', tokens.access_token);

        const refreshedToken = await getAccessTokenMutationFn({
          refreshToken: tokens.refresh_token,
          grantType: AccessTokenGranType.REFRESH_TOKEN,
        });

        requestConfig.headers.Authorization = `Bearer ${refreshedToken.access_token}`;
        console.log('the token Refreshed succefully');
        return client(requestConfig);
      } catch (refreshError) {
        await removeItem(AUTH_KEY);
        router.replace('/(auth)');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

/* client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const requestConfig = error.config;

    if (error?.message === 'Token expired' || error.response?.status === 401) {
      requestConfig._retry = true;
      const tokens = await getItem<AuthTokenResponse>(AUTH_KEY);

      if (!tokens || !tokens.refresh_token) {
        await removeItem(AUTH_KEY);
        router.replace('/(auth)');
      }
      console.log('refreshing token  ..........');

      const refreshedToken = await getAccessTokenMutationFn({
        refreshToken: tokens.refresh_token,
        grantType: AccessTokenGranType.REFRESH_TOKEN,
      });

      requestConfig.headers.Authorization = `Bearer ${refreshedToken.access_token}`;

      return client(requestConfig);
    }
    return Promise.reject(error);
  }
);
*/
