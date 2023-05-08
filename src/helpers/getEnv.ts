import * as dotenv from 'dotenv';
dotenv.config();

type ToNumberEnvKey = 'PORT';

type TEnvKey = 'DB_URL';

type ResponseGetEnv<T> = T extends ToNumberEnvKey ? number : string;

export const getEnv = <T extends TEnvKey | ToNumberEnvKey>(
  envKey: T,
  defaultValue = ''
): ResponseGetEnv<T> => {
  const value = process.env[envKey];
  const response = value ? value : defaultValue;

  if (envKey === 'PORT') {
    return +response as ResponseGetEnv<T>;
  }

  return response as ResponseGetEnv<T>;
};
