"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize').Sequelize;
require('dotenv').config();
var sequelize = new Sequelize("guarddate", "postgres", "gazizorda101", {
    host: 'localhost',
    dialect: 'postgres',
    port: "5432",
    define: {
        charset: 'utf-8',
        collate: 'utf8_general_ci'
    }
});
exports.default = sequelize;
