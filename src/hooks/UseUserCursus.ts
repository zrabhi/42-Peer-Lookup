import { useMemo } from 'react';

import { type UserCursusStat, UserGrade } from '@/types/user/UserCursusStat';

export const useUserLevel = (
  cursusUsers: UserCursusStat[] | undefined
): number => {
  return useMemo(() => {
    if (!cursusUsers || cursusUsers.length === 0) return 0;

    const transcender = cursusUsers.find(
      (cursus) => cursus.grade === UserGrade.TRANCENDER
    );
    if (transcender) return transcender.level;

    const pisciner = cursusUsers.find(
      (cursus) => cursus.grade === UserGrade.PISCINER
    );
    return pisciner?.level || 0;
  }, [cursusUsers]);
};

export const useUserCursus = (
  cursusUsers: UserCursusStat[] | undefined
): UserCursusStat | undefined => {
  return useMemo(() => {
    if (!cursusUsers || cursusUsers.length === 0) return undefined;

    const reversed = cursusUsers.slice().reverse();

    const transcender = reversed.find((c) => c.grade === UserGrade.TRANCENDER);
    if (transcender) return transcender;

    const nonPisciner = reversed.find((c) => c.grade !== UserGrade.PISCINER);
    if (nonPisciner) return nonPisciner;

    return reversed.find((c) => c.grade === UserGrade.PISCINER);
  }, [cursusUsers]);
};
