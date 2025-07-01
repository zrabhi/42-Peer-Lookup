import { UserCursusStat, UserGrade } from "@/types/user/UserCursusStat";
import { useMemo } from "react";

export const useUserLevel = (cursusUsers: UserCursusStat[] | undefined): number => {
  return useMemo(() => {
    if (!cursusUsers || cursusUsers.length === 0) return 0;

    const transcender = cursusUsers.find((cursus) => cursus.grade === UserGrade.TRANCENDER);
    if (transcender) return transcender.level;

    const pisciner = cursusUsers.find((cursus) => cursus.grade === UserGrade.PISCINER);
    return pisciner?.level || 0;
  }, [cursusUsers]);
};