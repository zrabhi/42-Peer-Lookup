import { type UserCoalition } from './UserCoalition';

export interface UserSummary extends UserCoalition {
  displayname: string | null;
  id: number | null;
  login: string | null;
  image_url: string | null;
}

export const UserSummaryInitValue: UserSummary = {
  id: null,
  coalition_image: null,
  coalition_name: null,
  coalition_color: null,
  displayname: null,
  login: null,
  image_url: null,
};
