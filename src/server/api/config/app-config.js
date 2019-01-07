'use strict';
const Joi = require('joi');

require('dotenv').config();

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().allow(['development', 'production']).default('development'),
    PORT: [Joi.string(), Joi.number()],
    DATABASE_DIALECT: Joi.string().required().description('DB dialect required'),
    DATABASE_HOST: Joi.string().required().description('DB host required'),
    DATABASE_PORT: [Joi.string(), Joi.number()],
    DATABASE_NAME: Joi.string().required().description('DB name required'),
    DATABASE_USERNAME: Joi.string().required().description('DB usernmae required'),
    DATABASE_PASSWORD: Joi.string().required().allow('').description('DB password required'),
    DATABASE_DEBUG: Joi.boolean().description('Debug option should be boolean'),
    API_VERSION: Joi.string().default('v1')
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const  APP_CONFIG = {
    ENV: (process.env.NODE_ENV || envVars.NODE_ENV),
    PORT: (process.env.PORT || +envVars.PORT),
    API_VERSION: envVars.API_VERSION,
    DATABASE_SERVER: {
        HOST: (envVars.DATABASE_HOST || '127.0.0.1'),
        PORT: +envVars.DATABASE_PORT,
        DEBUG: envVars.DATABASE_DEBUG,
        CONNECT_OPTIONS: {
            DB_NAME: envVars.DATABASE_NAME,
            DB_USERNAME: envVars.DATABASE_USERNAME,
            DB_PASSWORD: envVars.DATABASE_PASSWORD,
            DB_DIALECT: envVars.DATABASE_DIALECT,
        }
    },
    SERVER: {
        DEVELOPMENT: {
            HOST: '127.0.0.1',
        },
        PRODUCTION: {
            HOST: process.env.WEB_HOST
        },
        get URL() {
            if (this.ENV == 'production') {
                return `https://${this.PRODUCTION.HOST}/`;
            } else {
                return `http://${this.DEVELOPMENT.HOST}:${+envVars.PORT}/`;
            }
        }
    }
};

module.exports = APP_CONFIG;



