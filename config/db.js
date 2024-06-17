const mysql = require('mysql')

const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
})

connection.connect(async(error) => {
    try {
        console.log("connected to database mysql");
    } catch (error) {
        console.log("failed connecting to database");
    }
})

module.exports = connection
