import { AuthTokenResponse } from "@/types/AuthTokenResponse";
import { GetAccessTokenParams } from "../types/GetAccessTokenParams";
import { Env } from '@/utils/Env';
import { AccessTokenGranType } from "../types/AcessTokenGrantTYpe";
import { apiUrls } from "../Common";
import axios from "axios";
import { AUTH_KEY, setItem } from "@/utils/Storage";




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
    formBody.append('redirect_uri', apiUrls.redirectUrl);
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
