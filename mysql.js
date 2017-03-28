var mysql = require('mysql');

var connection = mysql.createConnection(
    {
      host     : 'stusql.dcs.shef.ac.uk',
      port     : '3306',
      user     : 'team069',
      password : 'f1cbdf4f',
      database : 'team069'
    }
);
connection.connect();
var query = connection.query('SELECT * FROM test');

query.on('error', function(err) {
    throw err;
});

query.on('fields', function(fields) {
    console.log(fields);
});

query.on('result', function(row) {
    console.log(row);
});
connection.end();
