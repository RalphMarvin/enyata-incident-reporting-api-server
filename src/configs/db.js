require('dotenv').config();
const seq = require('sequelize');

const dbUrl = process.env.DB_URL;
const dbConfig = new seq.Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: false,
});

module.exports = dbConfig;