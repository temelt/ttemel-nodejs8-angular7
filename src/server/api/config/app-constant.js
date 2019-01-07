'use strict';
const SITE_CONFIG = {
    RESTRICT_IP: false,
    MOBILE_APP_MIN_SUPPORT_VERSION: 1,
    CLEAN_OLD_FILES: 1
};

const STATUS_CODE = {
    SUCCESS: 200,
    NOCONTENT: 203,
    ALREADY_REPORTED: 208,
    BADREQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOTFOUND: 404,
    VERSION_OUTDATED: 426,
};

const STATUS = {
    ACTIVE: 1, INACTIVE: 0, DELETED: -1
};

const LOAN_TYPES = {
    LOAN: 1, DEPOSIT: 2
}

const PAGINATION = {
    DEFAULT_LIMIT: 10
};


const LOGGER = {
    CLEANUP_ON_LOGIN: 0, 
    CLEANUP_OLDER_LOGS: 30 
};

const DATE_FORMAT = {
    FORMAT_ONE: 'll',
    FORMAT_TWO: 'YYYY-MM-DD HH:mm:ss',
    FORMAT_THREE: 'MMM Do YYYY, h:mm a'
};

var PATHS = {
    FILES: {
        DOWNLOADS: 'files/downloads/',
        TEMP: 'files/temp/',
        LOGS: 'logs/',
    }
};

const APP_CONSTANTS = {
    SITE_CONFIG: SITE_CONFIG,
    CLIENT_MOBILE: 'mobile',
    STATUS: STATUS,
    STATUS_CODE: STATUS_CODE,
    DATE_FORMAT: DATE_FORMAT,
    PAGINATION: PAGINATION,
    LOGGER: LOGGER,
    LOAN_TYPES: LOAN_TYPES,
    PATHS:PATHS
};


module.exports = APP_CONSTANTS;
