/* eslint-env node */

/* eslint-disable */

const z = require('zod');

const path = require('path');

const envPath = path.resolve(__dirname, `.env`);

require('dotenv').config({
  path: envPath,
});

const client = z.object({
  NAME: z.string(),
  SCHEME: z.string(),
  CLIENT_SECRET: z.string(),
  REDIRECT_URL: z.string(),
  CLIENT_UID: z.string(),
  FORTY_TWO_CDN_URL: z.string(),
  BUNDLE_ID: z.string(),
  PACKAGE: z.string(),
  API_URL: z.string(),
});

const buildTime = z.object({
  EXPO_ACCOUNT_OWNER: z.string(),
  EAS_PROJECT_ID: z.string(),
});

/**
 * @type {Record<keyof z.infer<typeof client> , unknown>}
 */
const _clientEnv = {
  NAME: process.env.NAME,
  SCHEME: process.env.SCHEME,
  BUNDLE_ID: process.env.BUNDLE_ID,
  PACKAGE: process.env.PACKAGE,
  REDIRECT_URL: process.env.REDIRECT_URL,
  CLIENT_UID: process.env.CLIENT_UID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  FORTY_TWO_CDN_URL: process.env.FORTY_TWO_CDN_URL,
  API_URL: process.env.API_URL,
};

/**
 * @type {Record<keyof z.infer<typeof buildTime> , unknown>}
 */
const _buildTimeEnv = {
  EXPO_ACCOUNT_OWNER: process.env.EXPO_ACCOUNT_OWNER,
  EAS_PROJECT_ID: process.env.EAS_PROJECT_ID,
};

const _env = {
  ..._clientEnv,
  ..._buildTimeEnv,
};

const merged = buildTime.merge(client);
const parsed = merged.safeParse(_env);

if (parsed.success === false) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors,

    `\n❌ Missing variables in .env file, Make sure all required variables are defined in the .env file.`,
    `\n💡 Tip: If you recently updated the .env file and the error still persists, try restarting the server with the -c flag to clear the cache.`
  );
  throw new Error(
    'Invalid environment variables, Check terminal for more details '
  );
}

const Env = parsed.data;
const ClientEnv = client.parse(_clientEnv);

module.exports = {
  Env,
  ClientEnv,
};
