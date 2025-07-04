import { type UserSkills } from './UserSkills';

export enum UserGrade {
  TRANCENDER = 'Transcender',
  PISCINER = 'Pisciner',
  CADET = 'Cadet',
}

export interface UserCursusStat {
  begin_at: string | null;
  blackholed_at: string | null;
  created_at: string | null;
  cursus_id: number | null;
  end_at: string | null;
  skills: UserSkills[] | null;
  grade: UserGrade | null;
  has_coalition: boolean;
  id: number | null;
  level: number | null;
  updated_at: string | null;
}
