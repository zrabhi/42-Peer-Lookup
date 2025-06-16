import Toast from 'react-native-toast-message';

import { type AuthTokenResponse } from '@/types/AuthTokenResponse';
import { type ToastType } from '@/types/ToastType';

export const openToaster = (type: ToastType, message: string) => {
  Toast.show({
    type,
    text1: 'Hello',
    text2: message,
  });
};

export const isTokenExpired = (token: AuthTokenResponse): boolean => {
  const now = Math.floor(Date.now() / 1000);
  const expiryTime = token.created_at + token.expires_in;
  return now >= expiryTime;
};
