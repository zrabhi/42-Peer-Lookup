import { type UserCoalition } from '../UserCoalition';
import { type UserKind } from '../UserKind';
import { type CursusProject } from './CursusProject';
import { type UserAchievement } from './UserAchievement';
import { type UserCampus } from './UserCampus';
import { type UserCursusStat } from './UserCursusStat';
import { type UserImage } from './UserImage';

export interface UserDetails extends UserCoalition {
  id: number;
  displayname: string;
  cursus_users: UserCursusStat[];
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
  email: string | null;
  updated_at: string;
  data_erasure_date: string | null;
  url: string | null;
  correction_point: number | null;
  usual_first_name: string | null;
  usual_full_name: string;
  wallet: number;
}
