const mysql = require("mysql")

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin999999',
  database: 'favorite_articles_tiezhu',
})

connection.connect();

module.exports = connection;


