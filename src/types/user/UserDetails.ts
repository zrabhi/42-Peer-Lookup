import { type UserKind } from '../UserKind';
import { type CursusProject } from './CursusProject';
import { type UserAchievement } from './UserAchievement';
import { type UserCampus } from './UserCampus';
import { type UserImage } from './UserImage';

export interface UserDetails {
  id: number;
  displayname: string;
  achievements: UserAchievement[];
  image: UserImage;
  campus: UserCampus[];
  kind: UserKind;
  projects_users: CursusProject[];
  location: string | null;
  pool_month: string | null;
  pool_year: string | null;
  login: string;
  phone: string;
  updated_at: string;
  url: string | null;
  correction_point: number | null;
  usual_first_name: string | null;
  usual_full_name: string;
  wallet: number;
}
