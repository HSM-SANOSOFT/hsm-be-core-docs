import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_CONNECTION_STRING: string;
  LD_LIBRARY_PATH: string;

  S3_HOST: string;
  S3_PORT: string;
  S3_BUCKET: string;
  S3_ACCESS_KEY: string;
  S3_SECRET_KEY: string;
  S3_REGION: string;
}

const envsSchema = joi
  .object({
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_CONNECTION_STRING: joi.string().required(),
    LD_LIBRARY_PATH: joi.string().default('/usr/lib/oracle/12.1/client64/lib'),

    S3_HOST: joi.string().required(),
    S3_PORT: joi.string().required(),
    S3_BUCKET: joi.string().required(),
    S3_ACCESS_KEY: joi.string().required(),
    S3_SECRET_KEY: joi.string().required(),
    S3_REGION: joi.string().default('us-east-1'),
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

  S3_HOST: envVars.S3_HOST,
  S3_PORT: envVars.S3_PORT,
  S3_BUCKET: envVars.S3_BUCKET,
  S3_ACCESS_KEY: envVars.S3_ACCESS_KEY,
  S3_SECRET_KEY: envVars.S3_SECRET_KEY,
  S3_REGION: envVars.S3_REGION,
};
