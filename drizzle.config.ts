import type { Config } from 'drizzle-kit';
import { getEnv } from './src/helpers/getEnv';

export default {
  out: './drizzle/migrations',
  schema: './src/db/schema',
  driver: 'pg',
  dbCredentials: {
    connectionString: getEnv('DB_URL'),
  },
} satisfies Config;
