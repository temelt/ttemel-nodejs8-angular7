'use strict';
const path = require('path');
const http = require('http');
const { APP_CONFIG, logger, express } = require('./src/server/api/config');
const app = express;
const API_VERSION = APP_CONFIG.API_VERSION;
const db = require(`./src/server/api/model`);

const log = logger.appLogger(1);

db.sequelize
    .authenticate()
    .then(() => {
        console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
        console.log('PostgreSQL Database Connection has been established successfully.');
        console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
    })
    .catch(err => {
        console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
        console.error('Unable to connect to the PostgreSQL database:', err);
        console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
    });

/* HTTP SERVER */
var server = http.createServer(app);

server.listen(APP_CONFIG.PORT, () => {

    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
    console.info(`server started on port ${APP_CONFIG.PORT} (${APP_CONFIG.ENV})`);
    log.info(`HTTP - API server started on port ${APP_CONFIG.PORT}`);
    log.info(`HTTP - API server is connected with the following PostgreSQL instance ${APP_CONFIG.DATABASE_SERVER.HOST}:${APP_CONFIG.DATABASE_SERVER.PORT}`);
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);

});
