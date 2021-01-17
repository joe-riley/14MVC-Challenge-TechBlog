// Dependencies
const Sequelize = require('sequelize');
const process = require('dotenv');

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_APP_DATABASE,
    process.env.DB_USER, 
    process.env.DB_PASS, 
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql'
    });

// Exports the connection for other files to use
module.exports = sequelize;
