var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1129',
  database: 'properties'
});

connection.connect(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('connected!');
  }
});

module.exports = connection;