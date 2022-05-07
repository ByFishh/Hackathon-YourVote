const mysql = require('mysql2');
require('dotenv').config()

let dbConn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: 3306,
    timezone: "local"
});
dbConn.connect((err) => {

    if (err) throw err;

});

module.exports = dbConn;
