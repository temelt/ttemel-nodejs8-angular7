'use strict';

const { APP_CONSTANTS} = require('../config'); 
const _ = require('lodash');
var moment = require('moment');
const path = require('path');
const async = require('async');
const fs = require('fs');
const fsx = require('fs-extra');
const momentms = require('moment-msdate');
 

const FILES_PATH = APP_CONSTANTS.PATHS.FILES;
module.exports = {
    err: err,
    emptyStringsToNull: emptyStringsToNull,
    getNestedChildren: getNestedChildren

};
function err(err) {
    var msg;

    if (err.errors) {
        msg = JSON.stringify(err.errors);
    } else if (err.message) {
        msg = err.message;
        if (err.sql) {
            msg += ' SQL: ' + err.sql;
        }
    } else if (err.msg) {
        msg = JSON.stringify(err);
    } else {
        msg = JSON.stringify(err);
    }
    return msg;
}

function emptyStringsToNull(object) {
    for (var key in object) {
        if (object[key] === '') {
            object[key] = null;
        }
    }

    return object;
};

function getNestedChildren(arr, parent = 0) {
    var out = []
    for (var i in arr) {
        if (arr[i].parentId == parent) {
            var children = getNestedChildren(arr, arr[i].id)

            if (children.length) {
                arr[i].children = children
            }
            out.push(arr[i])
        }
    }
    return out
}

function pad(num, size) {
    if (num.toString().length >= size)
        return num;
    return (Math.pow(10, size) + Math.floor(num)).toString().substring(1);
}

function err(err) {
    var msg;
    if (err.errors) {
        msg = JSON.stringify(err.errors);
    } else if (err.message) {
        msg = err.message;
        if (err.sql) {
            msg += ' SQL: ' + err.sql;
        }
    } else if (err.msg) {
        msg = JSON.stringify(err);
    } else {
        msg = JSON.stringify(err);
    }

    return msg;
} 