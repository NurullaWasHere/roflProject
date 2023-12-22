"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../database/connection"));
var sequelize_1 = require("sequelize");
var BlodModel_1 = __importDefault(require("../BlogModule/BlodModel"));
var PostModel_1 = __importDefault(require("../PostModule/PostModel"));
var ReviewModel = connection_1.default.define('review', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    reviewText: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
BlodModel_1.default.hasMany(ReviewModel);
ReviewModel.belongsTo(BlodModel_1.default);
PostModel_1.default.hasMany(ReviewModel);
ReviewModel.belongsTo(PostModel_1.default);
exports.default = ReviewModel;
