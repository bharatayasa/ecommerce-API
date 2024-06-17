const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config()

console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "****" : "Not Set");
console.log("DB_HOST:", process.env.DB_HOST);

const database  = process.env.DB_NAME;
const user      = process.env.DB_USER;
const password  = process.env.DB_PASSWORD;
const host      = process.env.DB_HOST;

const conn = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql'
});

// Test connection
conn.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = conn;
