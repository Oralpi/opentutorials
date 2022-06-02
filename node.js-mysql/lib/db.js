let mysql = require('mysql');
let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rhdwlsghks',
  database: 'opentutorial'
});

db.connect();

module.exports = db;