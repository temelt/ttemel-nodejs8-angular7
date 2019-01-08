"use strict";
var fs = require("fs");
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var { DB_CONFIG } = require('../config');
var db = {};

var sequelize = new Sequelize(
    DB_CONFIG.database,
    DB_CONFIG.username,
    DB_CONFIG.password,
    DB_CONFIG.connectionOptions
);

var dbFiles = {
    Book: './book.js',
    Author: './author.js'
}

Object.keys(dbFiles).forEach(function (key) {
    var model = sequelize.import(dbFiles[key]);
    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;