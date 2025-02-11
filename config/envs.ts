import 'dotenv/config';

import * as dotenv from 'dotenv';
import * as joi from 'joi';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../../kubernetes/envs/global.env'),
});
dotenv.config({
  path: path.resolve(__dirname, '../../../kubernetes/envs/postulantes.env'),
});

interface EnvVars {
  HSM_BE_CORE_DOCS_NAME: string;
  HSM_BE_CORE_DOCS_HOST: string;
  HSM_BE_CORE_DOCS_PORT: number;

  DB_USER: string;
  DB_PASSWORD: string;
  DB_CONNECTION_STRING: string;
  LD_LIBRARY_PATH: string;
}

const envsSchema = joi
  .object({
    HSM_BE_CORE_DOCS_NAME: joi.string().required(),
    HSM_BE_CORE_DOCS_HOST: joi.string().default('localhost'),
    HSM_BE_CORE_DOCS_PORT: joi.number().required(),

    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_CONNECTION_STRING: joi.string().required(),
    LD_LIBRARY_PATH: joi.string().default('/usr/lib/oracle/12.1/client64/lib'),
  })
  .unknown()
  .required();

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  HSM_BE_CORE_DOCS_NAME: envVars.HSM_BE_CORE_DOCS_NAME,
  HSM_BE_CORE_DOCS_HOST: envVars.HSM_BE_CORE_DOCS_HOST,
  HSM_BE_CORE_DOCS_PORT: envVars.HSM_BE_CORE_DOCS_PORT,

  DB_USER: envVars.DB_USER,
  DB_PASSWORD: envVars.DB_PASSWORD,
  DB_CONNECTION_STRING: envVars.DB_CONNECTION_STRING,
  LD_LIBRARY_PATH: envVars.LD_LIBRARY_PATH,
};
