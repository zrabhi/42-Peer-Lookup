import Toast from 'react-native-toast-message';

import { type AuthTokenResponse } from '@/types/AuthTokenResponse';
import { type ToastType } from '@/types/ToastType';
import { type UserCursusStat, UserGrade } from '@/types/user/UserCursusStat';

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

export const getLatestLevel = (cursusUsers: UserCursusStat[]): number => {
  let transcenderLevel: number | null = null;
  let piscinerLevel: number | null = null;

  for (const cursus of cursusUsers) {
    if (cursus.grade === UserGrade.PISCINER) {
      transcenderLevel = cursus.level;
      break;
    }
    if (cursus.grade === UserGrade.TRANCENDER && piscinerLevel === null) {
      piscinerLevel = cursus.level;
    }
  }
  return transcenderLevel ?? piscinerLevel ?? 0;
};
