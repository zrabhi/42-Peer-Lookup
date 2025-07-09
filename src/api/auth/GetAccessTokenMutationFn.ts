import axios from 'axios';

import { type AuthTokenResponse } from '@/types/AuthTokenResponse';
import { Env } from '@/utils/Env';
import { AUTH_KEY, setItem } from '@/utils/Storage';

import { apiUrls } from '../Common';
import { AccessTokenGranType } from '../types/AcessTokenGrantTYpe';
import { type GetAccessTokenParams } from '../types/GetAccessTokenParams';

export const getAccessTokenMutationFn = async ({
  code,
  grantType,
  refreshToken,
}: GetAccessTokenParams): Promise<AuthTokenResponse> => {
  const formBody = new URLSearchParams({
    grant_type: grantType,
    client_id: Env.CLIENT_UID,
    client_secret: Env.CLIENT_SECRET,
  });

  if (grantType === AccessTokenGranType.AUTORIZATION_CODE && code) {
    formBody.append('code', code);
    formBody.append('redirect_uri', Env.REDIRECT_URL);
  } else if (grantType === AccessTokenGranType.REFRESH_TOKEN && refreshToken) {
    formBody.append('refresh_token', refreshToken);
  } else {
    throw new Error('Invalid parameters for access token');
  }

  const response = await axios.post(
    `${Env.API_URL}${apiUrls.accessToken}`,
    formBody.toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  if (response.status === 200) {
    await setItem(AUTH_KEY, response.data);
  }
  return response.data;
};
