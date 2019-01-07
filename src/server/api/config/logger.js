 
    'use strict';

    var FileStreamRotator = require('file-stream-rotator');
    var fs = require('fs');
    var util = require('util');
    var path = require('path');
    var morgan = require('morgan');
    var bunyan = require('bunyan');
    const randomstring = require('randomstring');
    var log, bunyanLog;
    const env = process.env.NODE_ENV || 'dev';

    var logDirectory = path.join(__dirname, '../../../logs');
    
    var logLevel = 'TRACE'; // FATAL 60, ERROR 50, WARN 40, INFO 30, DEBUG 20, TRACE 10

    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

   const Logger = {
        serverLogger: serverLogger,
        appLogger: appLogger
    };

    function serverLogger(app) {
        var accessLogStream = FileStreamRotator.getStream({
            date_format: 'YYYYMMDD',
            filename: path.join(logDirectory, 'access-%DATE%.log'),
            frequency: 'daily',
            verbose: false
        });

        var errorLogStream = FileStreamRotator.getStream({
            date_format: 'YYYYMMDD',
            filename: path.join(logDirectory, 'error-%DATE%.log'),
            frequency: 'daily',
            verbose: false
        });

        var consoleLogStream = FileStreamRotator.getStream({
            date_format: 'YYYYMMDD',
            filename: path.join(logDirectory, 'mail-%DATE%.log'),
            frequency: 'daily',
            verbose: false
        });
        
        if (app.get('env') == 'prod') {
            app.use(morgan('combined', {skip: function (req, res) {
                    return res.statusCode >= 400;
                }, stream: accessLogStream}));
            app.use(morgan('combined', {skip: function (req, res) {
                    return res.statusCode < 400;
                }, stream: errorLogStream}));
        } else {
            app.use(morgan('dev', {stream: accessLogStream}));
        }

        var logStdout = process.stdout;
        console.log = function () {
            consoleLogStream.write(util.format.apply(null, arguments) + '\n');
            logStdout.write(util.format.apply(null, arguments) + '\n');
        }
    }

    function appLogger(init) {
        if (!init) {
            return log;
        }
        
        fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

        bunyanLog = bunyan.createLogger({
            name: 'crm',
            streams: [{
                    level: logLevel, // FATAL 60, ERROR 50, WARN 40, INFO 30, DEBUG 20, TRACE 10
                    type: 'rotating-file',
                    path: path.join(logDirectory, 'app.log'),
                    period: '1d'
                }],
            serializers: {
                req: reqSerializer,
                err: bunyan.stdSerializers.err
            },
            src: (env == 'prod') ? false : true
        });

        function reqSerializer(req) {
            return {
                method: req.method,
                url: req.url,
                headers: req.headers
            };
        }
//        log.child({req_id: <unique request id>}, true);
//        log.trace('Trace log...');
//        log.debug('Debug log...');
//        log.info('Info log...');
//        log.warn('Warning log...');
//        log.error('Error log...');
//        log.fatal('Fatal log...');

        var trace = function (msg) {
            bunyanLog.trace(msg);
        };
        var debug = function (msg) {
            bunyanLog.debug(msg);
        };
        var info = function (msg) {
            bunyanLog.info(msg);
        };
        var warn = function (msg) {
            bunyanLog.warn(msg);
        };
        var error = function (msg) {
            bunyanLog.error(msg);
        };
        var fatal = function (msg) {
            bunyanLog.fatal(msg);
        };
        var child = function (data) {
            bunyanLog = bunyanLog.child(data);
        };
        log = {
            trace: trace,
            debug: debug,
            info: info,
            warn: warn,
            error: error,
            fatal: fatal,
            child: child
        };

        return log;
    }
 

    module.exports =Logger;