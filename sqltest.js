var sql = require('./mysql.js');
sql.open();
result = sql.query();
sql.close();

console.log(result);
