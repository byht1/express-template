import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import { getEnv } from 'helpers'

export const connect = () => {
  const pool = new Pool({
    connectionString: getEnv('DB_URL'),
    ssl: true,
  })

  return drizzle(pool)
}
