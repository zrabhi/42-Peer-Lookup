import Toast from 'react-native-toast-message';

import { type AuthTokenResponse } from '@/types/AuthTokenResponse';
import { type ToastType } from '@/types/ToastType';

export const openToaster = (type: ToastType, message: string) => {
  Toast.show({
    type,
    text1: 'Hello',
    text2: message,
    visibilityTime: 3000,
  });
};

export const isTokenExpired = (token: AuthTokenResponse): boolean => {
  const now = Math.floor(Date.now() / 1000);

  const expiresAt =
    token?.created_at && token?.expires_in
      ? token.created_at + token.expires_in
      : 0;

  const secondsLeft = expiresAt - Math.floor(Date.now() / 1000);
  const minutesLeft = Math.floor(secondsLeft / 60);

  console.log(`Token www expires in ${minutesLeft} minutes`);

  return expiresAt < now;
};

export const getRelativeDate = (isoDate: string): string => {
  const now = Date.now();
  const then = new Date(isoDate).getTime();

  const diffInDays = Math.floor((now - then) / 86_400_000); // 1000 * 60 * 60 * 24
  const months = Math.floor(diffInDays / 30);

  if (months >= 12) {
    const years = Math.floor(months / 12);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }

  if (months >= 1) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }

  return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
};
