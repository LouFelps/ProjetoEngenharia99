const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'teste',
  password: 'teste',
  database: 'teste'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database!');
});

module.exports = connection;
