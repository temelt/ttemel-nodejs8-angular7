'use strict';

const { APP_CONFIG} = require('../config');
const dbServer = APP_CONFIG.DATABASE_SERVER;
const dbConnectionOptions = dbServer.CONNECT_OPTIONS;


const dbConfig = {
    database: dbConnectionOptions.DB_NAME,
    username: dbConnectionOptions.DB_USERNAME,
    password: dbConnectionOptions.DB_PASSWORD,
    connectionOptions: {
        dialect: dbConnectionOptions.DB_DIALECT,
        host: dbServer.HOST,
        port: dbServer.PORT, 
        dialectOptions: {
            requestTimeout: 30000, 
            encrypt: true,
        },
        logging: dbServer.DEBUG, 
        timezone: '+00:00',
        operatorsAliases: false,
        define: {
            underscored: true,
            freezeTableName: true,
            timestamp: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    }

}
module.exports = dbConfig;

