'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');
const helmet = require('helmet');
const passport = require('passport');
const expressValidator = require("express-validator");
const { APP_CONFIG, logger } = require('../config');
const { HELPER } = require('../helpers');
var indexRouter = require('../routes/index');

const log = logger.appLogger(1);

const app = express();

app.use(helmet());

app.use(compression({ level: 9 }));

logger.serverLogger(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', indexRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.all(`/api/` + "*", function (req, res, next) {
    return next();
});

//app.use(express.static('public')) // to server html files for web
//app.all('*', function (req, res, next) { // To serve angular build files on page reload
//    res.sendFile(path.resolve('public/index.html'));
//});

app.use('/assets', express.static(path.join(__dirname, 'api/v1/assets/')));

app.use('/debug/:token/', express.static(path.join(__dirname, 'logs')));

module.exports = app;


