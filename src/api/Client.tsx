import axios from 'axios';

import { type AuthTokenResponse } from '@/types/AuthTokenResponse';
import { Env } from '@/utils/Env';
import { getItem } from '@/utils/Storage';

export const client = axios.create({
  baseURL: Env.API_URL,
});

client.interceptors.request.use(async (config) => {
  try {
    const tokenData = await getItem<AuthTokenResponse>('auth');
    if (!tokenData) return config;

    config.headers.Authorization = `Bearer ${tokenData.access_token}`;
    return config;
  } catch (err) {
    return Promise.reject(err);
  }
});

// TODO: Add interceptor for response
