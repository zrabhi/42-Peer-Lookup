import { type AccessTokenGranType } from './AcessTokenGrantTYpe';

export interface GetAccessTokenParams {
  code?: string | null;
  grantType: AccessTokenGranType;
  refreshToken?: string | null;
}
