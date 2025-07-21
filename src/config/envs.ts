import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_CONNECTION_STRING: string;
  LD_LIBRARY_PATH: string;

  HSM_BE_CORE_STORAGE_HOST: string;
  HSM_BE_CORE_STORAGE_PORT: string;
  HSM_BE_CORE_STORAGE_BUCKET: string;
  HSM_BE_CORE_STORAGE_ACCESS_KEY: string;
  HSM_BE_CORE_STORAGE_SECRET_KEY: string;
  HSM_BE_CORE_STORAGE_REGION: string;
}

const envsSchema = joi
  .object({
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_CONNECTION_STRING: joi.string().required(),
    LD_LIBRARY_PATH: joi.string().default('/usr/lib/oracle/12.1/client64/lib'),

    HSM_BE_CORE_STORAGE_HOST: joi.string().required(),
    HSM_BE_CORE_STORAGE_PORT: joi.string().required(),
    HSM_BE_CORE_STORAGE_BUCKET: joi.string().required(),
    HSM_BE_CORE_STORAGE_ACCESS_KEY: joi.string().required(),
    HSM_BE_CORE_STORAGE_SECRET_KEY: joi.string().required(),
    HSM_BE_CORE_STORAGE_REGION: joi.string().default('us-east-1'),
  })
  .unknown()
  .required();

const validationSchema = envsSchema.validate(process.env);

if (validationSchema.error) {
  throw new Error(`Config validation error: ${validationSchema.error.message}`);
}

const envVars: EnvVars = validationSchema.value as EnvVars;

export const envs = {
  DB_USER: envVars.DB_USER,
  DB_PASSWORD: envVars.DB_PASSWORD,
  DB_CONNECTION_STRING: envVars.DB_CONNECTION_STRING,
  LD_LIBRARY_PATH: envVars.LD_LIBRARY_PATH,

  HSM_BE_CORE_STORAGE_HOST: envVars.HSM_BE_CORE_STORAGE_HOST,
  HSM_BE_CORE_STORAGE_PORT: envVars.HSM_BE_CORE_STORAGE_PORT,
  HSM_BE_CORE_STORAGE_BUCKET: envVars.HSM_BE_CORE_STORAGE_BUCKET,
  HSM_BE_CORE_STORAGE_ACCESS_KEY: envVars.HSM_BE_CORE_STORAGE_ACCESS_KEY,
  HSM_BE_CORE_STORAGE_SECRET_ACCESS_KEY: envVars.HSM_BE_CORE_STORAGE_SECRET_KEY,
  HSM_BE_CORE_STORAGE_REGION: envVars.HSM_BE_CORE_STORAGE_REGION,
};
