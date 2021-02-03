var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '130913',
    database : 'movie'
});

module.exports = db;
