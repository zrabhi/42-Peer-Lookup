import { type UserCoalition } from '@/types/UserCoalition';

import { client } from '../Client';
import { apiUrls } from '../Common';

export const getUserCoalision = async <T extends { id: number; image?: any }>(
  user: T
): Promise<T & UserCoalition> => {
  const coalisionRes = await client.get(
    apiUrls.coalision.replace(':id', user.id.toString())
  );

  const coalition = coalisionRes.data?.[0];

  return {
    ...user,
    score: coalition?.score ?? null,
    image_url: user.image?.versions?.medium ?? null,
    coalition_icon: coalition?.image_url ?? null,
    coalition_cover: coalition?.cover_url ?? null,
    coalition_color: coalition?.color ?? null,
    coalition_name: coalition?.name ?? null,
  };
};
