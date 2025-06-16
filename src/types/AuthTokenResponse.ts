export interface AuthTokenResponse {
  access_token: string;
  created_at: number;
  expires_in: number;
  refresh_token: string;
  scope: string;
  secret_valid_until: number;
  token_type: string;
}
