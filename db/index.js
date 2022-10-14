const mysql = require("mysql")

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin999999',
  database: 'db_mianshiya',
})

connection.connect();

module.exports = connection;


