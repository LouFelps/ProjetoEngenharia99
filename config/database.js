const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'projetodoacao'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database!');
});

module.exports = connection;
