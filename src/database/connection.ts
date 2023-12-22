const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("guarddate", "postgres",  "gazizorda101", {
    host: 'localhost',
    dialect: 'postgres',
    port: "5432",
    define: {
        charset: 'utf-8',
        collate: 'utf8_general_ci'
    }
})

export default sequelize;